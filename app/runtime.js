/* Runtime mínimo para las pantallas de KM Studio (plantillas sc-if / sc-for con {{ }}). */
(function () {
  const SAVE_PREFIX = 'kmS.';
  class DCLogic {
    constructor(props) { this.props = props || {}; this.state = {}; this.__q = false; this.__name = ''; }
    setState(o) {
      const patch = typeof o === 'function' ? o(this.state) : o;
      Object.assign(this.state, patch);
      this.__save(); this.__sched();
    }
    forceUpdate() { this.__sched(); }
    __sched() { if (this.__q || !this.__on) return; this.__q = true; Promise.resolve().then(() => { this.__q = false; if (this.__on && this.__draw) this.__draw(); }); }
    __save() {
      if (!this.__name) return;
      clearTimeout(this.__st);
      this.__st = setTimeout(() => { try { localStorage.setItem(SAVE_PREFIX + this.__name, JSON.stringify(this.state)); } catch (e) {} }, 120);
    }
  }
  window.DCLogic = DCLogic;

  const look = (path, scope) => {
    path = path.trim(); if (path === 'true') return true; if (path === 'false') return false;
    const p = path.split('.'); let v = scope[p[0]];
    for (let i = 1; i < p.length && v != null; i++) v = v[p[i]];
    return v;
  };
  const interp = (s, scope) => s.replace(/\{\{([^}]+)\}\}/g, (m, p) => { const v = look(p, scope); return v == null ? '' : String(v); });
  const whole = (s) => { const m = /^\s*\{\{([^}]+)\}\}\s*$/.exec(s || ''); return m ? m[1] : null; };
  const EV = { onclick: 'click', onchange: 'change', oninput: 'input', onfocus: 'focus', onblur: 'blur', onkeydown: 'keydown' };

  function build(node, scope, parent) {
    if (node.nodeType === 3) { parent.appendChild(document.createTextNode(interp(node.textContent, scope))); return; }
    if (node.nodeType !== 1) return;
    const tag = node.localName;
    if (tag === 'sc-if') { const w = whole(node.getAttribute('value')); if (w && look(w, scope)) for (const c of node.childNodes) build(c, scope, parent); return; }
    if (tag === 'sc-for') {
      const w = whole(node.getAttribute('list')); const list = (w && look(w, scope)) || []; const as = node.getAttribute('as');
      list.forEach((it, i) => { const sc = Object.assign({}, scope, { [as]: it, $index: i }); for (const c of node.childNodes) build(c, sc, parent); });
      return;
    }
    if (tag === 'script' || tag === 'helmet') return;
    const el = document.createElementNS(node.namespaceURI, tag);
    const h = {};
    for (const a of node.attributes) {
      if (a.name.startsWith('hint-')) continue;
      if (EV[a.name.toLowerCase()]) { const w = whole(a.value); const f = w ? look(w, scope) : null; if (typeof f === 'function') h[EV[a.name.toLowerCase()]] = f; continue; }
      const w = whole(a.value); let val;
      if (w !== null) { const v = look(w, scope); val = v == null ? '' : String(v); } else val = interp(a.value, scope);
      el.setAttribute(a.name, val);
    }
    el.__h = h;
    for (const c of node.childNodes) build(c, scope, el);
    parent.appendChild(el);
  }

  function syncEl(live, fresh) {
    for (const a of Array.from(live.attributes)) if (!fresh.hasAttribute(a.name)) live.removeAttribute(a.name);
    for (const a of Array.from(fresh.attributes)) if (live.getAttribute(a.name) !== a.value) live.setAttribute(a.name, a.value);
    const old = live.__h || {}, nw = fresh.__h || {};
    for (const k in old) if (!nw[k]) live['on' + k] = null;
    for (const k in nw) live['on' + k] = nw[k];
    live.__h = nw;
  }
  function patch(live, fresh) { syncEl(live, fresh); kids(live, fresh); }
  function kids(live, fresh) {
    const lc = live.childNodes, fc = Array.from(fresh.childNodes);
    for (let i = 0; i < fc.length; i++) {
      const f = fc[i], l = lc[i];
      if (!l) { live.appendChild(adopt(f)); continue; }
      if (l.nodeType === f.nodeType && (l.nodeType === 3 || (l.localName === f.localName && l.namespaceURI === f.namespaceURI))) {
        if (l.nodeType === 3) { if (l.nodeValue !== f.nodeValue) l.nodeValue = f.nodeValue; } else patch(l, f);
      } else { live.replaceChild(adopt(f), l); }
    }
    while (lc.length > fc.length) live.removeChild(live.lastChild);
    const t = live.localName;
    if (t === 'input' || t === 'textarea' || t === 'select') {
      const want = fresh.getAttribute('value');
      if (t === 'input' && (live.type === 'checkbox' || live.type === 'radio')) { live.checked = fresh.hasAttribute('checked'); }
      else if (want !== null || t === 'textarea') {
        const v = t === 'textarea' ? fresh.textContent : want;
        if (document.activeElement !== live && live.value !== v) live.value = v;
      }
    }
  }
  function adopt(f) { if (f.nodeType === 1) { const w = (e) => { const h = e.__h || {}; for (const k in h) e['on' + k] = h[k]; for (const c of e.children) w(c); }; w(f); } return f; }

  const tplCache = {};
  function tplDoc(name, html) { if (!tplCache[name]) { const t = document.createElement('template'); t.innerHTML = html; tplCache[name] = t.content; } return tplCache[name]; }

  const app = { cur: null, name: null };
  function mount(name) {
    const sc = window.KM_SCREENS[name]; if (!sc) return;
    if (app.cur) { try { app.cur.componentWillUnmount && app.cur.componentWillUnmount(); } catch (e) {} app.cur.__on = false; }
    const host = document.getElementById('app');
    const comp = new sc.Comp({ theme: 'noche' });
    comp.__name = name;
    try { const s = JSON.parse(localStorage.getItem(SAVE_PREFIX + name) || 'null'); if (s) Object.assign(comp.state, s); } catch (e) {}
    comp.__on = true;
    const root = document.createElement('div'); root.id = 'screen'; host.replaceChildren(root);
    const doc = tplDoc(name, sc.tpl);
    comp.__draw = () => {
      const vals = comp.renderVals();
      const tmp = document.createElement('div');
      for (const c of doc.childNodes) build(c, vals, tmp);
      kids(root, tmp);
      const km = root.querySelector('.kmroot'); if (km) document.documentElement.dataset.theme = km.dataset.theme || '';
    };
    app.cur = comp; app.name = name;
    comp.__draw();
    if (comp.componentDidMount) comp.componentDidMount();
    comp.__draw();
    const sc2 = root.querySelector('.kmroot > div:first-child'); if (sc2) sc2.scrollTop = 0;
  }
  const route = () => { const n = (location.hash || '').replace(/^#\/?/, '') || 'Main'; if (n !== app.name) mount(window.KM_SCREENS[n] ? n : 'Main'); };
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    const m = /([A-Za-z]+)\.dc\.html$/.exec(a.getAttribute('href') || ''); if (!m) return;
    e.preventDefault(); location.hash = '#/' + m[1];
  });
  window.addEventListener('hashchange', route);
  window.KM = { mount, route, app };
})();
