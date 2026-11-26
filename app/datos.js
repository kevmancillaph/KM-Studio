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
  // Varios cronómetros: kmS.Proyecto.runs = [{id, idx, start}]. Lee el formato viejo (running + runStart).
  const runsOf = (s) => { if (Array.isArray(s.runs) && s.runs.length) return s.runs.filter((r) => r && r.id != null && r.idx != null); if (s.running && s.running.id != null) return [{ id: s.running.id, idx: s.running.idx, start: s.runStart || Date.now() }]; return []; };
  const runs = () => runsOf(J('kmS.Proyecto', {}));
  const setRuns = (arr) => { const s = J('kmS.Proyecto', {}); s.runs = arr; s.running = null; s.runStart = 0; W('kmS.Proyecto', s); };
  const isRun = (id, idx) => runs().some((r) => r.id === id && r.idx === idx);
  const addTime = (arr, list) => { const now = Date.now(); return arr.map((x) => { let t = null; list.forEach((r) => { if (r.id !== x.id) return; t = t || { ...(x.times || {}) }; t[r.idx] = (t[r.idx] || 0) + Math.max(0, (now - r.start) / 1000); }); return t ? { ...x, times: t } : x; }); };
  const getRun = () => { const a = runs(); const r = a[a.length - 1]; return { run: r ? { id: r.id, idx: r.idx } : null, start: r ? r.start : 0, all: a }; };
  const saveItems = (arr) => { const s = J('kmS.Proyecto', {}); s.items = arr; W('kmS.Proyecto', s); };
  const startRun = (id, idx) => { if (isRun(id, idx)) return; setRuns(runs().concat([{ id, idx, start: Date.now() }])); };
  const stopRun = (id, idx) => { const a = runs(); const hit = a.filter((r) => r.id === id && r.idx === idx); if (!hit.length) return false; saveItems(addTime(items(), hit)); setRuns(a.filter((r) => !(r.id === id && r.idx === idx))); return true; };
  const pauseAll = () => { const a = runs(); if (!a.length) return []; saveItems(addTime(items(), a)); setRuns([]); return a.map((r) => ({ id: r.id, idx: r.idx })); };
  const resumeAll = (list) => { const a = runs(); const now = Date.now(); (list || []).forEach((r) => { if (!a.some((x) => x.id === r.id && x.idx === r.idx)) a.push({ id: r.id, idx: r.idx, start: now }); }); setRuns(a); };
  const setRun = (r, t) => { if (!r) { pauseAll(); return; } setRuns(runs().filter((x) => !(x.id === r.id && x.idx === r.idx)).concat([{ id: r.id, idx: r.idx, start: t || Date.now() }])); };
  const pauseNow = () => { const r = getRun().run; if (!r) return null; stopRun(r.id, r.idx); return r; };
  // ¿Sigues trabajando? kmAsk = {on, every, wait, discount} (min). kmAskOk = último "Sí, sigo".
  // Si pasan every+wait min sin respuesta, se cortan todos los cronómetros en el minuto every (o every+wait sin descuento).
  const askCfg = () => { const a = J('kmAsk', null) || {}; return { on: a.on !== false, every: a.every || 45, wait: a.wait || 5, discount: a.discount !== false }; };
  const idleBase = () => { const a = runs(); if (!a.length) return 0; return Math.max(Number(J('kmAskOk', 0)) || 0, ...a.map((r) => r.start || 0)); };
  const cutUntil = (end) => { const a = runs(); if (!a.length) return null; const list = a.map((r) => ({ id: r.id, idx: r.idx, secs: Math.max(0, (end - r.start) / 1000) })); saveItems(items().map((x) => { let t = null; list.forEach((r) => { if (r.id !== x.id) return; t = t || { ...(x.times || {}) }; t[r.idx] = (t[r.idx] || 0) + r.secs; }); return t ? { ...x, times: t } : x; })); setRuns([]); const info2 = { at: end, when: Date.now(), list }; W('kmIdleCut', info2); return info2; };
  const idleCheck = () => { const c = askCfg(); const b = idleBase(); if (!c.on || !b) return { state: 'off' }; const el = Date.now() - b; const ask = b + c.every * 60000; if (el >= (c.every + c.wait) * 60000) return { state: 'cut', cut: cutUntil(c.discount ? ask : ask + c.wait * 60000) }; if (el >= c.every * 60000) return { state: 'ask', since: ask, deadline: ask + c.wait * 60000, cfg: c }; return { state: 'run', next: ask }; };
  const idleYes = () => W('kmAskOk', Date.now());
  const idleNo = () => { const c = askCfg(); const b = idleBase(); if (!b) return null; const ask = b + c.every * 60000; return cutUntil(c.discount ? Math.min(ask, Date.now()) : Date.now()); };
  // "Sí, seguía": suma lo que faltó desde el corte hasta ahora y vuelve a correr. Si esa etapa ya corre otra vez, suma solo hasta que se reinició.
  const idleResume = () => { const c = J('kmIdleCut', null); if (!c || !c.list) return 0; const now = Date.now(); const a = runs(); let total = 0; const add = []; const its = items(); c.list.forEach((r) => { const it = its.find((x) => x.id === r.id); if (!it || (it.skip || {})[r.idx]) return; const again = a.find((x) => x.id === r.id && x.idx === r.idx); const end = again ? again.start : now; const secs = Math.max(0, (end - c.at) / 1000); total = Math.max(total, secs); add.push({ id: r.id, idx: r.idx, secs }); if (!again && !(it.done || {})[r.idx]) a.push({ id: r.id, idx: r.idx, start: now }); }); saveItems(items().map((x) => { let t = null; add.forEach((r) => { if (r.id !== x.id) return; t = t || { ...(x.times || {}) }; t[r.idx] = (t[r.idx] || 0) + r.secs; }); return t ? { ...x, times: t } : x; })); setRuns(a); W('kmAskOk', now); try { localStorage.removeItem('kmIdleCut'); } catch (e) {} return total; };
  const setTime = (id, idx, secs) => { const a = runs(); setRuns(a.filter((r) => !(r.id === id && r.idx === idx))); saveItems(items().map((x) => x.id === id ? { ...x, times: { ...(x.times || {}), [idx]: Math.max(0, secs) } } : x)); };
  const finishNow = (run) => { if (!run) return; let t = 0; saveItems(items().map((x) => { if (x.id !== run.id) return x; t = (x.times || {})[run.idx] || 0; return { ...x, done: { ...(x.done || {}), [run.idx]: true } }; })); try { addLog(1, t); } catch (e) {} };
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
  return { hasSample, J, W, today, iso, toDate, diff, MESES, DIAS, cap, group, seed, types, items, saveItems, runsOf, runs, setRuns, isRun, startRun, stopRun, pauseAll, resumeAll, getRun, setRun, pauseNow, finishNow, askCfg, idleCheck, idleYes, idleNo, idleResume, setTime, info, pending, clients, owed, goal, log, addLog, doneToday, streak, weekSecs, monthPaid, acc, dayLabel, longDate, nextEvent, planCobro };
})();
