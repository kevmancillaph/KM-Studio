window.KM_DATA = (function () {
  const J = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
  const W = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = () => iso(new Date());
  const toDate = (k) => { const p = String(k).split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])); };
  const diff = (a, b) => Math.round((toDate(a) - toDate(b)) / 86400000);
  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const group = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  function seed() {
    ['Proyecto', 'Clientes', 'Ajustes'].forEach((n) => {
      if (localStorage.getItem('kmS.' + n)) return;
      const sc = window.KM_SCREENS && window.KM_SCREENS[n]; if (!sc) return;
      try { const c = new sc.Comp({ theme: 'noche' }); const s = {}; Object.keys(c.state).forEach((k) => { if (k[0] !== '_') s[k] = c.state[k]; }); W('kmS.' + n, s); } catch (e) {}
    });
  }
  const types = () => { try { return window.KM_SCREENS.Proyecto.Comp.prototype.kmTypes.call({}); } catch (e) { return {}; } };
  const items = () => J('kmS.Proyecto', {}).items || [];
  const getRun = () => { const s = J('kmS.Proyecto', {}); return { run: s.running || null, start: s.runStart || 0 }; };
  const setRun = (r, t) => { const s = J('kmS.Proyecto', {}); s.running = r; s.runStart = t || 0; W('kmS.Proyecto', s); };
  const saveItems = (arr) => { const s = J('kmS.Proyecto', {}); s.items = arr; W('kmS.Proyecto', s); };
  const info = (it) => { const T = types()[it.type] || { stages: [], short: '' }; const n = T.stages.length; let done = 0; let cur = -1; for (let i = 0; i < n; i++) { if (it.done && it.done[i]) done++; else if (cur < 0) cur = i; } return { stages: T.stages, short: T.short, n, done, cur, all: n > 0 && cur < 0, pct: n ? Math.round(done / n * 100) : 0 }; };
  const pending = () => items().filter((x) => !info(x).all).sort((a, b) => String(a.due || '9').localeCompare(String(b.due || '9')));
  const clients = () => (J('kmS.Clientes', {}).clients || []).filter((c) => !c.archived);
  const owed = (c) => (!c.quote || c.quote.status === 'aceptada') ? Math.max(0, (c.total || 0) - (c.paid || 0)) : 0;
  const goal = () => { const c = J('kmS.Ajustes', {}).cfg; return (c && Number(c.goal)) || 5; };
  const log = () => J('kmLog', {});
  const addLog = (n, secs) => { const l = log(); const k = today(); const e = l[k] || { n: 0, secs: 0 }; e.n += n; e.secs += Math.round(secs || 0); const h = new Date().getHours(); const b = h < 9 ? 0 : h < 12 ? 1 : h < 15 ? 2 : h < 18 ? 3 : h < 21 ? 4 : 5; e.hrs = e.hrs || [0, 0, 0, 0, 0, 0]; e.hrs[b] += n; l[k] = e; W('kmLog', l); };
  const doneToday = () => (log()[today()] || { n: 0 }).n;
  const streak = () => { const l = log(); const g = goal(); let d = new Date(); let c = 0; if (!((l[iso(d)] || { n: 0 }).n >= g)) d.setDate(d.getDate() - 1); while ((l[iso(d)] || { n: 0 }).n >= g) { c++; d.setDate(d.getDate() - 1); } return c; };
  const weekSecs = () => { const l = log(); let s = 0; for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); s += (l[iso(d)] || { secs: 0 }).secs; } return s; };
  const monthPaid = () => { const now = new Date(); let t = 0; clients().forEach((c) => (c.payments || []).forEach((p) => { const m = /(\d+)\s+de\s+([a-záéíóú]+)/i.exec(p.when || ''); if (m) { const mi = MESES.indexOf(m[2].toLowerCase()); if (mi === now.getMonth()) t += Number(p.amount) || 0; } })); return t; };
  const acc = () => J('kmAcc', []);
  const dayLabel = (k) => { const d = diff(k, today()); if (d === 0) return 'Hoy'; if (d === 1) return 'Mañana'; const dt = toDate(k); return d > 0 && d < 7 ? cap(DIAS[dt.getDay()]) : dt.getDate() + ' ' + MESES[dt.getMonth()].slice(0, 3); };
  const longDate = (k) => { const dt = toDate(k); return cap(DIAS[dt.getDay()]) + ' ' + dt.getDate() + ' de ' + MESES[dt.getMonth()]; };
  const nextEvent = () => {
    const t = today(); const ev = [];
    acc().forEach((q) => { if (q.event && q.event >= t) ev.push({ d: q.event, title: (q.isFijo === false ? 'Evento' : 'Boda') + ' · ' + q.client }); });
    clients().forEach((c) => { if (c.event && c.event >= t) ev.push({ d: c.event, title: (c.kind === 'Boda' ? 'Boda de ' : 'Evento · ') + c.name }); });
    ev.sort((a, b) => a.d.localeCompare(b.d));
    return ev[0] || null;
  };
  const planCobro = () => {
    const t = today(); let best = null;
    clients().forEach((c) => { const p = c.plan; if (!p || !p.start) return; for (let k = 0; k < 6; k++) { const dt = toDate(p.start); dt.setDate(dt.getDate() + (p.days || 14) * k); const d = iso(dt); if (d >= t) { if (!best || d < best.d) best = { d, c }; break; } } });
    return best;
  };
  const hasSample = () => { try { if (localStorage.getItem('kmVacio') === '1') return false; } catch (e) {} const c = J('kmS.Clientes', {}).clients; return Array.isArray(c) ? c.some((x) => x.id <= 5 && !x.accNew) : true; };
  return { hasSample, J, W, today, iso, toDate, diff, MESES, DIAS, cap, group, seed, types, items, saveItems, getRun, setRun, info, pending, clients, owed, goal, log, addLog, doneToday, streak, weekSecs, monthPaid, acc, dayLabel, longDate, nextEvent, planCobro };
})();
