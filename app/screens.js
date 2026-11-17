window.KM_SCREENS={};
window.KM_SCREENS["Main"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1700px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:18px\">\n\n<div style=\"display:flex;justify-content:space-between;align-items:center\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:13px;color:var(--muted)\">{{dateLabel}}</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Hoy avanzas</span>\n</div>\n<div style=\"display:flex;align-items:center;gap:8px\">\n<div style=\"display:flex;align-items:center;gap:6px;background:var(--card2);border-radius:999px;padding:8px 14px\">\n<svg class=\"km-flame\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--warn)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>\n<span style=\"font-weight:600;font-size:14px\">{{streak}} d\u00edas</span>\n</div>\n<a href=\"Ajustes.dc.html\" aria-label=\"Ajustes y temas\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:999px;background:var(--card2)\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>\n</a>\n</div>\n</div>\n\n<div style=\"display:flex;align-items:center;gap:18px;background:var(--card);border-radius:var(--r3);padding:18px\">\n<div style=\"position:relative;width:84px;height:84px;flex:none\">\n<svg width=\"84\" height=\"84\" viewBox=\"0 0 84 84\" aria-hidden=\"true\"><circle cx=\"42\" cy=\"42\" r=\"34\" fill=\"none\" stroke=\"var(--track)\" stroke-width=\"9\"/><circle cx=\"42\" cy=\"42\" r=\"34\" fill=\"none\" stroke=\"var(--accentText)\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-dasharray=\"213.6\" stroke-dashoffset=\"{{ringOffset}}\" transform=\"rotate(-90 42 42)\" style=\"transition:stroke-dashoffset 0.5s ease\"/></svg>\n<div style=\"position:absolute;left:0;top:0;width:84px;height:84px;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:700;font-size:22px\">{{goalText}}</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{goalHeadline}}</span>\n<span style=\"font-size:14px;color:var(--muted);line-height:1.4\">{{goalSub}}</span>\n</div>\n</div>\n\n<sc-if value=\"{{celebrate}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;align-items:center;gap:12px;background:var(--card2);border:1px solid var(--accent);border-radius:var(--r2);padding:12px 16px;animation:pop 0.3s ease\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;background:var(--accent);flex:none\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--onAccent)\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg></span>\n<span style=\"font-size:14px;font-weight:600\">{{msg}}</span>\n</div>\n</sc-if>\n\n<sc-if value=\"{{noNext}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--card);border-radius:var(--r3);padding:18px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Sin entregas pendientes</span>\n<span style=\"font-size:14px;color:var(--muted);line-height:1.4\">Crea un video en Entregas o acepta una cotizaci\u00f3n y aparece aqu\u00ed con su etapa y el cron\u00f3metro.</span>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-weight:600;font-size:15px;margin-top:6px\">Ir a Entregas</a>\n</div>\n</sc-if>\n<sc-if value=\"{{hasNext}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--accent);color:var(--onAccent);border-radius:var(--r3);padding:18px\">\n<div style=\"display:flex;justify-content:space-between;align-items:center\">\n<span style=\"font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase\">Sigue ahora</span>\n<span style=\"font-size:12px;font-weight:600;background:var(--onAccent);color:var(--accent);border-radius:999px;padding:4px 10px\">{{dueChip}}</span>\n</div>\n<span style=\"font-family:var(--display);font-weight:700;font-size:22px;line-height:1.15\">{{nextTitle}}</span>\n<span style=\"font-size:14px\">{{stageLine}}</span>\n<div style=\"height:8px;border-radius:999px;background:color-mix(in srgb,var(--onAccent) 22%,transparent)\"><div style=\"width:{{barW}}%;height:8px;border-radius:999px;background:var(--onAccent);transition:width 0.4s ease\"></div></div>\n<div style=\"display:flex;align-items:baseline;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:36px;letter-spacing:-0.5px\">{{timerText}}</span>\n<span style=\"font-size:13px\">en esta etapa</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<button onClick=\"{{toggleTimer}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);border:2px solid var(--onAccent);font-weight:600;font-size:15px;box-sizing:border-box\">{{timerLabel}}</button>\n<button onClick=\"{{finish}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);background:var(--onAccent);color:var(--accent);font-weight:600;font-size:15px\">Etapa lista</button>\n</div>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;align-items:center;justify-content:center;height:44px;font-size:13px;font-weight:600\">Ver todas las entregas</a>\n</div>\n</sc-if>\n\n<a href=\"Tiempos.dc.html\" style=\"display:flex;align-items:center;gap:12px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r1);background:var(--card2);flex:none\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/></svg></span>\n<span style=\"display:flex;flex-direction:column;gap:2px;flex:1;min-width:0\">\n<span style=\"font-weight:600;font-size:15px\">{{weekText}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">Tiempos, Bs por hora y etapa m\u00e1s lenta</span>\n</span>\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n</a>\n\n<a href=\"Agenda.dc.html\" style=\"display:flex;align-items:center;gap:12px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r1);background:var(--accent);flex:none\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--onAccent)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg></span>\n<span style=\"display:flex;flex-direction:column;gap:2px;flex:1;min-width:0\">\n<span style=\"font-weight:600;font-size:15px\">{{evtTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{evtSub}}</span>\n</span>\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n</a>\n\n<sc-if value=\"{{hasFollow}}\" hint-placeholder-val=\"{{ false }}\">\n<a href=\"Clientes.dc.html\" style=\"display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--warn);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"display:flex;flex-direction:column;gap:2px;flex:1;min-width:0\">\n<span style=\"font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase;color:var(--warn)\">Seguimiento</span>\n<span style=\"font-weight:600;font-size:15px\">{{followTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{followSub}}</span>\n</span>\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n</a>\n</sc-if>\n\n<sc-if value=\"{{hasCobro}}\" hint-placeholder-val=\"{{ false }}\">\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border:1px solid var(--accent);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\"><span style=\"font-weight:600;font-size:15px\">{{cobroHead}}</span><span style=\"font-size:13px;color:var(--muted)\">{{cobroWhen}}</span></div>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{cobroLine}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{cobroSub}}</span>\n</a>\n</sc-if>\n\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline\">\n<span style=\"font-weight:600;font-size:15px\">Por cobrar</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px;color:var(--accentText)\">{{owedTotal}}</span>\n</div>\n<sc-if value=\"{{noOwed}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"font-size:13px;color:var(--muted)\">Nadie te debe por ahora.</span></sc-if>\n<sc-for list=\"{{owedRows}}\" as=\"r\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px;border-top:1px solid var(--line);padding-top:10px\"><span style=\"display:flex;flex-direction:column;gap:1px\"><span style=\"font-weight:600;font-size:14px\">{{r.name}}</span><span style=\"font-size:12px;color:var(--muted)\">{{r.sub}}</span></span><span style=\"font-weight:600;font-size:14px\">{{r.amt}}</span></div>\n</sc-for>\n</a>\n\n<div style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-weight:600;font-size:15px\">Cobrado este mes</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:26px;color:var(--accentText)\">{{paidMonth}}</span>\n</div>\n\n<sc-if value=\"{{hasQueue}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:10px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">En cola</span>\n<sc-for list=\"{{queue}}\" as=\"q\" hint-placeholder-count=\"2\">\n<div style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:center\">\n<span style=\"font-weight:600;font-size:15px\">{{q.title}}</span>\n<span style=\"font-size:12px;font-weight:600;color:{{q.color}}\">{{q.when}}</span>\n</div>\n<div style=\"display:flex;align-items:center;gap:10px\">\n<div style=\"flex:1;height:6px;border-radius:999px;background:var(--track)\"><div style=\"width:{{q.pct}}%;height:6px;border-radius:999px;background:var(--accent)\"></div></div>\n<span style=\"font-size:12px;color:var(--muted)\">{{q.stage}}</span>\n</div>\n</div>\n</sc-for>\n</div>\n</sc-if>\n</div>\n\n<sc-if value=\"{{confetti}}\" hint-placeholder-val=\"{{ false }}\">\n<div aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;width:390px;height:720px;overflow:hidden;pointer-events:none\">\n<sc-for list=\"{{confettiBits}}\" as=\"b\" hint-placeholder-count=\"0\">\n<span class=\"km-bit\" style=\"left:{{b.x}}%;width:{{b.w}}px;height:{{b.h}}px;background:{{b.c}};animation-delay:{{b.d}}s\"></span>\n</sc-for>\n</div>\n</sc-if>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = { running: false, accum: 0, runStart: 0, _msg: '' };
}
componentDidMount() {
this.kmStart();
this.tick = setInterval(() => { if (this.state.running) this.forceUpdate(); }, 1000);
}
componentWillUnmount() {
this.kmStop();
clearInterval(this.tick);
}
kmRender() {
const D = window.KM_DATA;
const st = this.state;
const pad = (n) => String(Math.floor(n)).padStart(2, '0');
const fmt = (s) => pad(s / 3600) + ':' + pad((s % 3600) / 60) + ':' + pad(s % 60);
const now = new Date();
const T = D ? D.today() : '';
const dateLabel = D ? D.longDate(T) : '';
const pend = D ? D.pending() : [];
const nx = pend[0] || null;
const inf = nx ? D.info(nx) : null;
const secs = st.accum + (st.running ? (Date.now() - st.runStart) / 1000 : 0);
const goal = D ? D.goal() : 5;
const dn = D ? D.doneToday() : 0;
const goalDone = dn >= goal;
const streak = D ? D.streak() : 0;
const gv = D ? D.group : (n) => String(n);
let dueChip = '';
if (nx && nx.due) { const d = D.diff(nx.due, T); dueChip = d < 0 ? 'Vencida hace ' + (-d) + (d === -1 ? ' día' : ' días') : d === 0 ? 'Entrega hoy' : d === 1 ? 'Entrega mañana' : 'Entrega en ' + d + ' días'; } else if (nx) dueChip = 'Sin fecha';
const ev = D ? D.nextEvent() : null;
let evtTitle = 'Sin eventos próximos', evtSub = 'Acepta una cotización con fecha y aparece aquí.';
if (ev) { const d = D.diff(ev.d, T); evtTitle = ev.title; evtSub = D.longDate(ev.d) + (d === 0 ? ' · hoy' : d === 1 ? ' · mañana' : ' · en ' + d + ' días'); }
else if (nx && nx.due) { evtTitle = nx.name + ' · ' + nx.client; evtSub = 'Próxima entrega: ' + D.longDate(nx.due); }
const cl = D ? D.clients() : [];
const fu = cl.find((c) => c.quote && c.quote.status === 'sinrespuesta');
const pc = D ? D.planCobro() : null;
const pcd = pc ? D.diff(pc.d, T) : 99;
const showCobro = !!pc && pcd <= 7;
const owedRows = cl.map((c) => ({ c, o: D.owed(c) })).filter((x) => x.o > 0).sort((a, b) => b.o - a.o);
const owedTotal = owedRows.reduce((a, x) => a + x.o, 0);
const week = D ? D.weekSecs() : 0;
const wh = week / 3600;
const queue = pend.slice(1, 4).map((it) => { const i2 = D.info(it); const d = it.due ? D.diff(it.due, T) : 9; return { title: it.name + ' · ' + it.client, when: it.due ? D.dayLabel(it.due) : 'Sin fecha', color: d <= 1 ? 'var(--warn)' : 'var(--muted)', pct: i2.pct, stage: i2.cur >= 0 ? i2.stages[i2.cur] : '' }; });
return {
dateLabel,
goalText: dn + '/' + goal,
streak,
ringOffset: 213.6 * (1 - Math.min(1, dn / goal)),
goalHeadline: goalDone ? 'Meta cumplida' : 'Meta del día',
goalSub: goalDone ? (streak > 1 ? 'Racha en ' + streak + ' días. La cola sigue mañana.' : 'Cerraste el día. La cola sigue mañana.') : 'Te faltan ' + (goal - dn) + (goal - dn === 1 ? ' etapa' : ' etapas') + ' para cerrar el día.',
celebrate: !!st._msg,
msg: st._msg,
hasNext: !!nx, noNext: !nx,
nextTitle: nx ? nx.name + ' · ' + nx.client : '',
dueChip,
stageLine: inf ? 'Etapa ' + (inf.cur + 1) + ' de ' + inf.n + ': ' + inf.stages[inf.cur] : '',
barW: inf ? inf.pct : 0,
timerText: fmt(secs),
timerLabel: st.running ? 'Pausar' : 'Iniciar',
weekText: wh >= 0.1 ? (Math.round(wh * 10) / 10 + '').replace('.', ',') + ' h de edición en 7 días' : 'Sin horas registradas esta semana',
evtTitle, evtSub,
hasFollow: !!fu, followTitle: fu ? 'Sin respuesta: ' + fu.name : '', followSub: fu ? 'Cotización N.º ' + fu.quote.no + ' enviada hace ' + fu.quote.daysAgo + ' días. ¿Les escribes?' : '',
hasCobro: showCobro,
cobroHead: showCobro ? 'Cobro del plan' : '',
cobroWhen: showCobro ? D.longDate(pc.d) : '',
cobroLine: showCobro ? pc.c.name + ' · Bs ' + gv(D.owed(pc.c) || (pc.c.plan.price || 0)) : '',
cobroSub: showCobro ? (pcd === 0 ? 'Hoy es día de grabación y cobro.' : pcd === 1 ? 'Mañana es día de grabación y cobro.' : 'Faltan ' + pcd + ' días.') : '',
owedTotal: 'Bs ' + gv(owedTotal),
noOwed: owedRows.length === 0,
owedRows: owedRows.slice(0, 3).map((x) => ({ name: x.c.name, sub: x.c.saldo && x.c.saldo.text ? x.c.saldo.text : x.c.detail, amt: 'Bs ' + gv(x.o) })),
paidMonth: 'Bs ' + gv(D ? D.monthPaid() : 0),
hasQueue: queue.length > 0, queue,
toggleTimer: () => {
if (!nx) return;
this.kmSfx(st.running ? 'pause' : 'start');
if (st.running) this.setState({ running: false, accum: secs });
else this.setState({ running: true, runStart: Date.now() });
},
finish: () => {
if (!nx || inf.cur < 0) return;
const before = D.doneToday();
const goalNow = D.goal();
const items = D.items().map((x) => { if (x.id !== nx.id) return x; const done = { ...(x.done || {}) }; done[inf.cur] = true; const times = { ...(x.times || {}) }; times[inf.cur] = (times[inf.cur] || 0) + Math.round(secs); return { ...x, done, times }; });
D.saveItems(items);
D.addLog(1, secs);
const reached = before < goalNow && before + 1 >= goalNow;
this.kmSfx(reached ? 'goal' : 'done');
if (reached) this.kmParty();
try { if (navigator.vibrate) navigator.vibrate(30); } catch (e) {}
const mins = Math.max(1, Math.round(secs / 60));
const nxt = inf.cur + 1 < inf.n ? inf.stages[inf.cur + 1] : null;
this.setState({ _msg: inf.stages[inf.cur] + ' lista en ' + mins + ' min.' + (nxt ? ' Sigue: ' + nxt + '.' : ' Video listo.'), running: false, accum: 0 });
}
};
}
}

return Component;})()};
window.KM_SCREENS["Proyecto"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1560px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:18px\">\n<sc-if value=\"{{isList}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Entregas</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{listSub}}</span>\n</div>\n<div style=\"display:flex;gap:8px;flex:none\">\n<a href=\"Tiempos.dc.html\" aria-label=\"Ver an\u00e1lisis de tiempos\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r1);background:var(--card2)\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/></svg>\n</a>\n<button onClick=\"{{goNew}}\" style=\"display:flex;align-items:center;justify-content:center;gap:6px;height:44px;padding:0 16px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--onAccent)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg>Nuevo video</button>\n</div>\n</div>\n\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;background:var(--card);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{filters}}\" as=\"f\" hint-placeholder-count=\"2\">\n<button onClick=\"{{f.pick}}\" aria-pressed=\"{{f.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{f.bg}};color:{{f.fg}}\">{{f.name}}</button>\n</sc-for>\n</div>\n\n<sc-for list=\"{{groups}}\" as=\"g\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase;color:var(--muted)\">{{g.title}}</span>\n<sc-for list=\"{{g.items}}\" as=\"v\" hint-placeholder-count=\"2\">\n<div style=\"position:relative\">\n<button onClick=\"{{v.open}}\" onContextMenu=\"{{v.menu}}\" style=\"display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\">\n<span style=\"font-weight:600;font-size:16px\">{{v.name}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{v.client}} \u00b7 {{v.typeLabel}}</span>\n</div>\n<span style=\"font-size:12px;font-weight:600;border-radius:999px;padding:4px 10px;flex:none;margin-right:34px;background:var(--card2);color:{{v.dueColor}}\">{{v.dueLabel}}</span>\n</div>\n<div style=\"display:flex;align-items:center;gap:10px\">\n<div style=\"flex:1;height:6px;border-radius:999px;background:var(--track)\"><div style=\"width:{{v.pct}}%;height:6px;border-radius:999px;background:var(--accent)\"></div></div>\n<span style=\"font-size:12px;color:var(--muted)\">{{v.pct}}%</span>\n</div>\n<sc-if value=\"{{v.needsBrand}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"align-self:flex-start;font-size:12px;font-weight:600;border-radius:999px;padding:4px 10px;border:1px solid var(--warn);color:var(--warn)\">Falta l\u00ednea gr\u00e1fica</span>\n</sc-if>\n<div style=\"display:flex;justify-content:space-between;gap:8px;font-size:13px\">\n<span style=\"color:var(--muted)\">{{v.stage}}</span>\n<span style=\"font-weight:600;font-variant-numeric:tabular-nums;color:{{v.timeColor}}\">{{v.time}}</span>\n</div>\n</button>\n<button onClick=\"{{v.menu}}\" aria-label=\"Opciones\" style=\"position:absolute;top:6px;right:6px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:999px;color:var(--muted)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><circle cx=\"5\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/></svg></button>\n</div>\n</sc-for>\n</div>\n</sc-for>\n<sc-if value=\"{{isEmpty}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:14px;color:var(--muted)\">{{emptyText}}</span>\n</sc-if>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isDetail}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goList}}\" aria-label=\"Volver a Entregas\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px;line-height:1.1\">{{selName}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{selSub}}</span>\n</div>\n</div>\n\n<sc-if value=\"{{idleAsk}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:10px;border:1px solid var(--accent);border-radius:var(--r2);padding:14px 16px;background:var(--card)\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">\u00bfSigues trabajando?</span>\n<span style=\"font-size:14px;line-height:1.45\">Llevas {{askEvery}} min con el cron\u00f3metro corriendo. Si no respondes en {{askWait}} min, se pausa.</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<button onClick=\"{{idleYes}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">S\u00ed, sigo</button>\n<button onClick=\"{{idleNo}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--card2);font-size:14px;font-weight:600\">Pausar</button>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{canSimIdle}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{simIdle}}\" style=\"align-self:flex-start;min-height:44px;font-size:13px;font-weight:600;color:var(--accentText)\">Probar el aviso de {{askEvery}} min</button>\n</sc-if>\n<sc-if value=\"{{selNeedsBrand}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:10px;border:1px solid var(--warn);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px;color:var(--warn)\">Falta la l\u00ednea gr\u00e1fica</span>\n<span style=\"font-size:14px;line-height:1.45\">P\u00eddele a {{selClient}} el logo, los colores y la tipograf\u00eda antes de empezar. Si no llega, usas tu estilo y cambiarlo despu\u00e9s se cotiza aparte.</span>\n<button onClick=\"{{brandOk}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--card2);font-size:14px;font-weight:600\">Ya me la enviaron</button>\n</div>\n</sc-if>\n\n<div style=\"display:flex;align-items:center;gap:18px;background:var(--card);border-radius:var(--r3);padding:18px\">\n<div style=\"position:relative;width:84px;height:84px;flex:none\">\n<svg width=\"84\" height=\"84\" viewBox=\"0 0 84 84\" aria-hidden=\"true\"><circle cx=\"42\" cy=\"42\" r=\"34\" fill=\"none\" stroke=\"var(--track)\" stroke-width=\"9\"/><circle cx=\"42\" cy=\"42\" r=\"34\" fill=\"none\" stroke=\"var(--accentText)\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-dasharray=\"213.6\" stroke-dashoffset=\"{{ringOffset}}\" transform=\"rotate(-90 42 42)\" style=\"transition:stroke-dashoffset 0.4s ease\"/></svg>\n<div style=\"position:absolute;left:0;top:0;width:84px;height:84px;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:700;font-size:20px\">{{percent}}%</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{headline}}</span>\n<span style=\"font-size:14px;color:var(--muted);line-height:1.4\">{{subline}}</span>\n<span style=\"font-size:13px;font-weight:600\">Tiempo total: {{selTime}}</span>\n</div>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<sc-for list=\"{{stages}}\" as=\"st\" hint-placeholder-count=\"10\">\n<div style=\"display:flex;align-items:center;background:var(--card);border-radius:var(--r2);border:{{st.border}}\">\n<button onClick=\"{{st.toggle}}\" aria-pressed=\"{{st.done}}\" style=\"display:flex;align-items:center;gap:12px;flex:1;min-width:0;min-height:52px;padding:0 8px 0 16px\">\n<sc-if value=\"{{st.done}}\" hint-placeholder-val=\"{{ false }}\">\n<span class=\"km-pop\" style=\"display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:999px;background:var(--accent);flex:none\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--onAccent)\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg></span>\n</sc-if>\n<sc-if value=\"{{st.todo}}\" hint-placeholder-val=\"{{ true }}\">\n<span style=\"width:26px;height:26px;border-radius:999px;border:2px solid var(--line);box-sizing:border-box;flex:none\"></span>\n</sc-if>\n<span style=\"flex:1;min-width:0;font-size:15px;font-weight:500;color:{{st.labelColor}}\">{{st.label}}</span>\n<sc-if value=\"{{st.isCurrent}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:11px;font-weight:600;color:var(--onAccent);background:var(--accent);border-radius:999px;padding:3px 9px;flex:none\">Ahora</span>\n</sc-if>\n</button>\n<sc-if value=\"{{st.todo}}\" hint-placeholder-val=\"{{ true }}\">\n<button onClick=\"{{st.timer}}\" aria-label=\"{{st.timerAria}}\" style=\"display:flex;align-items:center;justify-content:center;gap:6px;min-width:88px;height:52px;padding:0 14px 0 6px;flex:none\">\n<sc-if value=\"{{st.running}}\" hint-placeholder-val=\"{{ false }}\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"var(--accentText)\" aria-hidden=\"true\"><rect x=\"6\" y=\"5\" width=\"4\" height=\"14\" rx=\"1\"/><rect x=\"14\" y=\"5\" width=\"4\" height=\"14\" rx=\"1\"/></svg>\n</sc-if>\n<sc-if value=\"{{st.paused}}\" hint-placeholder-val=\"{{ true }}\">\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"var(--muted)\" aria-hidden=\"true\"><path d=\"M7 4l13 8-13 8z\"/></svg>\n</sc-if>\n<span style=\"font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:{{st.timeColor}}\">{{st.timeText}}</span>\n</button>\n</sc-if>\n<sc-if value=\"{{st.done}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"display:flex;align-items:center;justify-content:flex-end;min-width:88px;padding:0 16px 0 6px;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted);flex:none\">{{st.timeText}}</span>\n</sc-if>\n</div>\n</sc-for>\n</div>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isNew}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goList}}\" aria-label=\"Cancelar\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<span style=\"font-family:var(--display);font-weight:700;font-size:22px\">Nuevo video</span>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-size:13px;color:var(--muted)\">Cliente</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\">\n<sc-for list=\"{{clientChips}}\" as=\"c\" hint-placeholder-count=\"4\">\n<button onClick=\"{{c.pick}}\" aria-pressed=\"{{c.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;box-sizing:border-box;font-size:14px;font-weight:600;border:2px solid {{c.border}};background:{{c.bg}};color:{{c.fg}}\">{{c.label}}</button>\n</sc-for>\n</div>\n<input type=\"text\" value=\"{{formClient}}\" onChange=\"{{setClient}}\" placeholder=\"U otro cliente\" aria-label=\"Nombre del cliente\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px\"/>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-size:13px;color:var(--muted)\">Tipo de video</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\">\n<sc-for list=\"{{typeChips}}\" as=\"c\" hint-placeholder-count=\"5\">\n<button onClick=\"{{c.pick}}\" aria-pressed=\"{{c.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;box-sizing:border-box;font-size:14px;font-weight:600;border:2px solid {{c.border}};background:{{c.bg}};color:{{c.fg}}\">{{c.label}}</button>\n</sc-for>\n</div>\n<div style=\"background:var(--card);border-radius:var(--r2);padding:12px 14px;display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-size:13px;font-weight:600\">{{typeCount}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.45\">{{typeStages}}</span>\n</div>\n</div>\n\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Nombre del video\n<input type=\"text\" value=\"{{formName}}\" onChange=\"{{setName}}\" placeholder=\"{{namePlaceholder}}\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Fecha de entrega\n<input type=\"date\" value=\"{{formDue}}\" onChange=\"{{setDue}}\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px\"/>\n</label>\n<sc-if value=\"{{formAsksBrand}}\" hint-placeholder-val=\"{{ true }}\">\n<button onClick=\"{{toggleBrand}}\" role=\"switch\" aria-checked=\"{{formHasBrand}}\" style=\"display:flex;align-items:center;gap:12px;min-height:52px;text-align:left\">\n<span style=\"flex:1;min-width:0;display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:14px;font-weight:500\">Ya tengo la l\u00ednea gr\u00e1fica del cliente</span><span style=\"font-size:12px;color:var(--muted)\">Si no, la entrega queda marcada hasta que la env\u00ede.</span></span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{brandTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{brandKnob}}px;width:20px;height:20px;border-radius:999px;background:{{brandKnobBg}}\"></span></span>\n</button>\n</sc-if>\n<button onClick=\"{{save}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">Crear y abrir checklist</button>\n</div>\n</sc-if>\n\n</div>\n\n<sc-if value=\"{{confetti}}\" hint-placeholder-val=\"{{ false }}\">\n<div aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;width:390px;height:720px;overflow:hidden;pointer-events:none\">\n<sc-for list=\"{{confettiBits}}\" as=\"b\" hint-placeholder-count=\"0\">\n<span class=\"km-bit\" style=\"left:{{b.x}}%;width:{{b.w}}px;height:{{b.h}}px;background:{{b.c}};animation-delay:{{b.d}}s\"></span>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-if value=\"{{menuOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position:absolute;left:0;right:0;top:0;bottom:0;z-index:30;display:flex;flex-direction:column;justify-content:flex-end\">\n<button onClick=\"{{menuClose}}\" aria-label=\"Cerrar men\u00fa\" style=\"position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.55)\"></button>\n<div class=\"km-in\" style=\"position:relative;background:var(--card);border-radius:22px 22px 0 0;padding:18px 16px 30px;display:flex;flex-direction:column;gap:8px;max-height:82%;overflow-y:auto;box-shadow:0 -8px 30px rgba(0,0,0,0.35)\">\n<div style=\"width:40px;height:4px;border-radius:999px;background:var(--track);align-self:center;margin-bottom:4px\"></div>\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{menuTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{menuSub}}</span>\n<sc-if value=\"{{mMain}}\" hint-placeholder-val=\"{{ true }}\">\n<sc-for list=\"{{menuItems}}\" as=\"o\" hint-placeholder-count=\"5\">\n<button onClick=\"{{o.go}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%;color:{{o.color}}\">{{o.label}}</button>\n</sc-for>\n</sc-if>\n<sc-if value=\"{{mEdit}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Nombre del video<input type=\"text\" value=\"{{mfName}}\" onChange=\"{{setMName}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Cliente<input type=\"text\" value=\"{{mfClient}}\" onChange=\"{{setMClient}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Fecha de entrega<input type=\"date\" value=\"{{mfDue}}\" onChange=\"{{setMDue}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<span style=\"font-size:12px;color:var(--muted)\">Tipo de video</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{typeOpts}}\" as=\"t\" hint-placeholder-count=\"5\"><button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.label}}</button></sc-for></div>\n<sc-if value=\"{{hasTypeWarn}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"font-size:12px;color:var(--warn);line-height:1.4\">{{typeWarn}}</span></sc-if>\n<button onClick=\"{{editSave}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">Guardar cambios</button>\n<button onClick=\"{{menuBack}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%\">Cancelar</button>\n</sc-if>\n<sc-if value=\"{{mConfirm}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:14px;line-height:1.5\">{{confirmText}}</span>\n<button onClick=\"{{doDelete}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r1);background:var(--warn);color:var(--onAccent);font-size:15px;font-weight:600\">S\u00ed, eliminar</button>\n<button onClick=\"{{menuBack}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%\">Cancelar</button>\n</sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{toastOn}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position:absolute;left:16px;right:16px;bottom:96px;z-index:31;display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--text);color:var(--bg);border-radius:var(--r2);padding:10px 14px;font-size:14px;font-weight:600\"><span>{{toastText}}</span>\n<sc-if value=\"{{toastUndo}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{undo}}\" style=\"flex:none;min-height:40px;padding:0 10px;font-size:14px;font-weight:700;color:var(--bg);text-decoration:underline\">Deshacer</button></sc-if></div>\n</sc-if>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { let sg = ''; try { sg = (localStorage.getItem('kmAcc') || '') + '|' + (localStorage.getItem('kmPV') || ''); } catch (e) {} if (sg !== this.kmAccSeen) { this.kmAccSeen = sg; if (this.kmSync) this.kmSync(sg); } if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmSync(sg) {
let list = []; try { list = JSON.parse(localStorage.getItem('kmAcc') || '[]'); } catch (e) { list = []; }
let pv = []; try { pv = JSON.parse(localStorage.getItem('kmPV') || '[]'); } catch (e) { pv = []; }
let hid = []; try { hid = JSON.parse(localStorage.getItem('kmHid') || '[]'); } catch (e) { hid = []; }
pv = pv.filter((v) => hid.indexOf('i:' + v.id) < 0);
const taken = {}; pv.forEach((v) => { taken[v.client + '|' + v.name] = true; });
const keep = this.state.items.filter((x) => !String(x.id).startsWith('acc-') && !String(x.id).startsWith('pv-') && !String(x.id).startsWith('pe-') && !taken[x.client + '|' + x.name]);
const old = {}; this.state.items.forEach((x) => { old[x.id] = x; });
const add = [];
list.forEach((q) => { (q.items || []).forEach((it, i) => { const id = 'acc-' + q.id + '-' + i; if (hid.indexOf('i:' + id) >= 0) return; add.push(old[id] || { id, name: it.name, client: q.client, type: it.type, due: q.due, done: {}, times: {}, needsBrand: !!it.brand }); }); });
const all = {}; for (let i = 0; i < 11; i++) all[i] = true;
pv.forEach((v) => { const prev = old[v.id]; const base = prev || { id: v.id, name: v.name, client: v.client, type: 'reel', due: v.due || '2026-11-30', done: {}, times: {}, needsBrand: false }; add.push({ ...base, name: v.name, due: v.due || base.due, done: v.done ? all : (prev && prev.pvDone ? {} : base.done), pvDone: !!v.done }); });
this.setState({ items: keep.concat(add) });
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
kmTypes() {
return {
highlight: { label: 'Highlight de boda', short: 'Highlight', stages: ['Importar y organizar', 'Selección de material', 'Corte', 'B-roll', 'Gráfica y títulos', 'Color', 'Música', 'SFX', 'Mezcla de audio', 'Revisión propia', 'Exportado', 'Revisión del cliente', 'Entregado'] },
teaser: { label: 'Teaser', short: 'Teaser', stages: ['Importar', 'Selección de material', 'Corte', 'Música', 'Color', 'Mezcla de audio', 'Revisión propia', 'Exportado', 'Revisión del cliente', 'Entregado'] },
reel: { label: 'Reel', short: 'Reel', stages: ['Guion', 'Importar', 'Corte', 'B-roll', 'Subtítulos', 'Gráfica y títulos', 'Música y SFX', 'Color', 'Exportado', 'Revisión del cliente', 'Entregado'] },
ceremonia: { label: 'Video largo', short: 'Video largo', stages: ['Importar y sincronizar audio', 'Corte multicámara', 'Color', 'Mezcla de audio', 'Exportado', 'Entregado'] },
edicion: { label: 'Edición de material del cliente', short: 'Edición', stages: ['Recibir y revisar material', 'Corte', 'Subtítulos', 'Gráfica y títulos', 'Música y SFX', 'Color', 'Exportado', 'Revisión del cliente', 'Entregado'] }
};
}
constructor(props) {
super(props);
const mk = (n, mins) => { const done = {}; const times = {}; mins.forEach((m, i) => { times[i] = m * 60; }); for (let i = 0; i < n; i++) done[i] = true; return { done, times }; };
this.state = {
view: 'list', filter: 'pend', idleAsk: false, selId: 'v2', nextId: 20, running: null, runStart: 0, msg: '',
form: { client: 'Ana y Luis', type: 'reel', name: '', due: '2026-11-23', brand: true },
items: [
{ id: 'v1', name: 'Reel 3 de 8', client: 'Cafetería Aroma', type: 'reel', due: '2026-11-17', ...mk(5, [18, 9, 48, 22, 14, 12]) },
{ id: 'v2', name: 'Highlight', client: 'Ana y Luis', type: 'highlight', due: '2026-11-19', ...mk(1, [21, 35]) },
{ id: 'v3', name: 'Teaser', client: 'Ana y Luis', type: 'teaser', due: '2026-11-20', ...mk(2, [9, 28, 16]) },
{ id: 'v4', name: 'Reel 4 de 8', client: 'Cafetería Aroma', type: 'reel', due: '2026-11-21', needsBrand: true, ...mk(1, [15]) },
{ id: 'v5', name: 'Ceremonia completa', client: 'Ana y Luis', type: 'ceremonia', due: '2026-11-27', ...mk(1, [40]) },
{ id: 'v6', name: 'Highlight', client: 'Marcela y Diego', type: 'highlight', due: '2026-12-05', ...mk(0, []) },
{ id: 'v7', name: 'Reel 2 de 8', client: 'Cafetería Aroma', type: 'reel', due: '2026-11-13', ...mk(11, [20, 10, 44, 18, 15, 33, 22, 14, 5, 12, 0]) },
{ id: 'v8', name: 'Reel 4 de 4', client: 'Gimnasio Fuerza', type: 'reel', due: '2026-11-10', ...mk(11, [15, 8, 38, 16, 12, 25, 18, 10, 4, 10, 0]) },
{ id: 'b1', name: 'Promo hamburguesa', client: 'Bar Central', type: 'reel', due: '2026-11-12', ...mk(11, [15, 8, 38, 16, 12, 25, 18, 10, 4, 10, 0]) },
{ id: 'b2', name: 'Noche de trivia', client: 'Bar Central', type: 'reel', due: '2026-11-13', ...mk(11, [15, 8, 38, 16, 12, 25, 18, 10, 4, 10, 0]) },
{ id: 'b3', name: 'Cumpleaños de la casa', client: 'Bar Central', type: 'reel', due: '2026-11-16', ...mk(11, [15, 8, 38, 16, 12, 25, 18, 10, 4, 10, 0]) }
]
};
}
componentDidMount() {
this.kmStart();
this.tick = setInterval(() => { if (this.state.running) this.forceUpdate(); }, 1000);
}
componentWillUnmount() {
this.kmStop();
clearInterval(this.tick);
}
kmRender() {
const st = this.state;
const TYPES = this.kmTypes();
const TODAY = '2026-11-16';
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const DOWS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const toDate = (k) => { const p = k.split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])); };
const diffDays = (a, b) => Math.round((toDate(a) - toDate(b)) / 86400000);
const now = Date.now();
const run = st.running;
const elapsed = (it, i) => (it.times[i] || 0) + (run && run.id === it.id && run.idx === i ? (now - st.runStart) / 1000 : 0);
const pad = (n) => String(Math.floor(n)).padStart(2, '0');
const clock = (s) => s >= 3600 ? Math.floor(s / 3600) + ':' + pad((s % 3600) / 60) + ':' + pad(s % 60) : pad(s / 60) + ':' + pad(s % 60);
const dur = (s) => { const m = Math.round(s / 60); if (m < 1) return 'Sin tiempo'; const h = Math.floor(m / 60); const r = m % 60; return h ? h + ' h' + (r ? ' ' + r + ' min' : '') : r + ' min'; };
const dueLabel = (k) => { const d = diffDays(k, TODAY); if (d === 0) return 'hoy'; if (d === 1) return 'mañana'; if (d === -1) return 'ayer'; const dt = toDate(k); return DOWS[dt.getDay()] + ' ' + dt.getDate() + ' ' + MONTHS[dt.getMonth()]; };
const info = (it) => {
const stages = TYPES[it.type].stages;
const count = stages.filter((_, i) => it.done[i]).length;
const firstOpen = stages.findIndex((_, i) => !it.done[i]);
const secs = stages.reduce((a, _, i) => a + elapsed(it, i), 0);
return { stages, count, firstOpen, secs, allDone: count === stages.length };
};
const commit = () => run ? st.items.map((it) => it.id === run.id ? { ...it, times: { ...it.times, [run.idx]: elapsed(it, run.idx) } } : it) : st.items;

const isPend = st.filter === 'pend';
const card = (it) => {
const f = info(it);
const d = diffDays(it.due, TODAY);
const active = !!run && run.id === it.id;
return {
name: it.name, client: it.client, typeLabel: TYPES[it.type].short,
dueLabel: f.allDone ? 'Entregado' : dueLabel(it.due),
dueColor: !f.allDone && d <= 1 ? 'var(--warn)' : 'var(--text)',
pct: Math.round((f.count / f.stages.length) * 100),
needsBrand: !!it.needsBrand && !f.allDone,
stage: f.allDone ? 'Entregado el ' + dueLabel(it.due) : 'Etapa ' + (f.firstOpen + 1) + ' de ' + f.stages.length + ': ' + f.stages[f.firstOpen],
time: active ? 'En curso · ' + dur(f.secs) : dur(f.secs),
timeColor: active ? 'var(--accentText)' : 'var(--text)',
open: () => { if (this.kmCtx && Date.now() - this.kmCtx < 700) return; this.kmSfx('tap'); this.setState({ view: 'detail', selId: it.id, msg: '' }); },
menu: (e) => { if (e && e.preventDefault) e.preventDefault(); this.kmCtx = Date.now(); this.kmSfx('tap'); this.setState({ _menu: it.id, _mMode: 'main' }); }
};
};
const pending = st.items.filter((it) => !info(it).allDone).sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : 0));
const delivered = st.items.filter((it) => info(it).allDone).sort((a, b) => (a.due > b.due ? -1 : 1));

const hidGet = () => { try { return JSON.parse(localStorage.getItem('kmHid') || '[]'); } catch (e) { return []; } };
const hidSet = (a) => { try { localStorage.setItem('kmHid', JSON.stringify(a)); } catch (e) {} };
const toast = (text, undo) => { clearTimeout(this.kmToastT); this.setState({ _toast: text, _undo: !!undo }); this.kmToastT = setTimeout(() => { this._undoData = null; this.setState({ _toast: null, _undo: false }); }, 6000); };
const mi = st._menu ? st.items.find((x) => x.id === st._menu) : null;
const derived = !!mi && /^(pv|pe|acc)-/.test(String(mi.id));
const mMode = st._mMode || 'main';
const closeMenu = () => this.setState({ _menu: null, _mMode: 'main' });
const mf = st._mForm || {};
const setMF = (k) => (e) => this.setState({ _mForm: { ...(st._mForm || {}), [k]: e.target.value } });
const patchItem = (id, fn) => st.items.map((x) => x.id === id ? fn(x) : x);
const miInfo = mi ? info(mi) : null;
const menuItems = mi ? [
{ label: 'Abrir', color: 'var(--text)', go: () => this.setState({ view: 'detail', selId: mi.id, msg: '', _menu: null, _mMode: 'main' }) },
...(derived ? [] : [{ label: 'Editar nombre, fecha y tipo', color: 'var(--text)', go: () => this.setState({ _mMode: 'edit', _mForm: { name: mi.name, client: mi.client, due: mi.due, type: mi.type } }) }]),
{ label: miInfo.allDone ? 'Reabrir (quitar entregado)' : 'Marcar como entregado', color: 'var(--accentText)', go: () => { const all = {}; for (let i = 0; i < TYPES[mi.type].stages.length; i++) all[i] = true; const on = !miInfo.allDone; this.setState({ items: patchItem(mi.id, (x) => ({ ...x, done: on ? all : {} })), _menu: null, _mMode: 'main' }); this.kmSfx(on ? 'done' : 'tap'); toast(on ? 'Marcado como entregado' : 'Reabierto'); } },
{ label: 'Eliminar', color: 'var(--warn)', go: () => this.setState({ _mMode: 'confirm' }) }
] : [];
const curType = mf.type || (mi ? mi.type : 'reel');
const typeOpts = Object.keys(TYPES).map((k) => ({ label: TYPES[k].short, on: k === curType, bg: k === curType ? 'var(--accent)' : 'var(--card2)', fg: k === curType ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ _mForm: { ...(st._mForm || {}), type: k } }) }));
const typeWarn = mi && curType !== mi.type ? 'Cambia de ' + TYPES[mi.type].stages.length + ' a ' + TYPES[curType].stages.length + ' etapas. Se conservan las etapas marcadas que existan en el tipo nuevo.' : '';
const menuVals = {
menuOpen: !!mi, menuTitle: mi ? mi.name : '', menuSub: mi ? mi.client + (derived ? ' · viene de Clientes, se edita allí' : '') : '',
mMain: mMode === 'main', mEdit: mMode === 'edit', mConfirm: mMode === 'confirm',
menuItems, menuClose: closeMenu, menuBack: () => this.setState({ _mMode: 'main' }),
confirmText: mi ? '¿Eliminar "' + mi.name + '"? Se pierden sus etapas y tiempos. Podrás deshacerlo unos segundos.' : '',
mfName: mf.name || '', mfClient: mf.client || '', mfDue: mf.due || '',
setMName: setMF('name'), setMClient: setMF('client'), setMDue: setMF('due'), typeOpts, typeWarn, hasTypeWarn: !!typeWarn,
editSave: () => { if (!mi) return; this.kmSfx('done'); const n = TYPES[curType].stages.length; this.setState({ items: patchItem(mi.id, (x) => { const d = {}; Object.keys(x.done || {}).forEach((k) => { if (Number(k) < n && x.done[k]) d[k] = true; }); return { ...x, name: (mf.name || '').trim() || x.name, client: (mf.client || '').trim() || x.client, due: mf.due || x.due, type: curType, done: d }; }), _menu: null, _mMode: 'main' }); toast('Cambios guardados'); },
doDelete: () => { if (!mi) return; const idx = st.items.findIndex((x) => x.id === mi.id); this._undoData = { it: mi, idx }; if (derived) hidSet(hidGet().concat(['i:' + mi.id])); this.setState({ items: st.items.filter((x) => x.id !== mi.id), view: 'list', _menu: null, _mMode: 'main' }); this.kmSfx('tap'); toast('Eliminado: ' + mi.name, true); },
toastOn: !!st._toast, toastText: st._toast || '', toastUndo: !!st._undo,
undo: () => { const u = this._undoData; if (!u) return; const nx = st.items.slice(); nx.splice(Math.min(u.idx, nx.length), 0, u.it); hidSet(hidGet().filter((x) => x !== 'i:' + u.it.id)); this._undoData = null; clearTimeout(this.kmToastT); this.setState({ items: nx, _toast: null, _undo: false }); }
};
const toSunday = (7 - toDate(TODAY).getDay()) % 7;
const bucket = (it) => { const d = diffDays(it.due, TODAY); return d < 0 ? 'Atrasadas' : d === 0 ? 'Hoy' : d === 1 ? 'Mañana' : d <= toSunday ? 'Esta semana' : 'Después'; };
let groups = [];
if (isPend) {
['Atrasadas', 'Hoy', 'Mañana', 'Esta semana', 'Después'].forEach((t) => {
const items = pending.filter((it) => bucket(it) === t).map(card);
if (items.length) groups.push({ title: t, items });
});
} else if (delivered.length) {
groups = [{ title: 'Entregados', items: delivered.map(card) }];
}
const filters = [['pend', 'Pendientes (' + pending.length + ')'], ['done', 'Entregados (' + delivered.length + ')']].map(([id, name]) => ({
name, active: st.filter === id,
bg: st.filter === id ? 'var(--accent)' : 'transparent', fg: st.filter === id ? 'var(--onAccent)' : 'var(--text)',
pick: () => { this.kmSfx('tap'); this.setState({ filter: id }); }
}));

const sel = st.items.find((it) => it.id === st.selId) || st.items[0] || { id: '', name: '', client: '', type: 'reel', due: '', done: {}, times: {}, needsBrand: false };
const sf = info(sel);
let askCfg = { on: true, every: 45, wait: 5, discount: true };
try { const a = JSON.parse(localStorage.getItem('kmAsk') || 'null'); if (a) askCfg = { on: a.on !== false, every: a.every || 45, wait: a.wait || 5, discount: a.discount !== false }; } catch (e) {}
const stages = sf.stages.map((label, i) => {
const done = !!sel.done[i];
const running = !!run && run.id === sel.id && run.idx === i;
return {
label, done, todo: !done, running, paused: !running,
isCurrent: i === sf.firstOpen,
border: i === sf.firstOpen ? '1px solid var(--accent)' : '1px solid transparent',
labelColor: done ? 'var(--muted)' : 'var(--text)',
timeText: clock(elapsed(sel, i)),
timeColor: running ? 'var(--accentText)' : 'var(--muted)',
timerAria: (running ? 'Pausar cronómetro de ' : 'Iniciar cronómetro de ') + label,
timer: () => {
this.kmSfx(running ? 'pause' : 'start');
const items = commit();
if (running) this.setState({ items, running: null });
else this.setState({ items, running: { id: sel.id, idx: i }, runStart: Date.now() });
},
toggle: () => {
const nowDone = !sel.done[i];
this.kmSfx(nowDone ? (sf.count + 1 === sf.stages.length ? 'goal' : 'done') : 'tap');
try { if (nowDone && navigator.vibrate) navigator.vibrate(30); } catch (e) {}
if (nowDone && sf.count + 1 === sf.stages.length) this.kmParty();
const items = commit().map((x) => x.id === sel.id ? { ...x, done: { ...x.done, [i]: nowDone } } : x);
const t = (items.find((x) => x.id === sel.id).times[i] || 0);
this.setState({ items, running: running ? null : st.running, msg: nowDone ? label + ' lista en ' + Math.max(1, Math.round(t / 60)) + ' min.' : '' });
}
};
});
const left = sf.stages.length - sf.count;

const f = st.form;
const chip = (on) => ({ on, bg: on ? 'var(--accent)' : 'transparent', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'var(--line)' });
const clientNames = Array.from(new Set(st.items.map((it) => it.client)));
const tdef = TYPES[f.type];
return {
isList: st.view === 'list', isDetail: st.view === 'detail', isNew: st.view === 'new',
listSub: pending.length + ' pendientes' + (st.items.some((x) => /^v\d/.test(String(x.id)) || /^b\d/.test(String(x.id))) ? ' · datos de ejemplo' : ''),
filters, groups, ...menuVals,
isEmpty: groups.length === 0,
emptyText: isPend ? 'No hay entregas pendientes. Todo al día.' : 'Todavía no hay videos entregados.',
goList: () => { this.kmSfx('tap'); this.setState({ view: 'list' }); },
goNew: () => { this.kmSfx('tap'); this.setState({ view: 'new' }); },
selName: sel.name + ' · ' + sel.client,
selSub: TYPES[sel.type].label + ' · entrega ' + dueLabel(sel.due),
selTime: dur(sf.secs),
stages,
percent: Math.round((sf.count / sf.stages.length) * 100),
ringOffset: 213.6 * (1 - sf.count / sf.stages.length),
headline: left === 0 ? 'Entregado' : (left === 1 ? 'Una etapa para cerrar' : 'Faltan ' + left + ' etapas'),
subline: left === 0 ? 'Video cerrado. Pasa a Entregados.' : (st.msg || 'Toca una etapa para marcarla. El cronómetro cuenta el tiempo de cada una.'),
clientChips: clientNames.map((n) => ({ label: n, ...chip(f.client === n), pick: () => { this.kmSfx('tap'); this.setState({ form: { ...f, client: n } }); } })),
typeChips: Object.keys(TYPES).map((k) => ({ label: TYPES[k].short, ...chip(f.type === k), pick: () => { this.kmSfx('tap'); this.setState({ form: { ...f, type: k } }); } })),
typeCount: tdef.label + ': ' + tdef.stages.length + ' etapas',
typeStages: tdef.stages.join(' → '),
formClient: f.client, formName: f.name, formDue: f.due,
formAsksBrand: f.type === 'reel' || f.type === 'edicion', formHasBrand: !!f.brand,
brandTrack: f.brand ? 'var(--accent)' : 'var(--track)', brandKnob: f.brand ? 23 : 3, brandKnobBg: f.brand ? 'var(--onAccent)' : 'var(--muted)',
toggleBrand: () => { this.kmSfx('tap'); this.setState({ form: { ...f, brand: !f.brand } }); },
selNeedsBrand: !!sel.needsBrand && !sf.allDone, selClient: sel.client,
idleAsk: st.idleAsk && !!run, canSimIdle: !!run && !st.idleAsk && askCfg.on, askEvery: askCfg.every, askWait: askCfg.wait,
simIdle: () => { this.kmSfx('alert'); this.setState({ idleAsk: true }); },
idleYes: () => { this.kmSfx('done'); this.setState({ idleAsk: false, msg: 'Sigues en marcha. El cronómetro no se tocó.' }); },
idleNo: () => {
this.kmSfx('pause');
let items = commit();
const cut = askCfg.discount ? askCfg.wait * 60 : 0;
if (run && cut) items = items.map((x) => x.id === run.id ? { ...x, times: { ...x.times, [run.idx]: Math.max(0, (x.times[run.idx] || 0) - cut) } } : x);
this.setState({ items, running: null, idleAsk: false, msg: cut ? 'Pausado. Se descontaron ' + askCfg.wait + ' min sin respuesta.' : 'Pausado.' });
},
brandOk: () => { this.kmSfx('done'); this.setState({ items: st.items.map((x) => x.id === sel.id ? { ...x, needsBrand: false } : x) }); },
namePlaceholder: tdef.short,
setClient: (e) => this.setState({ form: { ...f, client: e.target.value } }),
setName: (e) => this.setState({ form: { ...f, name: e.target.value } }),
setDue: (e) => this.setState({ form: { ...f, due: e.target.value } }),
save: () => {
this.kmSfx('done');
const id = 'v' + st.nextId;
const it = { id, name: f.name.trim() || tdef.short, client: f.client.trim() || 'Cliente nuevo', type: f.type, due: /^\d{4}-\d{2}-\d{2}$/.test(f.due) ? f.due : TODAY, needsBrand: (f.type === 'reel' || f.type === 'edicion') && !f.brand, done: {}, times: {} };
this.setState({ items: [...st.items, it], nextId: st.nextId + 1, view: 'detail', selId: id, filter: 'pend', msg: '', form: { ...f, name: '' } });
}
};
}
}

return Component;})()};
window.KM_SCREENS["Cotizador"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1800px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"height:1716px;overflow-y:auto;padding:56px 20px 110px 20px;box-sizing:border-box;display:flex;flex-direction:column;gap:18px\">\n<sc-if value=\"{{isForm}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<sc-if value=\"{{hasDupMsg}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--accent);border-radius:var(--r2);padding:12px 14px\"><span style=\"flex:1;font-size:13px;line-height:1.4\">{{dupMsg}}</span><button onClick=\"{{closeDup}}\" aria-label=\"Cerrar aviso\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button></div>\n</sc-if>\n\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:12px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Cotizar</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{hint}}</span>\n</div>\n<div style=\"display:flex;gap:8px;flex:none\">\n<button onClick=\"{{goHist}}\" aria-label=\"Historial de cotizaciones\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r1);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 8v5l3 2\"/></svg></button>\n<button onClick=\"{{toggleEdit}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;min-width:84px;height:44px;padding:0 14px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{editBg}};color:{{editFg}}\">{{editLabel}}</button>\n</div>\n</div>\n\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px\">\n<div style=\"display:flex;gap:4px;background:var(--card);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{currencies}}\" as=\"c\" hint-placeholder-count=\"2\">\n<button onClick=\"{{c.pick}}\" aria-pressed=\"{{c.active}}\" style=\"display:flex;align-items:center;justify-content:center;min-width:64px;height:40px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{c.bg}};color:{{c.fg}}\">{{c.name}}</button>\n</sc-for>\n</div>\n<span style=\"font-size:13px;color:var(--muted)\">1 US$ = {{rate}} Bs</span>\n</div>\n\n<div role=\"tablist\" style=\"display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;background:var(--card);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"4\">\n<button role=\"tab\" onClick=\"{{t.pick}}\" aria-selected=\"{{t.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.name}}</button>\n</sc-for>\n</div>\n\n<sc-if value=\"{{tabCli}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<label style=\"display:flex;flex-direction:column;gap:8px;font-family:var(--display);font-weight:700;font-size:16px\">Cliente\n<input type=\"text\" value=\"{{clientName}}\" onChange=\"{{setClient}}\" placeholder=\"Nombre del cliente\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n\n<label style=\"display:flex;flex-direction:column;gap:8px;font-family:var(--display);font-weight:700;font-size:16px\">Tel\u00e9fono del cliente\n<input type=\"text\" value=\"{{clientPhone}}\" onChange=\"{{setPhone}}\" placeholder=\"Para el contrato y el aviso\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<label style=\"display:flex;flex-direction:column;gap:8px;font-family:var(--display);font-weight:700;font-size:16px\">{{dateLabel}}\n<input type=\"date\" value=\"{{eventDate}}\" onChange=\"{{setDate}}\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n<sc-if value=\"{{hasDateNote}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:13px;font-weight:600;line-height:1.4;color:{{dateNoteColor}}\">{{dateNote}}</span>\n</sc-if>\n</div>\n\n<sc-if value=\"{{isFijo}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Datos del evento</span>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--muted)\">Lugar\n<input type=\"text\" value=\"{{venue}}\" onChange=\"{{setVenue}}\" placeholder=\"Iglesia y sal\u00f3n de recepci\u00f3n\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--muted)\">Hora de inicio\n<input type=\"text\" value=\"{{startTime}}\" onChange=\"{{setStart}}\" placeholder=\"16:00\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--muted)\">Horas de cobertura\n<input type=\"text\" value=\"{{coverage}}\" onChange=\"{{setCoverage}}\" placeholder=\"8\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-weight:500;font-family:var(--body)\"/>\n</label>\n</div>\n</div>\n</sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{tabSvc}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div class=\"chips\" style=\"display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;margin:0 -20px;padding:0 20px\">\n<sc-for list=\"{{services}}\" as=\"s\" hint-placeholder-count=\"3\">\n<button onClick=\"{{s.pick}}\" aria-pressed=\"{{s.active}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;height:44px;padding:0 18px;border-radius:999px;font-size:14px;font-weight:600;background:{{s.bg}};color:{{s.fg}}\">{{s.name}}</button>\n</sc-for>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{addService}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;height:44px;padding:0 16px;border-radius:999px;border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">+ Servicio</button>\n</sc-if>\n</div>\n<sc-if value=\"{{hasSubs}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">{{subLabel}}</span>\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<sc-for list=\"{{subs}}\" as=\"u\" hint-placeholder-count=\"3\">\n<button role=\"radio\" onClick=\"{{u.pick}}\" aria-checked=\"{{u.active}}\" style=\"display:flex;align-items:center;gap:12px;width:100%;box-sizing:border-box;min-height:56px;padding:8px 14px;border-radius:var(--r2);text-align:left;background:{{u.bg}};border:2px solid {{u.bd}}\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:22px;height:22px;flex:none;border-radius:999px;border:2px solid {{u.ring}}\"><span style=\"width:10px;height:10px;border-radius:999px;background:{{u.dot}}\"></span></span>\n<span style=\"display:flex;flex-direction:column;gap:1px;min-width:0\"><span style=\"font-size:15px;font-weight:600\">{{u.name}}</span><span style=\"font-size:12px;color:var(--muted);line-height:1.35\">{{u.desc}}</span></span>\n</button>\n</sc-for>\n</div>\n</div>\n</sc-if>\n\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;align-items:center;gap:10px;background:var(--card);border-radius:var(--r2);padding:6px 12px 6px 18px\">\n<span style=\"flex:1;font-size:14px;font-weight:500\">Tipo de cambio: 1 US$ =</span>\n<input type=\"number\" inputmode=\"decimal\" value=\"{{rate}}\" onChange=\"{{setRate}}\" aria-label=\"Bolivianos por d\u00f3lar\" style=\"width:84px;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<span style=\"font-size:14px;color:var(--muted)\">Bs</span>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Editar este servicio</span>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Nombre\n<input type=\"text\" value=\"{{svcName}}\" onChange=\"{{setSvcName}}\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;background:var(--field);border-radius:var(--r1);padding:4px\">\n<button onClick=\"{{modeUnidad}}\" aria-pressed=\"{{isUnidad}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{unidadBg}};color:{{unidadFg}}\">Precio por unidad</button>\n<button onClick=\"{{modeFijo}}\" aria-pressed=\"{{isFijo}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{fijoBg}};color:{{fijoFg}}\">Paquete fijo</button>\n</div>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">C\u00f3mo se llama la cantidad\n<input type=\"text\" value=\"{{qtyLabel}}\" onChange=\"{{setQtyLabel}}\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Unidad (por video, por hora\u2026)\n<input type=\"text\" value=\"{{per}}\" onChange=\"{{setPer}}\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n<sc-if value=\"{{isFijo}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Precio de cada unidad extra ({{sym}})\n<input type=\"number\" inputmode=\"numeric\" value=\"{{unitInput}}\" onChange=\"{{setUnit}}\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n</sc-if>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Texto fijo en el mensaje (opcional)\n<input type=\"text\" value=\"{{note}}\" onChange=\"{{setNote}}\" placeholder=\"Ej: Incluye 2 rondas de correcci\u00f3n.\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n<button onClick=\"{{toggleCams}}\" role=\"switch\" aria-checked=\"{{showCams}}\" style=\"display:flex;align-items:center;gap:12px;min-height:48px\">\n<span style=\"flex:1;font-size:14px;font-weight:500\">Se elige c\u00e1mara de grabaci\u00f3n</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{camsTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{camsKnob}}px;width:20px;height:20px;border-radius:999px;background:{{camsKnobBg}}\"></span></span>\n</button>\n<sc-if value=\"{{isUnidad}}\" hint-placeholder-val=\"{{ true }}\">\n<button onClick=\"{{toggleDur}}\" role=\"switch\" aria-checked=\"{{showDur}}\" style=\"display:flex;align-items:center;gap:12px;min-height:48px\">\n<span style=\"flex:1;font-size:14px;font-weight:500\">Se elige duraci\u00f3n final del video</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{durTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{durKnob}}px;width:20px;height:20px;border-radius:999px;background:{{durKnobBg}}\"></span></span>\n</button>\n</sc-if>\n<button onClick=\"{{removeService}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);border:1px solid var(--warn);font-size:14px;font-weight:600;color:var(--warn)\">Quitar este servicio</button>\n</div>\n</sc-if>\n<sc-if value=\"{{showCams}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">C\u00e1mara de grabaci\u00f3n</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{cams}}\" as=\"m\" hint-placeholder-count=\"2\">\n<div style=\"display:flex;flex-direction:column;gap:4px;border-radius:var(--r2);padding:10px 12px;background:{{m.bg}};color:{{m.fg}};border:2px solid {{m.border}};box-sizing:border-box\">\n<button onClick=\"{{m.pick}}\" aria-pressed=\"{{m.active}}\" style=\"display:flex;flex-direction:column;gap:2px;min-height:44px;justify-content:center;width:100%;color:inherit\">\n<sc-if value=\"{{m.hasImg}}\" hint-placeholder-val=\"{{ true }}\"><img src=\"{{m.img}}\" alt=\"{{m.name}}\" style=\"width:100%;height:128px;object-fit:contain;box-sizing:border-box;padding:10px 8px 8px 8px;background:radial-gradient(ellipse 62% 58% at 50% 56%,color-mix(in srgb,var(--accent) 62%,var(--bg)) 0%,color-mix(in srgb,var(--accent) 14%,var(--bg)) 62%,var(--bg) 100%);border-radius:var(--r1);margin-bottom:6px\"/></sc-if>\n<sc-if value=\"{{m.noImg}}\" hint-placeholder-val=\"{{ false }}\"><div style=\"width:100%;height:128px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background:radial-gradient(ellipse 62% 58% at 50% 56%,color-mix(in srgb,var(--accent) 62%,var(--bg)) 0%,color-mix(in srgb,var(--accent) 14%,var(--bg)) 62%,var(--bg) 100%);border-radius:var(--r1);margin-bottom:6px\"><svg width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 8h3l2-3h6l2 3h3v11H4z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/></svg></div></sc-if>\n<span style=\"font-size:14px;font-weight:600\">{{m.name}}</span>\n<span style=\"font-size:12px\">{{m.sub}}</span>\n<sc-if value=\"{{m.showText}}\" hint-placeholder-val=\"{{ true }}\"><span style=\"font-size:12px;font-weight:600\">{{m.priceText}}</span></sc-if>\n</button>\n<sc-if value=\"{{m.editing}}\" hint-placeholder-val=\"{{ false }}\">\n<input type=\"text\" value=\"{{m.name}}\" onChange=\"{{m.setName}}\" placeholder=\"Nombre del equipo\" aria-label=\"Nombre del equipo\" style=\"width:100%;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px;font-weight:600\"/>\n<input type=\"text\" value=\"{{m.sub}}\" onChange=\"{{m.setSub}}\" placeholder=\"Nota corta (ej. M\u00e1s econ\u00f3mica)\" aria-label=\"Nota del equipo\" style=\"width:100%;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:13px\"/>\n<div style=\"display:flex;gap:6px\">\n<label style=\"flex:1;display:flex;align-items:center;justify-content:center;height:40px;border-radius:var(--r1);background:var(--track);color:var(--text);font-size:13px;font-weight:600;cursor:pointer\">{{m.imgLabel}}<input type=\"file\" accept=\"image/*\" onChange=\"{{m.setImg}}\" aria-label=\"Imagen del equipo\" style=\"display:none\"/></label>\n<sc-if value=\"{{m.canRemove}}\" hint-placeholder-val=\"{{ true }}\"><button onClick=\"{{m.remove}}\" aria-label=\"Quitar equipo\" style=\"flex:none;width:40px;height:40px;border-radius:var(--r1);background:var(--track);color:var(--warn);font-size:18px;display:flex;align-items:center;justify-content:center\">\u00d7</button></sc-if>\n</div>\n<span style=\"font-size:12px\">Precio en este servicio</span>\n<input type=\"number\" inputmode=\"numeric\" value=\"{{m.price}}\" onChange=\"{{m.setPrice}}\" aria-label=\"Precio, {{m.name}}\" style=\"width:100%;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px\"/>\n</sc-if>\n</div>\n</sc-for>\n</div>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{addGear}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r2);border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">+ A\u00f1adir equipo</button></sc-if>\n</div>\n</sc-if>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">{{optionTitle}}</span>\n<sc-if value=\"{{notEditing}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:8px\">\n<sc-for list=\"{{optionCards}}\" as=\"o\" hint-placeholder-count=\"3\">\n<button onClick=\"{{o.pick}}\" aria-pressed=\"{{o.active}}\" style=\"display:flex;flex-direction:column;gap:2px;justify-content:center;min-height:64px;border-radius:var(--r2);padding:10px 12px;background:{{o.bg}};color:{{o.fg}};border:2px solid {{o.border}};box-sizing:border-box\">\n<span style=\"font-size:14px;font-weight:600\">{{o.name}}</span>\n<span style=\"font-size:12px\">{{o.sym}} {{o.priceText}}</span>\n</button>\n</sc-for>\n</div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{optionDesc}}</span>\n</sc-if>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\">\n<sc-for list=\"{{optionRows}}\" as=\"r\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--card);border-radius:var(--r2);padding:10px 10px 10px 12px\">\n<div style=\"display:flex;align-items:center;gap:8px\">\n<input type=\"text\" value=\"{{r.name}}\" onChange=\"{{r.setName}}\" aria-label=\"Nombre\" style=\"flex:1;min-width:0;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<input type=\"number\" inputmode=\"numeric\" value=\"{{r.price}}\" onChange=\"{{r.setPrice}}\" aria-label=\"Precio\" style=\"width:88px;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:15px;flex:none\"/>\n<button onClick=\"{{r.remove}}\" aria-label=\"Quitar\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button>\n</div>\n<input type=\"text\" value=\"{{r.desc}}\" onChange=\"{{r.setDesc}}\" placeholder=\"Qu\u00e9 incluye (opcional)\" aria-label=\"Qu\u00e9 incluye\" style=\"box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--track);background:var(--field);color:var(--muted);padding:0 12px;font-size:13px\"/>\n</div>\n</sc-for>\n<button onClick=\"{{addOption}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">+ Agregar</button>\n</sc-if>\n</div>\n\n<sc-if value=\"{{showDur}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Duraci\u00f3n final de cada video</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{durs}}\" as=\"d\" hint-placeholder-count=\"5\">\n<div style=\"display:flex;flex-direction:column;gap:4px;border-radius:var(--r2);padding:10px 12px;background:{{d.bg}};color:{{d.fg}};border:2px solid {{d.border}};box-sizing:border-box\">\n<button onClick=\"{{d.pick}}\" aria-pressed=\"{{d.active}}\" style=\"display:flex;flex-direction:column;gap:2px;min-height:44px;justify-content:center;color:inherit\">\n<span style=\"font-size:14px;font-weight:600\">{{d.name}}</span>\n<sc-if value=\"{{d.showText}}\" hint-placeholder-val=\"{{ true }}\"><span style=\"font-size:12px\">{{d.addText}}</span></sc-if>\n</button>\n<sc-if value=\"{{d.editing}}\" hint-placeholder-val=\"{{ false }}\">\n<input type=\"number\" inputmode=\"numeric\" value=\"{{d.price}}\" onChange=\"{{d.setPrice}}\" aria-label=\"Recargo por video, {{d.name}}\" style=\"width:100%;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px\"/>\n</sc-if>\n</div>\n</sc-for>\n</div>\n</div>\n</sc-if>\n\n<div style=\"display:flex;align-items:center;justify-content:space-between;background:var(--card);border-radius:var(--r2);padding:10px 12px 10px 18px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:13px;color:var(--muted)\">{{qtyLabel}}</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:26px\">{{qty}}</span>\n<span style=\"font-size:12px;color:var(--muted)\">{{sym}} {{unitText}} por {{per}} \u00b7 \u2248 {{otherSym}} {{unitOther}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{minus}}\" aria-label=\"Menos\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{plus}}\" aria-label=\"M\u00e1s\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Extras</span>\n<sc-if value=\"{{notEditing}}\" hint-placeholder-val=\"{{ true }}\">\n<sc-for list=\"{{extras}}\" as=\"x\" hint-placeholder-count=\"5\">\n<button onClick=\"{{x.toggle}}\" role=\"switch\" aria-checked=\"{{x.on}}\" style=\"display:flex;align-items:center;gap:12px;min-height:52px;padding:0 16px;border-radius:var(--r2);background:var(--card)\">\n<span style=\"flex:1;min-width:0;font-size:15px;font-weight:500\">{{x.name}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{x.sym}} {{x.priceText}}</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{x.trackBg}};flex:none\"><span style=\"position:absolute;top:3px;left:{{x.knobLeft}}px;width:20px;height:20px;border-radius:999px;background:{{x.knobBg}};transition:left 0.15s ease\"></span></span>\n</button>\n</sc-for>\n</sc-if>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\">\n<sc-for list=\"{{extraRows}}\" as=\"e\" hint-placeholder-count=\"5\">\n<div style=\"display:flex;align-items:center;gap:8px;background:var(--card);border-radius:var(--r2);padding:8px 6px 8px 12px\">\n<input type=\"text\" value=\"{{e.name}}\" onChange=\"{{e.setName}}\" aria-label=\"Nombre del extra\" style=\"flex:1;min-width:0;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<input type=\"number\" inputmode=\"numeric\" value=\"{{e.price}}\" onChange=\"{{e.setPrice}}\" aria-label=\"Precio del extra\" style=\"width:88px;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:15px;flex:none\"/>\n<button onClick=\"{{e.remove}}\" aria-label=\"Quitar extra\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button>\n</div>\n</sc-for>\n<button onClick=\"{{addExtra}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">+ Agregar extra</button>\n</sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{tabPre}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;align-items:baseline;justify-content:space-between;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Descuento</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{discPct}}%</span>\n</div>\n<input type=\"range\" min=\"0\" max=\"50\" step=\"1\" value=\"{{discPct}}\" onInput=\"{{setDisc}}\" onChange=\"{{setDisc}}\" aria-label=\"Porcentaje de descuento\" style=\"width:100%;height:44px;margin:0;accent-color:var(--accent)\"/>\n<div style=\"display:flex;justify-content:space-between;font-size:11px;color:var(--muted)\"><span>Sin descuento</span><span>50%</span></div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{discNote}}</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Precio especial</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">\u00dasalo cuando acuerdes un precio distinto al calculado. Reemplaza el subtotal. D\u00e9jalo vac\u00edo para no usarlo.</span>\n<div style=\"display:flex;align-items:center;gap:10px\">\n<input type=\"number\" inputmode=\"decimal\" value=\"{{specialInput}}\" onChange=\"{{setSpecial}}\" placeholder=\"Sin precio especial\" aria-label=\"Precio especial\" style=\"flex:1;min-width:0;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<span style=\"font-size:14px;color:var(--muted)\">{{sym}}</span>\n</div>\n<span style=\"font-size:12px;color:var(--muted)\">Calculado: {{calcText}}</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<button onClick=\"{{toggleFactura}}\" role=\"switch\" aria-checked=\"{{factura}}\" style=\"display:flex;align-items:center;gap:12px;min-height:52px;padding:0 16px;border-radius:var(--r2);background:var(--card)\">\n<span style=\"flex:1;min-width:0;font-size:15px;font-weight:500\">Con factura</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{facturaText}}</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{facturaTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{facturaKnob}}px;width:20px;height:20px;border-radius:999px;background:{{facturaKnobBg}};transition:left 0.15s ease\"></span></span>\n</button>\n<sc-if value=\"{{editing}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;align-items:center;gap:10px;background:var(--card);border-radius:var(--r2);padding:6px 12px 6px 18px\">\n<span style=\"flex:1;font-size:14px;font-weight:500\">Porcentaje de impuesto</span>\n<input type=\"number\" inputmode=\"decimal\" value=\"{{taxPct}}\" onChange=\"{{setTax}}\" aria-label=\"Porcentaje de impuesto\" style=\"width:84px;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<span style=\"font-size:14px;color:var(--muted)\">%</span>\n</div>\n</sc-if>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Pago y reserva</span>\n<div style=\"display:flex;flex-direction:column;gap:6px\">\n<span style=\"font-size:12px;color:var(--muted)\">Anticipo para reservar</span>\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{depChips}}\" as=\"d\" hint-placeholder-count=\"3\">\n<button onClick=\"{{d.pick}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:999px;font-size:14px;font-weight:600;background:{{d.bg}};color:{{d.fg}}\">{{d.label}}</button>\n</sc-for>\n</div>\n</div>\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:12px;color:var(--muted)\">Plazo para pagar el anticipo</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{valid}} d\u00edas</span>\n<span style=\"font-size:12px;color:var(--muted)\">Hasta el {{pdfUntil}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{validMinus}}\" aria-label=\"Un d\u00eda menos\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{validPlus}}\" aria-label=\"Un d\u00eda m\u00e1s\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n<button onClick=\"{{toggleQr}}\" role=\"switch\" aria-checked=\"{{qrOn}}\" style=\"display:flex;align-items:center;gap:12px;min-height:44px\">\n<span style=\"flex:1;min-width:0;font-size:14px;font-weight:500\">Poner mi QR de cobro en el PDF</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{qrTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{qrKnob}}px;width:20px;height:20px;border-radius:999px;background:{{qrKnobBg}};transition:left 0.15s ease\"></span></span>\n</button>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Datos de pago (van al final del mensaje)\n<input type=\"text\" value=\"{{pay}}\" onChange=\"{{setPay}}\" placeholder=\"Ej: Banco Uni\u00f3n, cuenta 000-000, o QR\" style=\"box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</label>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Entrega y revisiones</span>\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:12px;color:var(--muted)\">{{delivLabel}}</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{delivText}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{delivMinus}}\" aria-label=\"Menos d\u00edas de entrega\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{delivPlus}}\" aria-label=\"M\u00e1s d\u00edas de entrega\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:12px;color:var(--muted)\">Rondas de cambios incluidas</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{revText}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{revMinus}}\" aria-label=\"Menos rondas\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{revPlus}}\" aria-label=\"M\u00e1s rondas\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:12px;color:var(--muted)\">Plazo para pedir cambios, desde la entrega</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{revDaysText}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{rdMinus}}\" aria-label=\"Menos d\u00edas para cambios\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{rdPlus}}\" aria-label=\"M\u00e1s d\u00edas para cambios\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{tabDoc}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<button onClick=\"{{goTerms}}\" style=\"display:flex;align-items:center;gap:12px;width:100%;box-sizing:border-box;min-height:64px;padding:10px 16px;border-radius:var(--r2);background:var(--card)\">\n<span style=\"flex:1;min-width:0;display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Condiciones del servicio</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.35\">{{termsSummary}}</span>\n</span>\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n</button>\n\n<sc-if value=\"{{hasEst}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--card);border-radius:var(--r2);padding:14px 16px;border:1px solid var(--line)\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Tiempo estimado</span>\n<a href=\"Tiempos.dc.html\" style=\"font-size:13px;font-weight:600;color:var(--accentText);min-height:24px\">Ver tiempos</a>\n</div>\n<span style=\"font-size:14px;line-height:1.45\">{{estLine1}}</span>\n<span style=\"font-size:14px;line-height:1.45;font-weight:600\">{{estLine2}}</span>\n<span style=\"font-size:12px;color:var(--muted)\">Solo lo ves t\u00fa. Sale del promedio de tus entregas (datos de ejemplo).</span>\n</div>\n</sc-if>\n\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--accent);color:var(--onAccent);border-radius:var(--r3);padding:18px\">\n<span style=\"font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase\">Total</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:40px;line-height:1\">{{sym}} {{totalText}}</span>\n<sc-if value=\"{{hasBefore}}\" hint-placeholder-val=\"{{ true }}\"><span style=\"font-size:13px;font-weight:600\">Antes del descuento: <s>{{sym}} {{beforeText}}</s> \u00b7 solo lo ves t\u00fa</span></sc-if>\n<span style=\"font-size:15px;font-weight:600\">\u2248 {{otherSym}} {{otherTotal}}</span>\n<sc-if value=\"{{hasBreakdown}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:2px;margin-top:6px;font-size:13px\">\n<sc-for list=\"{{lines}}\" as=\"l\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;justify-content:space-between;gap:8px\"><span>{{l.label}}</span><span>{{l.value}}</span></div>\n</sc-for>\n</div>\n</sc-if>\n<div style=\"display:flex;justify-content:space-between;font-size:14px;margin-top:6px\">\n<span>Anticipo {{depPct}}%: <b>{{sym}} {{depositText}}</b></span>\n<span>Saldo: <b>{{sym}} {{balanceText}}</b></span>\n</div>\n</div>\n\n<button onClick=\"{{goPdf}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">Ver el PDF de la cotizaci\u00f3n</button>\n\n<button onClick=\"{{copy}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r2);background:var(--card2);font-size:15px;font-weight:600;color:{{copyColor}}\">{{copyLabel}}</button>\n\n<div style=\"background:var(--card);border-radius:var(--r2);padding:14px 16px;font-size:13px;line-height:1.5;color:var(--muted);white-space:pre-line\">{{message}}</div>\n\n</div>\n</sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{isTerms}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:12px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goForm}}\" aria-label=\"Volver al cotizador\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<div style=\"display:flex;flex-direction:column;gap:2px;flex:1;min-width:0\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:24px;line-height:1.1\">Condiciones</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{termsSvc}}</span>\n</div>\n<button onClick=\"{{toggleTermsEdit}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;min-width:84px;height:44px;padding:0 14px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{termsBtnBg}};color:{{termsBtnFg}}\">{{termsBtn}}</button>\n</div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{termsHint}}</span>\n<sc-if value=\"{{termsReading}}\" hint-placeholder-val=\"{{ true }}\">\n<sc-for list=\"{{terms}}\" as=\"t\" hint-placeholder-count=\"8\">\n<button onClick=\"{{t.flip}}\" role=\"switch\" aria-checked=\"{{t.on}}\" style=\"display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-radius:var(--r2);background:var(--card)\">\n<span style=\"flex:1;min-width:0;display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-size:15px;font-weight:600\">{{t.title}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{t.text}}</span>\n</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{t.track}};flex:none;margin-top:2px\"><span style=\"position:absolute;top:3px;left:{{t.knob}}px;width:20px;height:20px;border-radius:999px;background:{{t.knobBg}};transition:left 0.15s ease\"></span></span>\n</button>\n</sc-for>\n</sc-if>\n<sc-if value=\"{{termsEditing}}\" hint-placeholder-val=\"{{ false }}\">\n<sc-for list=\"{{termRows}}\" as=\"r\" hint-placeholder-count=\"8\">\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--card);border-radius:var(--r2);padding:10px 10px 10px 12px\">\n<div style=\"display:flex;align-items:center;gap:8px\">\n<input type=\"text\" value=\"{{r.title}}\" onChange=\"{{r.setTitle}}\" aria-label=\"T\u00edtulo de la condici\u00f3n\" style=\"flex:1;min-width:0;box-sizing:border-box;height:44px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<button onClick=\"{{r.remove}}\" aria-label=\"Quitar condici\u00f3n\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button>\n</div>\n<textarea value=\"{{r.text}}\" onChange=\"{{r.setText}}\" aria-label=\"Texto de la condici\u00f3n\" style=\"width:100%;box-sizing:border-box;height:96px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:10px 12px;font-size:13px;line-height:1.4;resize:none\"></textarea>\n</div>\n</sc-for>\n<button onClick=\"{{addTerm}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">+ Agregar condici\u00f3n</button>\n</sc-if>\n</div>\n</sc-if>\n<sc-if value=\"{{isPdf}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:14px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goForm}}\" aria-label=\"Volver al cotizador\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:24px;line-height:1.1\">Vista del PDF</span>\n<span style=\"font-size:13px;color:var(--muted)\">As\u00ed lo recibe tu cliente</span>\n</div>\n</div>\n<button onClick=\"{{downloadPdf}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">{{pdfBtn}}</button>\n<sc-if value=\"{{pdfDone}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">En la app final aqu\u00ed se descarga el archivo y se comparte por WhatsApp. Este demo solo muestra el dise\u00f1o.</span>\n</sc-if>\n\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\"><span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Estado de la cotizaci\u00f3n</span><span style=\"font-size:13px;font-weight:600;color:var(--accentText)\">{{qStatusLabel}}</span></div>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{statusChips}}\" as=\"c\" hint-placeholder-count=\"4\">\n<button onClick=\"{{c.pick}}\" aria-pressed=\"{{c.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:999px;font-size:14px;font-weight:600;background:{{c.bg}};color:{{c.fg}};border:2px solid {{c.border}};box-sizing:border-box\">{{c.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{hasAccept}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:6px;border-top:1px solid var(--line);padding-top:10px\">\n<span style=\"font-size:14px;font-weight:600\">Listo, se arm\u00f3 el trabajo</span>\n<span style=\"font-size:13px;line-height:1.5;color:var(--muted)\">{{acceptMsg}}</span>\n<span style=\"font-size:12px;line-height:1.4;color:var(--muted)\">Demo: en la app final esto se crea de verdad en Agenda y Entregas.</span>\n</div>\n</sc-if>\n<button onClick=\"{{newQuote}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--card2);font-size:14px;font-weight:600\">Guardar y hacer otra cotizaci\u00f3n</button>\n</div>\n\n<div style=\"background:#FFFFFF;color:#16181D;border-radius:6px;overflow:hidden;font-family:'Manrope',sans-serif\">\n<div style=\"background:#16181D;color:#FFFFFF;padding:22px 20px;display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:12px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:'Sora',sans-serif;font-weight:700;font-size:20px;letter-spacing:-0.3px\">Kev Mancilla</span>\n<span style=\"font-size:12px;color:#C9CDD6\">Producci\u00f3n audiovisual</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:2px;align-items:flex-end\">\n<span style=\"font-size:10px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;color:#C9CDD6\">{{pdfDocName}}</span>\n<span style=\"font-family:'Sora',sans-serif;font-weight:700;font-size:14px\">N.\u00ba {{qNoTxt}}</span>\n</div>\n</div>\n<div style=\"width:48px;height:3px;background:var(--accent)\"></div>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px\">\n<sc-for list=\"{{pdfInfo}}\" as=\"i\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\"><span style=\"font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#C9CDD6\">{{i.k}}</span><span style=\"font-size:13px;font-weight:600;line-height:1.35\">{{i.v}}</span></div>\n</sc-for>\n</div>\n</div>\n\n<div style=\"padding:20px;display:flex;flex-direction:column;gap:20px\">\n<div style=\"display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#5A6070\">Servicio</span>\n<span style=\"font-family:'Sora',sans-serif;font-weight:700;font-size:19px;line-height:1.2\">{{pdfTitle}}</span>\n<span style=\"font-size:12px;color:#5A6070\">{{pdfDeliv}}</span>\n</div>\n\n<div style=\"display:flex;flex-direction:column\">\n<sc-for list=\"{{pdfRows}}\" as=\"r\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #E4E7EC\">\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\">\n<span style=\"font-size:13px;font-weight:600\">{{r.label}}</span>\n<span style=\"font-size:11px;color:#5A6070;line-height:1.4\">{{r.sub}}</span>\n</div>\n<span style=\"font-size:13px;font-weight:600;flex:none;font-variant-numeric:tabular-nums\">{{r.value}}</span>\n</div>\n</sc-for>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:10px;background:#F1F3F6;border-radius:6px;padding:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\">\n<span style=\"font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase\">Total</span>\n<span style=\"font-family:'Sora',sans-serif;font-weight:700;font-size:26px;line-height:1\">{{sym}} {{totalText}}</span>\n</div>\n<span style=\"font-size:12px;color:#5A6070;text-align:right\">\u2248 {{otherSym}} {{otherTotal}}</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;border-top:1px solid #D5D9E0;padding-top:10px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:11px;color:#5A6070\">Anticipo {{depPct}}% para reservar</span><span style=\"font-size:15px;font-weight:700\">{{sym}} {{depositText}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:11px;color:#5A6070\">Saldo</span><span style=\"font-size:15px;font-weight:700\">{{sym}} {{balanceText}}</span></div>\n</div>\n</div>\n\n<span style=\"font-size:12px;line-height:1.5;color:#16181D;border-left:3px solid var(--accent);padding-left:10px\">{{pdfReserve}}</span>\n\n<div style=\"display:flex;flex-direction:column;gap:6px\">\n<span style=\"font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#5A6070\">Qu\u00e9 se entrega</span>\n<sc-for list=\"{{delivItems}}\" as=\"d\" hint-placeholder-count=\"6\">\n<div style=\"display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #E4E7EC\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:4px;background:var(--accent);color:var(--onAccent);font-size:11px;font-weight:700;flex:none;margin-top:1px\">\u2713</span>\n<div style=\"display:flex;flex-direction:column;gap:1px;min-width:0\"><span style=\"font-size:13px;font-weight:600\">{{d.title}}</span><span style=\"font-size:12px;line-height:1.45;color:#3A3F4A\">{{d.text}}</span></div>\n</div>\n</sc-for>\n<div style=\"background:#F1F3F6;border-radius:6px;padding:10px 12px;font-size:12px;line-height:1.5;color:#3A3F4A;margin-top:4px\"><b style=\"color:#16181D\">No incluye:</b> {{noInclText}}</div>\n</div>\n\n<sc-if value=\"{{hasIncl}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#5A6070\">Nota</span>\n<span style=\"font-size:12px;line-height:1.5\">{{pdfIncl}}</span>\n</div>\n</sc-if>\n\n<div style=\"display:flex;flex-direction:column;gap:12px\">\n<span style=\"font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#5A6070\">Condiciones del servicio</span>\n<sc-for list=\"{{pdfTerms}}\" as=\"t\" hint-placeholder-count=\"8\">\n<div style=\"display:flex;gap:10px;align-items:flex-start\">\n<span style=\"font-family:'Sora',sans-serif;font-weight:700;font-size:12px;color:#5A6070;width:22px;flex:none;padding-top:1px\">{{t.n}}</span>\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\">\n<span style=\"font-size:13px;font-weight:700\">{{t.title}}</span>\n<span style=\"font-size:12px;line-height:1.5;color:#3A3F4A\">{{t.text}}</span>\n</div>\n</div>\n</sc-for>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:6px;border:1px solid #16181D;border-radius:6px;padding:14px\">\n<span style=\"font-size:13px;font-weight:700\">Aceptaci\u00f3n</span>\n<span style=\"font-size:12px;line-height:1.5\">{{pdfAccept}}</span>\n<sc-if value=\"{{isFijo}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;border-top:1px solid #D5D9E0;padding-top:12px;margin-top:4px\">\n<div style=\"display:flex;flex-direction:column;gap:3px\"><div style=\"height:44px;border-bottom:1px solid #16181D\"></div><span style=\"font-size:12px;font-weight:600\">{{pdfSignName}}</span><span style=\"font-size:11px;color:#5A6070\">Cliente \u00b7 CI \u00b7 Fecha</span></div>\n<div style=\"display:flex;flex-direction:column;gap:3px\"><div style=\"height:44px;border-bottom:1px solid #16181D\"></div><span style=\"font-size:12px;font-weight:600\">Kev Mancilla</span><span style=\"font-size:11px;color:#5A6070\">Producci\u00f3n \u00b7 CI \u00b7 Fecha</span></div>\n</div>\n</sc-if>\n<sc-if value=\"{{hasPay}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:12px;line-height:1.5\"><b>Datos de pago:</b> {{pdfPay}}</span>\n</sc-if>\n<sc-if value=\"{{qrOn}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;align-items:center;gap:12px;border-top:1px solid #D5D9E0;padding-top:12px;margin-top:4px\">\n<div style=\"display:flex;align-items:center;justify-content:center;width:96px;height:96px;flex:none;border:2px dashed #5A6070;border-radius:4px;font-size:12px;font-weight:700;color:#5A6070;text-align:center\">[Tu QR]</div>\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:13px;font-weight:700\">Paga el anticipo con QR</span>\n<span style=\"font-size:12px;line-height:1.5;color:#3A3F4A\">{{sym}} {{depositText}} \u00b7 a nombre de [Titular de la cuenta]</span>\n<span style=\"font-size:11px;color:#5A6070\">Env\u00eda el comprobante por WhatsApp.</span>\n</div>\n</div>\n</sc-if>\n</div>\n\n<span style=\"font-size:11px;color:#5A6070;line-height:1.5\">Kev Mancilla \u00b7 [Tu WhatsApp] \u00b7 [Tu ciudad]</span>\n</div>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{isHist}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:14px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goForm}}\" aria-label=\"Volver al cotizador\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg></button>\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-family:var(--display);font-weight:700;font-size:24px;line-height:1.1\">Historial</span><span style=\"font-size:13px;color:var(--muted)\">{{histCount}} \u00b7 datos de ejemplo</span></div>\n</div>\n<div class=\"chips\" style=\"display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -20px;padding:0 20px\">\n<sc-for list=\"{{histFilters}}\" as=\"f\" hint-placeholder-count=\"5\">\n<button onClick=\"{{f.pick}}\" aria-pressed=\"{{f.on}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;background:{{f.bg}};color:{{f.fg}}\">{{f.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{hasHistMsg}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border:1px solid var(--accent);border-radius:var(--r2);padding:12px 14px\"><span style=\"font-size:13px;font-weight:600\">Mensaje listo para WhatsApp</span><span style=\"font-size:13px;line-height:1.5;color:var(--muted)\">{{histMsg}}</span></div>\n</sc-if>\n<sc-for list=\"{{histRows}}\" as=\"h\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px;min-width:0\"><span style=\"font-weight:600;font-size:16px\">N.\u00ba {{h.no}} \u00b7 {{h.client}}</span><span style=\"font-size:13px;color:var(--muted)\">{{h.svcName}} \u00b7 {{h.totalText}}</span></div>\n<span style=\"font-size:12px;font-weight:600;border-radius:999px;padding:4px 10px;flex:none;border:1px solid {{h.chipColor}};color:{{h.chipColor}}\">{{h.statusLabel}}</span>\n</div>\n<span style=\"font-size:13px;color:{{h.noteColor}}\">{{h.note}}</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<button onClick=\"{{h.dup}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);background:var(--card2);font-size:14px;font-weight:600\">Duplicar</button>\n<button onClick=\"{{h.resend}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);background:var(--card2);font-size:14px;font-weight:600\">Reenviar</button>\n</div>\n</div>\n</sc-for>\n<sc-if value=\"{{histEmpty}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"font-size:14px;color:var(--muted);padding:20px 0;text-align:center\">No hay cotizaciones con ese estado.</span></sc-if>\n</div>\n</sc-if>\n</div>\n\n<sc-if value=\"{{isForm}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"position:absolute;left:20px;right:20px;bottom:96px;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--card);border:1px solid var(--accent);border-radius:var(--r2);padding:10px 14px;box-shadow:0 -6px 20px rgba(0,0,0,0.35)\">\n<span style=\"display:flex;flex-direction:column;gap:0\"><span style=\"font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:var(--muted)\">Total ahora</span><span style=\"font-family:var(--display);font-weight:700;font-size:22px;line-height:1.15;font-variant-numeric:tabular-nums\">{{sym}} {{totalText}}</span><sc-if value=\"{{hasBefore}}\" hint-placeholder-val=\"{{ true }}\"><span style=\"font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums\">Antes: <s>{{sym}} {{beforeText}}</s> \u00b7 ahorra {{sym}} {{saveText}}</span></sc-if></span>\n<span style=\"display:flex;flex-direction:column;gap:0;align-items:flex-end\"><span style=\"font-size:11px;color:var(--muted)\">Anticipo {{depPct}}%</span><span style=\"font-size:15px;font-weight:600;font-variant-numeric:tabular-nums\">{{sym}} {{depositText}}</span></span>\n</div>\n</sc-if>\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = {
sel: 'boda', qty: 0, optBy: {}, camBy: {}, dur: 'd0', rate: 12, currency: 'Bs', extrasOn: {}, copied: false, editing: false, nextId: 100,
view: 'form', tab: 'cli', termsEdit: false, qr: true, clientName: '', clientPhone: '', venue: '', startTime: '', coverage: '', pdfDone: false, eventDate: '', specialBy: {}, discBy: {}, qNo: 43, qStatus: 'borrador', histFilter: 'todas', histMsg: '', dupMsg: '', hist: [{ no: '0041', client: 'Karen y Mauro', svc: 'boda', total: 3600, status: 'enviada', daysAgo: 5 }, { no: '0040', client: 'Cafetería Aroma', svc: 'reel', total: 3360, status: 'aceptada', daysAgo: 21 }, { no: '0039', client: 'Gimnasio Fuerza', svc: 'reel', total: 1680, status: 'aceptada', daysAgo: 36 }, { no: '0038', client: 'Panadería Luna', svc: 'edreel', total: 900, status: 'rechazada', daysAgo: 44 }, { no: '0037', client: 'Ana y Luis', svc: 'boda', total: 5400, status: 'aceptada', daysAgo: 120 }], factura: false, taxPct: 13, depPct: 50, valid: 7, pay: '',
durPrices: { d0: 0, d1: 60, d2: 180, d3: 360, d4: 720 },
services: [
{ id: 'boda', name: 'Boda', mode: 'fijo', qtyLabel: 'Horas extra de cobertura', per: 'hora extra', qtyStart: 0, qtyMin: 0, unit: 300, note: '', useCams: true, camOsmo: 0, camSony: 900, useDur: false, packs: [],
options: [
{ id: 'o1', name: 'Esencial', desc: 'Ceremonia y recepción. Highlight de 3 a 5 min.', price: 2400 },
{ id: 'o2', name: 'Completo', desc: 'Esencial más preparativos, ceremonia completa y teaser.', price: 3600 },
{ id: 'o3', name: 'Premium', desc: 'Completo más película de 30 a 45 min.', price: 5400 }
],
extras: [
{ id: 'e1', name: 'Dron', price: 360 }, { id: 'e2', name: 'Segundo camarógrafo', price: 600 },
{ id: 'e3', name: 'Highlight de 1 minuto', price: 480 }, { id: 'e4', name: 'Música con licencia', price: 120 },
{ id: 'e5', name: 'Entrega rápida', price: 240 }, { id: 'e6', name: 'Viáticos y traslado', price: 360 }
] },
{ id: 'grabacion', name: 'Grabación boda', mode: 'fijo', qtyLabel: 'Horas extra', per: 'hora extra', qtyStart: 0, qtyMin: 0, unit: 150, note: 'Solo grabación. Sin edición.', useCams: true, camOsmo: 0, camSony: 300, useDur: false, packs: [],
options: [
{ id: 'o10', name: 'Ceremonia', desc: 'Cobertura de 3 horas con una cámara: ceremonia y salida.', price: 700 },
{ id: 'o11', name: 'Medio día', desc: 'Cobertura de 5 horas con una cámara: ceremonia y recepción.', price: 1100 },
{ id: 'o12', name: 'Día completo', desc: 'Cobertura de 9 horas con una cámara, de la preparación al baile.', price: 1800 }
],
extras: [
{ id: 'e18', name: 'Dron', price: 360 }, { id: 'e19', name: 'Segundo camarógrafo', price: 600 }, { id: 'e20', name: 'Micrófono de solapa', price: 120 }, { id: 'e21', name: 'Viáticos y traslado', price: 360 }
] },
{ id: 'grabcont', name: 'Grabación contenido', mode: 'fijo', qtyLabel: 'Horas extra', per: 'hora extra', qtyStart: 0, qtyMin: 0, unit: 150, note: 'Rodaje para redes o negocio. Sin edición.', useCams: true, camOsmo: 0, camSony: 300, useDur: false, packs: [],
options: [
{ id: 'o26', name: 'Sesión corta', desc: 'Rodaje de 2 horas con una cámara en tu local.', price: 450 },
{ id: 'o27', name: 'Media jornada', desc: 'Rodaje de 4 horas con una cámara.', price: 800 },
{ id: 'o28', name: 'Jornada completa', desc: 'Rodaje de 8 horas con una cámara.', price: 1400 }
],
extras: [
{ id: 'e41', name: 'Guion para rodaje', price: 240 }, { id: 'e42', name: 'Micrófono de solapa', price: 120 }, { id: 'e43', name: 'Segundo camarógrafo', price: 600 }, { id: 'e44', name: 'Luces extra', price: 150 }, { id: 'e45', name: 'Viáticos y traslado', price: 360 }
] },
{ id: 'grabevento', name: 'Grabación evento', mode: 'fijo', qtyLabel: 'Horas extra', per: 'hora extra', qtyStart: 0, qtyMin: 0, unit: 150, note: 'Cumpleaños, charlas, eventos de empresa. Sin edición.', useCams: true, camOsmo: 0, camSony: 300, useDur: false, packs: [],
options: [
{ id: 'o29', name: '2 horas', desc: 'Cobertura de 2 horas con una cámara.', price: 500 },
{ id: 'o30', name: '4 horas', desc: 'Cobertura de 4 horas con una cámara.', price: 900 },
{ id: 'o31', name: '8 horas', desc: 'Cobertura de 8 horas con una cámara.', price: 1500 }
],
extras: [
{ id: 'e46', name: 'Dron', price: 360 }, { id: 'e47', name: 'Segundo camarógrafo', price: 600 }, { id: 'e48', name: 'Micrófono de solapa', price: 120 }, { id: 'e49', name: 'Viáticos y traslado', price: 360 }
] },
{ id: 'reel', name: 'Reels', mode: 'unidad', qtyLabel: 'Cantidad de videos', per: 'video', qtyStart: 4, qtyMin: 1, unit: 0, note: '', useCams: true, camOsmo: 240, camSony: 480, useDur: true, packs: [{ id: 'k1', min: 4, pct: 10 }, { id: 'k2', min: 8, pct: 20 }],
options: [
{ id: 'o4', name: 'Básico', desc: 'Cortes, ritmo, música y subtítulos.', price: 180 },
{ id: 'o5', name: 'Medio', desc: 'Básico más color y SFX.', price: 420 },
{ id: 'o6', name: 'Pro', desc: 'Medio más motion graphics e IA.', price: 720 }
],
extras: [
{ id: 'e7', name: 'Guion para rodaje', price: 240 }, { id: 'e8', name: 'Voz en off', price: 120 },
{ id: 'e9', name: 'Portada del reel', price: 60 }, { id: 'e10', name: 'Dron', price: 360 },
{ id: 'e11', name: 'Música con licencia', price: 120 }, { id: 'e12', name: 'Entrega rápida', price: 240 }
] },
{ id: 'plan', name: 'Paquete por ciclo', mode: 'unidad', qtyLabel: 'Videos por ciclo', per: 'video', qtyStart: 6, qtyMin: 1, unit: 0, note: 'Se cobra cada ciclo, el día de grabación.', useCams: false, camOsmo: 0, camSony: 0, useDur: false, packs: [],
options: [
{ id: 'o50', name: 'Básico', desc: 'Cortes, ritmo, música y subtítulos.', price: 150 },
{ id: 'o51', name: 'Medio', desc: 'Básico más color y SFX.', price: 250 },
{ id: 'o52', name: 'Pro', desc: 'Medio más motion graphics.', price: 400 }
],
extras: [
{ id: 'e50', name: 'Dron', price: 360 }, { id: 'e51', name: 'Segundo camarógrafo', price: 600 }, { id: 'e52', name: 'Locución', price: 120 }
] },
{ id: 'edboda', name: 'Edición boda', mode: 'unidad', qtyLabel: 'Videos a editar', per: 'video', qtyStart: 1, qtyMin: 1, unit: 0, note: '', useCams: false, camOsmo: 0, camSony: 0, useDur: false, packs: [],
options: [
{ id: 'o20', name: 'Highlight', desc: 'Resumen de 3 a 5 min con cortes, música y color básico.', price: 600 },
{ id: 'o21', name: 'Highlight + ceremonia', desc: 'Highlight más la ceremonia completa con audio limpio.', price: 1100 },
{ id: 'o22', name: 'Película completa', desc: 'Highlight, ceremonia y recepción de 20 a 40 min, con color por escena.', price: 1800 }
],
extras: [
{ id: 'e30', name: 'Teaser para redes', price: 150 }, { id: 'e31', name: 'Versión vertical', price: 120 },
{ id: 'e32', name: 'Música con licencia', price: 120 }, { id: 'e33', name: 'Corrección extra', price: 60 },
{ id: 'e34', name: 'Entrega rápida', price: 300 }
] },
{ id: 'edreel', name: 'Edición reels', mode: 'unidad', qtyLabel: 'Videos a editar', per: 'video', qtyStart: 3, qtyMin: 1, unit: 0, note: '', useCams: false, camOsmo: 0, camSony: 0, useDur: true, packs: [],
options: [
{ id: 'o7', name: 'Básico', desc: 'Cortes, ritmo, música y subtítulos.', price: 180 },
{ id: 'o8', name: 'Medio', desc: 'Básico más color y SFX.', price: 420 },
{ id: 'o9', name: 'Pro', desc: 'Medio más motion graphics e IA.', price: 720 }
],
extras: [
{ id: 'e13', name: 'Portada o miniatura', price: 60 }, { id: 'e14', name: 'Versión en otro formato', price: 120 },
{ id: 'e15', name: 'Música con licencia', price: 120 }, { id: 'e16', name: 'Corrección extra', price: 60 },
{ id: 'e17', name: 'Entrega rápida', price: 240 }
] },
{ id: 'crear', name: 'Video sin metraje', mode: 'unidad', qtyLabel: 'Videos a crear', per: 'video', qtyStart: 1, qtyMin: 1, unit: 0, note: '', useCams: false, camOsmo: 0, camSony: 0, useDur: true, packs: [],
options: [
{ id: 'o23', name: 'Básico', desc: 'Stock con licencia, textos animados y música.', price: 350 },
{ id: 'o24', name: 'Medio', desc: 'Básico más grabación de pantalla y motion graphics.', price: 700 },
{ id: 'o25', name: 'Completo', desc: 'Medio más guion y locución.', price: 1100 }
],
extras: [
{ id: 'e35', name: 'Locución', price: 150 }, { id: 'e36', name: 'Subtítulos en otro idioma', price: 90 },
{ id: 'e37', name: 'Versión vertical', price: 120 }, { id: 'e38', name: 'Música con licencia', price: 120 },
{ id: 'e39', name: 'Entrega rápida', price: 240 }, { id: 'e40', name: 'Corrección extra', price: 60 }
] }
]
};
const KMCAT = { boda: ['boda','Boda'], grabacion: ['grab','Boda','Ceremonia y recepción'], grabcont: ['grab','Contenido','Para redes o tu negocio'], grabevento: ['grab','Evento','Cumpleaños, charlas, empresas'], reel: ['reel',''], edboda: ['edi','Boda','Highlight o película de boda'], edreel: ['edi','Reels','Reels con el material del cliente'], plan: ['plan','',''], crear: ['edi','Sin metraje','Sin material: lo creo con stock y gráficos'] };
this.state.services = this.state.services.map((sv) => ({ ...sv, cat: (KMCAT[sv.id] || [sv.id])[0], sub: (KMCAT[sv.id] || ['', ''])[1], subDesc: (KMCAT[sv.id] || ['', '', ''])[2] || '', rev: sv.id.startsWith('grab') ? 0 : 2, revDays: (sv.id === 'boda' || sv.id === 'edboda') ? 7 : 5, deliv: sv.id === 'boda' ? 30 : sv.id === 'edboda' ? 15 : sv.id === 'plan' ? 3 : sv.id === 'crear' ? 7 : sv.id.startsWith('grab') ? 3 : 5, terms: this.kmTerms(sv.id === 'boda' ? 'boda' : sv.id === 'edboda' || sv.id === 'edreel' ? 'edicion' : sv.id === 'crear' ? 'crear' : sv.id === 'plan' ? 'plan' : sv.id.startsWith('grab') ? 'grabacion' : 'video') }));
}
kmTerms(kind) {
const boda = [
['Reserva de fecha', 'La fecha queda reservada al pagar el anticipo del {anticipo}%, hasta el {fecha}. Si no se paga hasta esa fecha, la fecha puede darse a otro cliente y el precio puede cambiar. El saldo se paga hasta el día del evento, antes de empezar a grabar.'],
['Cancelación y cambio de fecha', 'Si el cliente cancela, el anticipo no se devuelve: la fecha quedó bloqueada y se rechazaron otros trabajos. Si cambia la fecha con al menos 30 días de aviso, el anticipo vale para la nueva fecha, según disponibilidad.'],
['Tiempo de entrega', 'La entrega es en {dias} después del evento. El plazo corre desde que el saldo está pagado y la música está elegida.'],
['Revisiones y cambios', 'Incluye {rev} de cambios. Tienes {revdias} días desde la entrega para pedirlas; pasado ese plazo el trabajo se da por aceptado y cualquier cambio se cotiza aparte. Los cambios de cada ronda se piden en un solo mensaje. Corregir un error mío, como un nombre mal escrito o un corte mal hecho, no cuenta como ronda. Los ajustes de edición, como cortes, música o color, sí cuentan. Cambiar la estructura del video después de aprobada se cotiza aparte.'],
['Luces láser', 'No se graba mientras haya luces láser encendidas, porque pueden dañar el sensor de la cámara de forma permanente. Coordina con tu DJ o con el local para que no las usen, o para que las apaguen en los momentos que quieres en video. Lo que no se grabe por esta causa no se repone ni se descuenta.'],
['Horario y horas extra', 'La cobertura es por las horas contratadas. Si el evento se retrasa y hace falta más tiempo, cada hora extra se cobra según esta cotización.'],
['Condiciones del lugar', 'Las restricciones de la iglesia o del local, la poca luz y el sonido del lugar pueden limitar algunas tomas. Se trabaja con lo que el lugar permita.'],
['Música', 'Se usa música con licencia. Si pides una canción comercial, las redes sociales pueden silenciar o bloquear el video.'],
['Material y respaldo', 'Se entrega el video final, no el material en bruto. Los archivos se guardan 60 días después de la entrega.'],
['Uso del material', 'Puedo publicar fragmentos en mi portafolio y redes. Si prefieres que no, avísame antes del evento.'],
['Imprevistos', 'Si por enfermedad o accidente no puedo asistir, envío un reemplazo de confianza o devuelvo todo lo pagado.']
];
const video = [
['Pago', 'El trabajo empieza al pagar el anticipo del {anticipo}%, hasta el {fecha}. Después de esa fecha, el precio se vuelve a confirmar. El saldo se paga antes de recibir los archivos finales.'],
['Cancelación', 'Si el cliente cancela con el trabajo ya empezado, el anticipo no se devuelve.'],
['Tiempo de entrega', 'La entrega es en {dias} por {unidad}, contados desde que recibo todo el material, los textos y los logos. Si el material llega tarde, la entrega se mueve los mismos días.'],
['Revisiones y cambios', 'Incluye {rev} de cambios. Tienes {revdias} días desde la entrega para pedirlas; pasado ese plazo el trabajo se da por aceptado y cualquier cambio se cotiza aparte. Los cambios de cada ronda se piden en un solo mensaje. Corregir un error mío no cuenta como ronda. Los ajustes de edición, como cortes, ritmo, textos en pantalla, música o color, sí cuentan. Cambiar el guion o la idea después de aprobados se cotiza aparte.'],
['Guion aprobado', 'Los cambios al guion o a la idea después de aprobados se cotizan aparte.'],
['Material del cliente', 'El logo, los textos y los productos los entrega el cliente antes de la grabación.'],
['Línea gráfica', 'Si no me envías tu logo, colores y tipografía antes de empezar, uso un estilo propio. Los ajustes pequeños de estilo cuentan como una ronda de cambios. Cambiar el estilo gráfico completo después de empezar se cotiza aparte.'],
['Permisos y lugar', 'Si se graba en un local o con personas, el cliente consigue los permisos y las autorizaciones de imagen necesarios.'],
['Música', 'Se usa música con licencia. Si pides una canción comercial, las redes sociales pueden silenciar o bloquear el video.'],
['Material y respaldo', 'Se entrega el video final, no el proyecto editable. Los archivos se guardan 30 días después de la entrega.'],
['Uso del material', 'Puedo publicar el trabajo en mi portafolio y redes. Si prefieres que no, avísame antes de empezar.']
];
const edicion = [
['Pago', 'El trabajo empieza al pagar el anticipo del {anticipo}%, hasta el {fecha}. Después de esa fecha, el precio se vuelve a confirmar. El saldo se paga antes de recibir los archivos finales.'],
['Cancelación', 'Si el cliente cancela con el trabajo ya empezado, el anticipo no se devuelve.'],
['Tiempo de entrega', 'La entrega es en {dias} por {unidad}, contados desde que recibo todo el material completo. Si el material llega tarde, la entrega se mueve los mismos días.'],
['Revisiones y cambios', 'Incluye {rev} de cambios. Tienes {revdias} días desde la entrega para pedirlas; pasado ese plazo el trabajo se da por aceptado y cualquier cambio se cotiza aparte. Los cambios de cada ronda se piden en un solo mensaje. Corregir un error mío no cuenta como ronda. Los ajustes de edición, como cortes, ritmo, textos en pantalla, música o color, sí cuentan. Cambiar el guion o la idea después de aprobados se cotiza aparte.'],
['Material del cliente', 'El cliente entrega el material completo y en buena calidad. No me hago responsable de imagen o audio que ya llegue dañado, movido o sin foco.'],
['Línea gráfica', 'Si no me envías tu logo, colores y tipografía antes de empezar, uso un estilo propio. Los ajustes pequeños de estilo cuentan como una ronda de cambios. Cambiar el estilo gráfico completo después de empezar se cotiza aparte.'],
['Formato de entrega', 'Se entrega en el formato acordado. Otros formatos o resoluciones se cotizan aparte.'],
['Música', 'Se usa música con licencia. Si pides una canción comercial, las redes sociales pueden silenciar o bloquear el video.'],
['Material y respaldo', 'Se entrega el video final, no el proyecto editable. Los archivos se guardan 30 días después de la entrega.'],
['Uso del material', 'Puedo mostrar el trabajo en mi portafolio. Si prefieres que no, avísame antes de empezar.']
];
const crear = edicion.map((t) => t[0] === 'Material del cliente' ? ['Material y contenido', 'No hay metraje del cliente: creo el video con stock con licencia, grabaciones de pantalla y gráficos. El cliente entrega el guion o los puntos clave, el logo y las capturas o accesos que haga falta. Si algo llega tarde, la entrega se mueve los mismos días.'] : t[0] === 'Música' ? ['Música y stock', 'Se usan música y videos de stock con licencia. Si pides un clip o canción específica de otra fuente, la licencia la pones tú o se cotiza aparte.'] : t[0] === 'Tiempo de entrega' ? ['Tiempo de entrega', 'La entrega es en {dias} por {unidad}, contados desde que recibo el guion y el material de marca completos.'] : t);
const plan = [
['Ciclo y cobro', 'El servicio funciona en ciclos de 2 semanas, de jueves a jueves. Cada ciclo incluye los videos pactados al precio de esta cotización. El cobro se hace el jueves en que termina el ciclo, el mismo día de la grabación.'],
['Videos incluidos', 'Cada ciclo incluye la cantidad de videos de esta cotización. Los videos que no se usen en un ciclo no pasan al siguiente.'],
['Grabación', 'La grabación del ciclo se hace el jueves. Si hay que cambiar el día, se avisa con 48 horas de anticipación.'],
['Videos no entregados', 'Si un video del plan no se entrega dentro del ciclo, el valor de ese video queda como crédito y se descuenta del siguiente video o grabación extra que pidas.'],
['Pedidos fuera del plan', 'Los videos o grabaciones que no están en el plan se cotizan aparte y se cobran junto con el ciclo siguiente, salvo que se acuerde otra cosa.'],
['Revisiones y cambios', 'Incluye {rev} de cambios por video, pedidas dentro de {revdias} días desde la entrega. Pasado ese plazo el video se da por aceptado. Cambiar la idea o el guion después de aprobados se cotiza aparte.'],
['Material y línea gráfica', 'El cliente entrega a tiempo logo, colores y textos. Si no los envía, uso un estilo propio. Los ajustes pequeños de estilo cuentan como una ronda de cambios.'],
['Cambios al plan', 'El precio y la cantidad de videos se pueden cambiar con aviso de un ciclo completo. El cambio rige desde el ciclo siguiente.'],
['Cancelación', 'Cualquiera de las partes puede terminar el plan avisando antes de que empiece el siguiente ciclo. El ciclo en curso se paga completo.'],
['Uso del material', 'Puedo mostrar el trabajo en mi portafolio. Si prefieres que no, avísame antes de empezar.']
];
const grabacion = [
['Reserva de fecha', 'La fecha queda reservada al pagar el anticipo del {anticipo}%, hasta el {fecha}. Si no se paga hasta esa fecha, la fecha puede darse a otro cliente y el precio puede cambiar. El saldo se paga hasta el día de la grabación, antes de empezar.'],
['Cancelación y cambio de fecha', 'Si el cliente cancela, el anticipo no se devuelve: la fecha quedó bloqueada y se rechazaron otros trabajos. Si cambia la fecha con al menos 15 días de aviso, el anticipo vale para la nueva fecha, según disponibilidad.'],
['Qué incluye', 'Este servicio es solo grabación. No incluye edición, color, música ni video final. La edición se cotiza aparte.'],
['Entrega del material', 'El material en bruto se entrega en {dias} después de la grabación, por enlace o copiado en el disco del cliente. El disco lo pone el cliente.'],
['Luces láser', 'No se graba mientras haya luces láser encendidas, porque pueden dañar el sensor de la cámara de forma permanente. Lo que no se grabe por esta causa no se repone ni se descuenta.'],
['Horario y horas extra', 'La cobertura es por las horas contratadas. Si hace falta más tiempo, cada hora extra se cobra según esta cotización.'],
['Condiciones del lugar', 'Las restricciones del local, la poca luz y el sonido del lugar pueden limitar algunas tomas. Se trabaja con lo que el lugar permita.'],
['Respaldo del material', 'Guardo una copia del material 30 días después de la entrega. Pasado ese plazo, el respaldo es responsabilidad del cliente.'],
['Uso del material', 'Puedo publicar fragmentos en mi portafolio y redes. Si prefieres que no, avísame antes de la grabación.'],
['Imprevistos', 'Si por enfermedad o accidente no puedo asistir, envío un reemplazo de confianza o devuelvo todo lo pagado.']
];
return (kind === 'boda' ? boda : kind === 'edicion' ? edicion : kind === 'crear' ? crear : kind === 'plan' ? plan : kind === 'grabacion' ? grabacion : video).map((t, i) => ({ id: 't' + (i + 1), title: t[0], text: t[1], on: true }));
}
componentDidMount() { this.kmStart(); }
componentWillUnmount() { this.kmStop(); }
kmRender() {
const st = this.state;
const rate = st.rate > 0 ? st.rate : 12;
const isBs = st.currency === 'Bs';
const sym = isBs ? 'Bs' : 'US$';
const otherSym = isBs ? 'US$' : 'Bs';
const group = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const fmtBs = (n) => group(Math.round(n));
const fmtUsd = (n) => { const r = Math.round(n * 100) / 100; return Number.isInteger(r) ? group(r) : String(r.toFixed(2)).replace('.', ','); };
const show = (bs) => isBs ? fmtBs(bs) : fmtUsd(bs / rate);
const showOther = (bs) => isBs ? fmtUsd(bs / rate) : fmtBs(bs);
const toInput = (bs) => isBs ? bs : Math.round((bs / rate) * 100) / 100;
const toBs = (e) => { const v = Math.max(0, Number(String(e.target.value).replace(',', '.')) || 0); return isBs ? v : v * rate; };
const cur = st.services.find((s) => s.id === st.sel) || st.services[0];
const isFijo = cur.mode === 'fijo';
const opt = cur.options.find((o) => o.id === st.optBy[cur.id]) || cur.options[0] || { id: '', name: 'Sin nivel', desc: '', price: 0 };
const GEAR0 = [{ id: 'osmo', name: 'Osmo Pocket 3', sub: 'Más económica', img: 'app/img/osmo.png' }, { id: 'sony', name: 'Sony A7 IV', sub: 'Calidad cine', img: 'app/img/sony.png' }];
const gear = st.gear && st.gear.length ? st.gear : GEAR0;
const gp = (sv, id) => sv.camPrices && sv.camPrices[id] !== undefined ? sv.camPrices[id] : (id === 'osmo' ? sv.camOsmo : id === 'sony' ? sv.camSony : 0) || 0;
const camSel = st.camBy[cur.id];
const camId = gear.some((g) => g.id === camSel) ? camSel : gear[0].id;
const camPrice = cur.useCams ? gp(cur, camId) : 0;
const useDur = !isFijo && cur.useDur;
const durAdd = useDur ? st.durPrices[st.dur] : 0;
const perUnit = isFijo ? cur.unit : opt.price + camPrice + durAdd;
const base = isFijo ? opt.price + camPrice + cur.unit * st.qty : perUnit * st.qty;
const extrasTotal = cur.extras.reduce((a, x) => a + (st.extrasOn[x.id] ? x.price : 0), 0);
const special = st.specialBy[cur.id] || 0;
const packPct = st.discBy[cur.id] || 0;
const discount = special > 0 ? 0 : base * packPct / 100;
const calcSub = base + extrasTotal;
const subtotal = special > 0 ? special : calcSub - discount;
const tax = st.factura ? subtotal * st.taxPct / 100 : 0;
const total = subtotal + tax;
const deposit = total * st.depPct / 100;
const beforeTotal = calcSub + (st.factura ? calcSub * st.taxPct / 100 : 0);
const hasBefore = discount > 0;
let motionOff = typeof requestAnimationFrame === 'undefined';
try { if (localStorage.getItem('kmMotion') === 'off') motionOff = true; } catch (e) { motionOff = true; }
if (this.kmShown === undefined || motionOff) { this.kmShown = total; this.kmTarget = total; }
else if (this.kmTarget !== total) {
this.kmTarget = total; this.kmFrom = this.kmShown; this.kmT0 = Date.now();
if (!this.kmRaf) {
const tick = () => {
const p = Math.min(1, (Date.now() - this.kmT0) / 380);
this.kmShown = this.kmFrom + (this.kmTarget - this.kmFrom) * (1 - Math.pow(1 - p, 3));
this.kmRaf = p < 1 ? requestAnimationFrame(tick) : null;
this.forceUpdate();
};
this.kmRaf = requestAnimationFrame(tick);
}
}
const shownTotal = this.kmShown;
const setSvc = (patch) => this.setState({ services: st.services.map((s) => s.id === cur.id ? { ...s, ...(typeof patch === 'function' ? patch(s) : patch) } : s), copied: false });
const setList = (key, id, patch) => setSvc((s) => ({ [key]: s[key].map((x) => x.id === id ? { ...x, ...patch } : x) }));
const dropFrom = (key, id) => setSvc((s) => ({ [key]: s[key].filter((x) => x.id !== id) }));

const tabs = [['cli','Cliente'],['svc','Servicio'],['pre','Precio'],['doc','Documento']].map(([id,name]) => ({
name, active: st.tab === id,
bg: st.tab === id ? 'var(--accent)' : 'transparent',
fg: st.tab === id ? 'var(--onAccent)' : 'var(--text)',
pick: () => { this.kmSfx('tap'); this.setState({ tab: id }); }
}));
const currencies = [['Bs','Bs'],['USD','US$']].map(([id,name]) => ({
name, active: (id === 'Bs') === isBs,
bg: (id === 'Bs') === isBs ? 'var(--accent)' : 'transparent',
fg: (id === 'Bs') === isBs ? 'var(--onAccent)' : 'var(--text)',
pick: () => this.setState({ currency: id, copied: false })
}));
const CATNAME = { plan: 'Plan', boda: 'Boda', grab: 'Grabación', reel: 'Reels', edi: 'Edición' };
const catIds = []; st.services.forEach((x) => { const c = x.cat || x.id; if (!catIds.includes(c)) catIds.push(c); });
const curCat = cur.cat || cur.id;
const services = catIds.map((c) => { const first = st.services.find((x) => (x.cat || x.id) === c); const on = c === curCat; return {
name: CATNAME[c] || first.name, active: on,
bg: on ? 'var(--accent)' : 'var(--card)', fg: on ? 'var(--onAccent)' : 'var(--text)',
pick: () => { if (on) return; this.kmSfx('tap'); this.setState({ sel: first.id, qty: first.qtyStart, copied: false }); }
}; });
const subList = st.services.filter((x) => (x.cat || x.id) === curCat);
const subs = subList.map((x) => ({ name: x.sub || x.name, desc: x.subDesc || '', dot: x.id === cur.id ? 'var(--accent)' : 'transparent', ring: x.id === cur.id ? 'var(--accent)' : 'var(--line)', active: x.id === cur.id,
bg: x.id === cur.id ? 'var(--card2)' : 'var(--card)', bd: x.id === cur.id ? 'var(--accent)' : 'transparent',
pick: () => { this.kmSfx('tap'); this.setState({ sel: x.id, qty: x.qtyStart, copied: false }); } }));
const hasSubs = subList.length > 1;
const subLabel = curCat === 'grab' ? 'Tipo de grabación' : curCat === 'edi' ? 'Tipo de edición' : 'Tipo de servicio';

const setGear = (fn) => this.setState({ gear: fn(gear), copied: false });
const patchG = (id, patch) => setGear((g) => g.map((x) => x.id === id ? { ...x, ...patch } : x));
const cams = gear.map((g) => {
const id = g.id; const on = id === camId; const price = gp(cur, id);
return {
name: g.name, sub: g.sub, active: on, editing: st.editing, img: g.img || '', hasImg: !!g.img, noImg: !g.img, imgLabel: g.img ? 'Foto' : 'Añadir foto', canRemove: gear.length > 1,
bg: on ? 'var(--accent)' : 'var(--card)', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'transparent',
price: toInput(price),
priceText: isFijo ? (price === 0 ? 'Incluida' : '+ ' + sym + ' ' + show(price)) : sym + ' ' + show(price) + ' por ' + cur.per,
showText: !st.editing,
setName: (e) => patchG(id, { name: e.target.value }),
setSub: (e) => patchG(id, { sub: e.target.value }),
setImg: (e) => { const f = e.target.files && e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { const im = new Image(); im.onload = () => { const k = Math.min(1, 420 / Math.max(im.width, im.height)); const c = document.createElement('canvas'); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k); c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); patchG(id, { img: c.toDataURL('image/png') }); }; im.src = rd.result; }; rd.readAsDataURL(f); },
remove: () => setGear((l) => l.filter((x) => x.id !== id)),
setPrice: (e) => setSvc((sv) => ({ camPrices: { ...(sv.camPrices || {}), [id]: toBs(e) } })),
pick: () => this.setState({ camBy: { ...st.camBy, [cur.id]: id }, copied: false })
};
});
const addGear = () => { this.kmSfx('tap'); const n = 'g' + Date.now(); setGear((g) => [...g, { id: n, name: 'Nuevo equipo', sub: '', img: '' }]); };
const optionCards = cur.options.map((o) => {
const on = o.id === opt.id;
return {
name: o.name, active: on, sym, priceText: show(o.price),
bg: on ? 'var(--accent)' : 'var(--card)', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'transparent',
pick: () => this.setState({ optBy: { ...st.optBy, [cur.id]: o.id }, copied: false })
};
});
const optionRows = cur.options.map((o) => ({
name: o.name, desc: o.desc, price: toInput(o.price),
setName: (e) => setList('options', o.id, { name: e.target.value }),
setDesc: (e) => setList('options', o.id, { desc: e.target.value }),
setPrice: (e) => setList('options', o.id, { price: toBs(e) }),
remove: () => dropFrom('options', o.id)
}));
const durDefs = [['d0','Hasta 30 s'],['d1','Hasta 1 min'],['d2','1 a 3 min'],['d3','3 a 10 min'],['d4','Más de 10 min']];
const durs = durDefs.map(([id,name]) => {
const on = id === st.dur;
const p = st.durPrices[id];
return {
name, active: on, editing: st.editing,
bg: on ? 'var(--accent)' : 'var(--card)', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'transparent',
price: toInput(p),
addText: p === 0 ? 'Incluido' : '+ ' + sym + ' ' + show(p) + ' por ' + cur.per,
showText: !st.editing,
setPrice: (e) => this.setState({ durPrices: { ...st.durPrices, [id]: toBs(e) }, copied: false }),
pick: () => this.setState({ dur: id, copied: false })
};
});
const extras = cur.extras.map((x) => {
const on = !!st.extrasOn[x.id];
return {
name: x.name, on, sym, priceText: show(x.price),
trackBg: on ? 'var(--accent)' : 'var(--track)', knobBg: on ? 'var(--onAccent)' : 'var(--muted)', knobLeft: on ? 23 : 3,
toggle: () => { this.kmSfx('tap'); this.setState({ extrasOn: { ...st.extrasOn, [x.id]: !st.extrasOn[x.id] }, copied: false }); }
};
});
const extraRows = cur.extras.map((x) => ({
name: x.name, price: toInput(x.price),
setName: (e) => setList('extras', x.id, { name: e.target.value }),
setPrice: (e) => setList('extras', x.id, { price: toBs(e) }),
remove: () => dropFrom('extras', x.id)
}));

const chosen = cur.extras.filter((x) => st.extrasOn[x.id]).map((x) => x.name.toLowerCase());
const camName = cur.useCams ? (gear.find((g) => g.id === camId) || gear[0]).name : '';
const durName = durDefs.find(([id]) => id === st.dur)[1].toLowerCase();
const titleWord = isFijo ? 'paquete' : 'nivel';
let head = 'Cotización: ' + cur.name.toLowerCase() + ', ' + titleWord + ' ' + opt.name.toLowerCase() + '.';
if (!isFijo) head = 'Cotización: ' + cur.name.toLowerCase() + ', ' + st.qty + ' ' + (/s$/.test(cur.per) ? cur.per : cur.per + 's') + ', ' + titleWord + ' ' + opt.name.toLowerCase() + '.';

const DOWS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const until = new Date(2026, 10, 16 + st.valid);
const untilTxt = until.getDate() + ' de ' + MONTHS[until.getMonth()] + ' de ' + until.getFullYear();
const BOOKED = { '2026-11-28': ['Boda de Marcela y Diego', true], '2026-12-12': ['Cotización de Karen y Mauro', false] };
let dateLong = '';
if (/^\d{4}-\d{2}-\d{2}$/.test(st.eventDate)) { const q = st.eventDate.split('-'); const dd = new Date(Number(q[0]), Number(q[1]) - 1, Number(q[2])); dateLong = DOWS[dd.getDay()] + ' ' + dd.getDate() + ' de ' + MONTHS[dd.getMonth()]; }
const booked = BOOKED[st.eventDate];
const checkDate = isFijo && !!st.eventDate;
const dateNote = !checkDate ? '' : booked ? (booked[1] ? 'Ya tienes confirmada la ' + booked[0].replace(/^Boda/, 'boda') + ' ese día. Revisa antes de cerrar.' : 'Hay otra cotización para ese día: ' + booked[0].replace('Cotización de ', '') + '.') : 'Fecha libre.';
const discNote = special > 0 ? 'Con precio especial no se aplica el descuento.' : packPct > 0 ? 'Descuento de ' + sym + ' ' + show(discount) + ' sobre la producción. No incluye los extras.' : 'Opcional. Mueve el control solo si quieres dar descuento.';
const lines = [{ label: special > 0 ? 'Subtotal calculado' : 'Subtotal', value: sym + ' ' + show(calcSub) }];
if (discount > 0) lines.push({ label: 'Descuento ' + packPct + '%', value: '− ' + sym + ' ' + show(discount) });
if (special > 0) lines.push({ label: 'Precio especial', value: sym + ' ' + show(special) });
if (tax > 0) lines.push({ label: 'Impuesto ' + st.taxPct + '%', value: '+ ' + sym + ' ' + show(tax) });
const hasBreakdown = discount > 0 || special > 0 || tax > 0;
const condMsg = (dateLong ? 'Fecha: ' + dateLong + '.\n' : '') +
(discount > 0 ? 'Descuento del ' + packPct + '% en la producción.\n' : '') +
(special > 0 ? 'Precio especial acordado.\n' : '') +
(st.factura ? 'Con factura (' + st.taxPct + '% incluido en el total).\n' : '');
const more = {
dateLabel: isFijo ? 'Fecha del evento' : cur.id === 'plan' ? 'Primer jueves de cobro' : 'Fecha de entrega',
eventDate: st.eventDate,
setDate: (e) => this.setState({ eventDate: e.target.value, copied: false }),
hasDateNote: !!dateNote,
dateNote,
dateNoteColor: booked ? 'var(--warn)' : 'var(--accentText)',
discPct: packPct, discNote, hasBefore, beforeText: show(beforeTotal), saveText: show(beforeTotal - total),
setDisc: (e) => { const v = Math.min(50, Math.max(0, Math.round(Number(e.target.value) || 0))); this.setState({ discBy: { ...st.discBy, [cur.id]: v }, copied: false }); },
specialInput: special > 0 ? toInput(special) : '',
setSpecial: (e) => this.setState({ specialBy: { ...st.specialBy, [cur.id]: toBs(e) }, copied: false }),
calcText: sym + ' ' + show(calcSub),
factura: st.factura,
facturaText: '+ ' + st.taxPct + '%',
facturaTrack: st.factura ? 'var(--accent)' : 'var(--track)', facturaKnob: st.factura ? 23 : 3, facturaKnobBg: st.factura ? 'var(--onAccent)' : 'var(--muted)',
toggleFactura: () => this.setState({ factura: !st.factura, copied: false }),
taxPct: st.taxPct,
setTax: (e) => this.setState({ taxPct: Math.min(50, Math.max(0, Number(String(e.target.value).replace(',', '.')) || 0)), copied: false }),
depChips: [30, 50, 70].map((n) => ({ label: n + '%', bg: st.depPct === n ? 'var(--accent)' : 'var(--card2)', fg: st.depPct === n ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ depPct: n, copied: false }) })),
depPct: st.depPct,
valid: st.valid,
validMinus: () => this.setState({ valid: Math.max(1, st.valid - 1), copied: false }),
validPlus: () => this.setState({ valid: Math.min(60, st.valid + 1), copied: false }),
pay: st.pay,
setPay: (e) => this.setState({ pay: e.target.value, copied: false }),
lines, hasBreakdown,
condMsg
};

const revTxt = cur.rev + (cur.rev === 1 ? ' ronda' : ' rondas');
const diasTxt = cur.deliv + (cur.deliv === 1 ? ' día hábil' : ' días hábiles');
const message = head + '\n' +
(cur.useCams ? 'Grabación con ' + camName + '.\n' : '') +
(isFijo && st.qty > 0 ? 'Más ' + st.qty + ' ' + cur.per + (/s$/.test(cur.per) ? '' : 's') + '.\n' : '') +
(useDur ? 'Duración final: ' + durName + ' por ' + cur.per + '.\n' : '') +
(chosen.length ? 'Extras: ' + chosen.join(', ') + '.\n' : '') +
(cur.note ? cur.note + '\n' : '') +
condMsg +
'Entrega en ' + diasTxt + (isFijo ? ' después del evento' : '') + '.' + (cur.rev > 0 ? ' Incluye ' + revTxt + ' de cambios.' : '') + '\n' +
'Total: ' + sym + ' ' + show(total) + ' (≈ ' + otherSym + ' ' + showOther(total) + '). Anticipo del ' + st.depPct + '% para reservar: ' + sym + ' ' + show(deposit) + '.' +
' Para reservar, paga el anticipo hasta el ' + untilTxt + '.' +
(st.pay.trim() ? '\nPago: ' + st.pay.trim() : '') +
'\nLas condiciones completas van en el PDF.';

const fillTerm = (x) => String(x).replace(/\{fecha\}/g, untilTxt).replace(/\{anticipo\}/g, String(st.depPct)).replace(/\{rev\}/g, revTxt).replace(/\{revdias\}/g, String(cur.revDays || 5)).replace(/\{dias\}/g, diasTxt).replace(/\{unidad\}/g, cur.per);
const termList = cur.terms || [];
const terms = termList.map((t) => ({
title: t.title, text: fillTerm(t.text), on: t.on,
track: t.on ? 'var(--accent)' : 'var(--track)', knob: t.on ? 23 : 3, knobBg: t.on ? 'var(--onAccent)' : 'var(--muted)',
flip: () => { this.kmSfx('tap'); setList('terms', t.id, { on: !t.on }); }
}));
const termRows = termList.map((t) => ({
title: t.title, text: t.text,
setTitle: (e) => setList('terms', t.id, { title: e.target.value }),
setText: (e) => setList('terms', t.id, { text: e.target.value }),
remove: () => dropFrom('terms', t.id)
}));
const pdfTerms = termList.filter((t) => t.on).map((t, i) => ({ n: String(i + 1).padStart(2, '0'), title: t.title, text: fillTerm(t.text) }));
const EST = { boda: [840, 1320, 2280], reel: [70, 135, 200], edicion: [70, 135, 200] };
const durF = { d0: 1, d1: 1.15, d2: 1.6, d3: 2.4, d4: 3.5 };
const optIdx = cur.options.findIndex((o) => o.id === opt.id);
const estBase = (EST[cur.id] && EST[cur.id][optIdx]) || 0;
const estUnit = estBase * (useDur ? durF[st.dur] : 1);
const estTotal = isFijo ? estUnit : estUnit * st.qty;
const fmtH = (m) => { m = Math.round(m / 5) * 5; const h = Math.floor(m / 60); const r = m % 60; return h ? h + ' h' + (r ? ' ' + r + ' min' : '') : r + ' min'; };
const perHour = estTotal > 0 ? subtotal / (estTotal / 60) : 0;
const perPlural = /s$/.test(cur.per) ? cur.per : cur.per + 's';
const pdfRows = [];
if (isFijo) {
pdfRows.push({ label: cur.id.startsWith('grab') ? opt.name : 'Paquete ' + opt.name, sub: opt.desc, value: sym + ' ' + show(opt.price) });
if (cur.useCams) pdfRows.push({ label: 'Grabación con ' + camName, sub: '', value: camPrice === 0 ? 'Incluida' : sym + ' ' + show(camPrice) });
if (st.qty > 0) pdfRows.push({ label: st.qty + ' × ' + cur.per, sub: sym + ' ' + show(cur.unit) + ' por ' + cur.per, value: sym + ' ' + show(cur.unit * st.qty) });
} else {
pdfRows.push({ label: st.qty + ' × ' + cur.name + ', nivel ' + opt.name.toLowerCase(), sub: [opt.desc, cur.useCams ? 'Grabación con ' + camName + '.' : '', useDur ? 'Duración: ' + durName + '.' : '', sym + ' ' + show(perUnit) + ' por ' + cur.per + '.'].filter(Boolean).join(' '), value: sym + ' ' + show(base) });
}
cur.extras.filter((x) => st.extrasOn[x.id]).forEach((x) => pdfRows.push({ label: x.name, sub: '', value: sym + ' ' + show(x.price) }));
if (discount > 0) pdfRows.push({ label: 'Descuento ' + packPct + '%', sub: 'Sobre la producción', value: '− ' + sym + ' ' + show(discount) });
if (special > 0) pdfRows.push({ label: 'Precio especial acordado', sub: '', value: (special < calcSub ? '− ' : '+ ') + sym + ' ' + show(Math.abs(special - calcSub)) });
if (tax > 0) pdfRows.push({ label: 'Impuesto ' + st.taxPct + '%', sub: 'Con factura', value: '+ ' + sym + ' ' + show(tax) });

const kmAddDays = (iso, n) => { const p = (iso || '2026-11-16').split('-'); const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + n); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const kmShare = (pack) => { try { let list = []; try { list = JSON.parse(localStorage.getItem('kmAcc') || '[]'); } catch (e) { list = []; } list = list.filter((x) => x.id !== 'q' + qNoTxt); if (pack) list.push(pack); localStorage.setItem('kmAcc', JSON.stringify(list)); } catch (e) {} };
const kmPack = () => {
const ev = isFijo ? (st.eventDate || '') : '';
const due = cur.id === 'plan' ? (st.eventDate || '2026-11-19') : kmAddDays(ev || '2026-11-16', Number(cur.deliv) || 5);
const cat = cur.cat || cur.id;
const grab = cat === 'grab';
const isPlan = cur.id === 'plan';
let items = [];
if (!grab) {
if (cat === 'boda') { items = [{ name: 'Highlight', type: 'highlight' }]; if (opt.name !== 'Esencial') items.push({ name: 'Teaser', type: 'teaser' }); if (opt.name === 'Premium') items.push({ name: 'Ceremonia completa', type: 'ceremonia' }); }
else if (cur.id === 'edboda') { items = [{ name: 'Highlight', type: 'highlight' }]; if (/ceremonia/i.test(opt.name)) items.push({ name: 'Ceremonia completa', type: 'ceremonia' }); if (/completa/i.test(opt.name)) items.push({ name: 'Película completa', type: 'ceremonia' }); }
else if (isPlan) { items = []; }
else { const ty = cur.id === 'crear' ? 'edicion' : 'reel'; const nm = cur.id === 'crear' ? 'Video' : 'Reel'; for (let i = 1; i <= st.qty; i++) items.push({ name: nm + ' ' + i + ' de ' + st.qty, type: ty, brand: true }); }
}
return { id: 'q' + qNoTxt, no: qNoTxt, client: st.clientName.trim() || 'Cliente nuevo', phone: st.clientPhone.trim(), svcName: cur.name, plan: isPlan ? { start: st.eventDate || '2026-11-19', perCycle: st.qty, price: Math.round(total) } : null, kind: isPlan ? 'Plan' : grab ? 'Grabación' : cat === 'boda' ? 'Boda' : cat === 'edi' ? 'Edición' : 'Reels', optName: opt.name, event: ev, venue: st.venue.trim(), start: st.startTime.trim(), due, total: Math.round(total), deposit: Math.round(deposit), depPct: st.depPct, items, grab, isFijo };
};
const delivItems = [];
const perN = st.qty + ' ' + (st.qty === 1 ? cur.per : perPlural);
if (isFijo) {
delivItems.push({ title: cur.id.startsWith('grab') ? opt.name : 'Paquete ' + opt.name, text: opt.desc });
if (cur.useCams) delivItems.push({ title: 'Grabación con ' + camName, text: 'Cobertura de ' + (st.coverage.trim() ? st.coverage.trim() + ' horas' : 'las horas contratadas') + (st.qty > 0 ? ' más ' + st.qty + ' ' + perPlural : '') + '.' });
} else {
delivItems.push({ title: perN + (cur.id === 'edboda' || cur.id === 'edreel' ? (st.qty === 1 ? ' editado' : ' editados') : cur.id === 'crear' ? (st.qty === 1 ? ' creado' : ' creados') : ''), text: [opt.desc, useDur ? 'Duración: ' + durName + ' cada uno.' : ''].filter(Boolean).join(' ') });
if (cur.useCams) delivItems.push({ title: 'Grabación con ' + camName, text: 'Incluida en el precio del video.' });
}
chosen.forEach((n) => delivItems.push({ title: n.charAt(0).toUpperCase() + n.slice(1), text: 'Incluido en esta cotización.' }));
delivItems.push({ title: 'Calidad y formato', text: cur.id.startsWith('grab') ? 'Archivos originales de la cámara, en 4K, sin editar.' : cur.id === 'reel' ? 'MP4 vertical 9:16, 1080×1920. Subtítulos grabados en el video.' : cur.id === 'edboda' ? 'MP4 horizontal 16:9 en 4K y versión 1080p para WhatsApp.' : cur.id === 'edreel' ? 'MP4 en el formato del material original.' : cur.id === 'crear' ? 'MP4 en el formato acordado, 1080p o 4K.' : 'MP4 H.264 en 4K. Versión 1080p para WhatsApp y redes.' });
delivItems.push({ title: cur.rev > 0 ? 'Plazo y cambios' : 'Plazo', text: diasTxt + (isFijo ? ' después del evento' : ' por ' + cur.per) + '.' + (cur.rev > 0 ? ' ' + revTxt.charAt(0).toUpperCase() + revTxt.slice(1) + ' de cambios.' : '') });
delivItems.push({ title: 'Forma de entrega', text: cur.id.startsWith('grab') ? 'Descarga por enlace, disponible 30 días, o copia en el disco del cliente.' : 'Descarga por enlace, disponible ' + (isFijo ? '60' : '30') + ' días.' });
const noInclText = cur.id.startsWith('grab') ? 'edición, color, música ni video final. La edición se cotiza aparte.' : isFijo ? 'material en bruto, fotografías, álbum impreso, horas de cobertura no contratadas ni rondas de cambios adicionales. Se cotizan aparte.' : cur.id === 'edboda' || cur.id === 'edreel' ? 'grabación, proyecto editable ni rondas de cambios adicionales. Se cotizan aparte.' : cur.id === 'crear' ? 'grabación con cámara, proyecto editable, stock fuera de lo acordado ni rondas de cambios adicionales. Se cotizan aparte.' : 'proyecto editable, material en bruto, guion si no lo contrataste ni rondas de cambios adicionales. Se cotizan aparte.';
const pdfInfo = [
{ k: 'Para', v: (st.clientName.trim() || '[Nombre del cliente]') + (st.clientPhone.trim() ? ' · ' + st.clientPhone.trim() : '') },
{ k: isFijo ? 'Fecha del evento' : 'Fecha de entrega', v: dateLong ? dateLong.replace(/^./, (c) => c.toUpperCase()) : 'Por definir' },
{ k: 'Emitida', v: '16 de noviembre de 2026' }
];
if (isFijo) pdfInfo.push({ k: 'Lugar y horario', v: (st.venue.trim() || '[Lugar]') + ' · ' + (st.startTime.trim() ? st.startTime.trim() + ' h' : '[hora]') });
const QSTAT = { borrador: 'Borrador', enviada: 'Enviada', aceptada: 'Aceptada', rechazada: 'Rechazada', sinrespuesta: 'Sin respuesta' };
const qNoTxt = String(st.qNo).padStart(4, '0');
const nVideos = isFijo ? 3 : Math.max(1, st.qty);
const acceptMsg = st.qStatus === 'aceptada' ? (isFijo ? 'Agenda: ' + (dateLong || 'fecha por definir') + ', con avisos 30, 14, 7, 3, 2, 1 y 0 días antes. ' : 'Agenda: entrega a los ' + diasTxt + '. ') + (cur.id.startsWith('grab') ? 'Entregas: 1 entrega de material en bruto.' : 'Entregas: ' + nVideos + (nVideos === 1 ? ' video' : ' videos') + ' con su checklist.') + ' Anticipo por cobrar: ' + sym + ' ' + show(deposit) + '. Ya aparece en Agenda, Entregas y Clientes.' : '';
const statusChips = ['enviada', 'aceptada', 'rechazada', 'sinrespuesta'].map((k) => { const on = st.qStatus === k; return { label: QSTAT[k], on, bg: on ? 'var(--accent)' : 'transparent', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'var(--line)', pick: () => { this.kmSfx(k === 'aceptada' ? 'goal' : 'tap'); this.setState({ qStatus: k }); kmShare(k === 'aceptada' ? kmPack() : null); } }; });
const STCOL = { enviada: 'var(--muted)', aceptada: 'var(--accentText)', rechazada: 'var(--warn)', sinrespuesta: 'var(--warn)' };
const histAll = st.hist.map((h) => ({ ...h, status: h.status === 'enviada' && h.daysAgo >= 3 ? 'sinrespuesta' : h.status }));
const histShown = histAll.filter((h) => st.histFilter === 'todas' || h.status === st.histFilter);
const svcLabel = (id) => (st.services.find((x) => x.id === id) || { name: id }).name;
const histRows = histShown.map((h) => ({
no: h.no, client: h.client, svcName: svcLabel(h.svc), totalText: sym + ' ' + show(h.total),
statusLabel: QSTAT[h.status], chipColor: STCOL[h.status] || 'var(--muted)',
note: h.status === 'sinrespuesta' ? 'Sin respuesta hace ' + h.daysAgo + ' días' : h.daysAgo === 0 ? 'Hoy' : 'Hace ' + h.daysAgo + ' días', noteColor: h.status === 'sinrespuesta' ? 'var(--warn)' : 'var(--muted)',
dup: () => { this.kmSfx('tap'); this.setState({ view: 'form', sel: st.services.some((x) => x.id === h.svc) ? h.svc : st.sel, clientName: h.client, dupMsg: 'Duplicada de la N.º ' + h.no + '. Será la N.º ' + qNoTxt + '. Cambia lo que haga falta.', qStatus: 'borrador' }); },
resend: () => { this.kmSfx('copy'); this.setState({ histMsg: h.status === 'sinrespuesta' ? 'Hola ' + h.client + ', ¿pudiste revisar la cotización N.º ' + h.no + '? Si tienes dudas, dime y las vemos.' : 'Hola ' + h.client + ', te reenvío la cotización N.º ' + h.no + '. Si tienes dudas, dime.' }); }
}));
const histFilters = [['todas', 'Todas'], ['enviada', 'Enviadas'], ['aceptada', 'Aceptadas'], ['sinrespuesta', 'Sin respuesta'], ['rechazada', 'Rechazadas']].map(([k, l]) => { const on = st.histFilter === k; return { label: l, on, bg: on ? 'var(--accent)' : 'var(--card)', fg: on ? 'var(--onAccent)' : 'var(--text)', pick: () => { this.kmSfx('tap'); this.setState({ histFilter: k, histMsg: '' }); } }; });
const more2 = {
clientPhone: st.clientPhone, setPhone: (e) => this.setState({ clientPhone: e.target.value, copied: false }),
venue: st.venue, setVenue: (e) => this.setState({ venue: e.target.value, copied: false }),
startTime: st.startTime, setStart: (e) => this.setState({ startTime: e.target.value, copied: false }),
coverage: st.coverage, setCoverage: (e) => this.setState({ coverage: e.target.value, copied: false }),
pdfInfo, delivItems, noInclText,
pdfDocName: isFijo ? 'Cotización y contrato' : 'Cotización',
pdfReserve: isFijo ? 'Para reservar tu fecha, paga el anticipo hasta el ' + untilTxt + '. Después de esa fecha, la fecha y el precio se vuelven a confirmar.' : 'Para empezar, paga el anticipo hasta el ' + untilTxt + '. Después de esa fecha, el precio se vuelve a confirmar.',
pdfAccept: isFijo ? 'Al firmar este documento y pagar el anticipo, el cliente confirma que leyó y acepta la cotización y sus condiciones.' : 'Al pagar el anticipo, o al responder «Acepto» por mensaje, el cliente confirma que leyó y acepta la cotización y sus condiciones.',
pdfSignName: st.clientName.trim() || 'Nombre del cliente',
qNoTxt, qStatusLabel: QSTAT[st.qStatus], statusChips, hasAccept: st.qStatus === 'aceptada', acceptMsg,
isHist: st.view === 'hist', goHist: () => { this.kmSfx('tap'); this.setState({ view: 'hist', histMsg: '' }); },
histRows, histFilters, histEmpty: histRows.length === 0, histCount: histShown.length + (histShown.length === 1 ? ' cotización' : ' cotizaciones'), histMsg: st.histMsg, hasHistMsg: !!st.histMsg,
dupMsg: st.dupMsg, hasDupMsg: !!st.dupMsg, closeDup: () => this.setState({ dupMsg: '' }),
newQuote: () => { this.kmSfx('done'); const done = { no: qNoTxt, client: st.clientName.trim() || 'Sin nombre', svc: cur.id, total, status: st.qStatus === 'borrador' ? 'enviada' : st.qStatus, daysAgo: 0 }; this.setState({ hist: [done, ...st.hist], qNo: st.qNo + 1, qStatus: 'borrador', clientName: '', view: 'form', dupMsg: 'Guardada como N.º ' + qNoTxt + ' en el historial.' }); },
isForm: st.view === 'form', isPdf: st.view === 'pdf', isTerms: st.view === 'terms',
goTerms: () => { this.kmSfx('tap'); this.setState({ view: 'terms', termsEdit: false }); },
termsEditing: st.termsEdit, termsReading: !st.termsEdit,
toggleTermsEdit: () => { this.kmSfx('tap'); this.setState({ termsEdit: !st.termsEdit }); },
termsBtn: st.termsEdit ? 'Listo' : 'Editar',
termsBtnBg: st.termsEdit ? 'var(--accent)' : 'var(--card2)', termsBtnFg: st.termsEdit ? 'var(--onAccent)' : 'var(--text)',
termsSvc: cur.name + ' · ' + pdfTerms.length + ' de ' + termList.length + ' activas',
termsSummary: pdfTerms.length + ' de ' + termList.length + ' activas. Toca para verlas y editarlas.',
qrOn: st.qr, qrTrack: st.qr ? 'var(--accent)' : 'var(--track)', qrKnob: st.qr ? 23 : 3, qrKnobBg: st.qr ? 'var(--onAccent)' : 'var(--muted)',
toggleQr: () => { this.kmSfx('tap'); this.setState({ qr: !st.qr }); },
goPdf: () => { this.kmSfx('tap'); this.setState({ view: 'pdf', pdfDone: false }); },
goForm: () => { this.kmSfx('tap'); this.setState({ view: 'form' }); },
clientName: st.clientName,
setClient: (e) => this.setState({ clientName: e.target.value, copied: false }),
delivLabel: isFijo ? 'Entrega después del evento' : 'Entrega por ' + cur.per,
delivText: diasTxt, revText: revTxt, revDaysText: (cur.revDays || 5) + ' días',
rdMinus: () => { this.kmSfx('tap'); setSvc({ revDays: Math.max(1, (cur.revDays || 5) - 1) }); },
rdPlus: () => { this.kmSfx('tap'); setSvc({ revDays: Math.min(30, (cur.revDays || 5) + 1) }); },
delivMinus: () => { this.kmSfx('tap'); setSvc({ deliv: Math.max(1, cur.deliv - 1) }); },
delivPlus: () => { this.kmSfx('tap'); setSvc({ deliv: Math.min(120, cur.deliv + 1) }); },
revMinus: () => { this.kmSfx('tap'); setSvc({ rev: Math.max(0, cur.rev - 1) }); },
revPlus: () => { this.kmSfx('tap'); setSvc({ rev: Math.min(6, cur.rev + 1) }); },
terms, termRows, pdfTerms,
termsHint: st.termsEdit ? 'Cambia títulos y textos. Si escribes {anticipo}, {dias} o {rev}, se rellenan solos con los valores de la cotización.' : 'Van numeradas en el PDF. Apaga las que no apliquen a este cliente.',
addTerm: () => { setSvc((sv) => ({ terms: [...(sv.terms || []), { id: 't' + st.nextId, title: 'Nueva condición', text: '', on: true }] })); this.setState({ nextId: st.nextId + 1 }); },
hasEst: estTotal > 0,
estLine1: (isFijo ? 'Un paquete ' + opt.name.toLowerCase() + ' te toma unas ' + fmtH(estUnit) + ' de edición.' : 'Cada ' + cur.per + ' nivel ' + opt.name.toLowerCase() + ' te toma unas ' + fmtH(estUnit) + ' de edición.' + (st.qty > 1 ? ' Los ' + st.qty + ': unas ' + fmtH(estTotal) + '.' : '')),
estLine2: 'Con este precio ganas cerca de ' + sym + ' ' + show(perHour) + ' por hora de edición.' + (cur.useCams ? ' No cuenta las horas de grabación.' : ''),
pdfRows,
pdfClient: st.clientName.trim() || '[Nombre del cliente]',
pdfTitle: cur.name + (isFijo ? (cur.id.startsWith('grab') ? ' · ' + opt.name : ' · paquete ' + opt.name) : ' · ' + st.qty + ' ' + perPlural),
pdfDate: dateLong ? dateLong.replace(/^./, (c) => c.toUpperCase()) : 'Por definir',
pdfDateLabel: isFijo ? 'Fecha del evento' : 'Fecha de entrega',
pdfUntil: untilTxt,
pdfDeliv: 'Entrega en ' + diasTxt + (isFijo ? ' después del evento' : '') + (cur.rev > 0 ? ' · ' + revTxt + ' de cambios' : ''),
pdfIncl: cur.note, hasIncl: !!cur.note,
pdfPay: st.pay.trim(), hasPay: !!st.pay.trim(),
pdfDone: st.pdfDone,
pdfBtn: st.pdfDone ? 'PDF generado' : 'Descargar PDF',
downloadPdf: () => { this.kmSfx('copy'); this.setState({ pdfDone: true }); }
};

return {
...more,
...more2,
addGear, services, subs, hasSubs, subLabel, currencies, tabs, tabCli: st.tab === 'cli', tabSvc: st.tab === 'svc', tabPre: st.tab === 'pre', tabDoc: st.tab === 'doc', cams, optionCards, optionRows, durs, extras, extraRows, message, sym, otherSym,
editing: st.editing, notEditing: !st.editing,
showCams: cur.useCams, showDur: useDur, isFijo, isUnidad: !isFijo,
optionTitle: isFijo ? 'Paquete' : 'Nivel',
optionDesc: opt.desc,
svcName: cur.name, qtyLabel: cur.qtyLabel, per: cur.per, note: cur.note,
unitInput: toInput(cur.unit),
unitText: show(perUnit), unitOther: showOther(perUnit),
unidadBg: !isFijo ? 'var(--accent)' : 'transparent', unidadFg: !isFijo ? 'var(--onAccent)' : 'var(--text)',
fijoBg: isFijo ? 'var(--accent)' : 'transparent', fijoFg: isFijo ? 'var(--onAccent)' : 'var(--text)',
camsTrack: cur.useCams ? 'var(--accent)' : 'var(--track)', camsKnob: cur.useCams ? 23 : 3, camsKnobBg: cur.useCams ? 'var(--onAccent)' : 'var(--muted)',
durTrack: cur.useDur ? 'var(--accent)' : 'var(--track)', durKnob: cur.useDur ? 23 : 3, durKnobBg: cur.useDur ? 'var(--onAccent)' : 'var(--muted)',
setSvcName: (e) => setSvc({ name: e.target.value }),
setQtyLabel: (e) => setSvc({ qtyLabel: e.target.value }),
setPer: (e) => setSvc({ per: e.target.value }),
setNote: (e) => setSvc({ note: e.target.value }),
setUnit: (e) => setSvc({ unit: toBs(e) }),
modeUnidad: () => { setSvc({ mode: 'unidad', qtyStart: 1, qtyMin: 1 }); this.setState({ qty: Math.max(1, st.qty) }); },
modeFijo: () => { setSvc({ mode: 'fijo', qtyStart: 0, qtyMin: 0, useDur: false }); this.setState({ qty: 0 }); },
toggleCams: () => setSvc({ useCams: !cur.useCams }),
toggleDur: () => setSvc({ useDur: !cur.useDur }),
addOption: () => this.setState({ services: st.services.map((s) => s.id === cur.id ? { ...s, options: [...s.options, { id: 'o' + st.nextId, name: 'Nuevo', desc: '', price: 0 }] } : s), nextId: st.nextId + 1 }),
addExtra: () => this.setState({ services: st.services.map((s) => s.id === cur.id ? { ...s, extras: [...s.extras, { id: 'e' + st.nextId, name: 'Nuevo extra', price: 0 }] } : s), nextId: st.nextId + 1 }),
addService: () => {
const id = 's' + st.nextId;
const s = { id, cat: id, sub: '', name: 'Nuevo servicio', mode: 'unidad', qtyLabel: 'Cantidad', per: 'unidad', qtyStart: 1, qtyMin: 1, unit: 0, note: '', useCams: false, camOsmo: 0, camSony: 0, useDur: false, packs: [], rev: 2, revDays: 5, deliv: 5, terms: this.kmTerms('video'), options: [{ id: 'o' + (st.nextId + 1), name: 'Estándar', desc: '', price: 0 }], extras: [] };
this.setState({ services: [...st.services, s], sel: id, qty: 1, nextId: st.nextId + 2, copied: false });
},
removeService: () => {
if (st.services.length < 2) return;
const left = st.services.filter((s) => s.id !== cur.id);
this.setState({ services: left, sel: left[0].id, qty: left[0].qtyStart, copied: false });
},
rate: st.rate,
setRate: (e) => this.setState({ rate: Math.max(0, Number(e.target.value) || 0), copied: false }),
qty: st.qty,
totalText: show(shownTotal), otherTotal: showOther(shownTotal),
depositText: show(deposit), balanceText: show(total - deposit),
hint: st.editing ? 'Cambia servicios, niveles, extras y precios. Se guarda para futuras cotizaciones.' : 'Precios de ejemplo. Toca Editar para cambiar servicios, niveles, extras y precios.',
editLabel: st.editing ? 'Listo' : 'Editar',
editBg: st.editing ? 'var(--accent)' : 'var(--card2)',
editFg: st.editing ? 'var(--onAccent)' : 'var(--text)',
toggleEdit: () => this.setState({ editing: !st.editing }),
minus: () => { this.kmSfx('tap'); this.setState({ qty: Math.max(cur.qtyMin, st.qty - 1), copied: false }); },
plus: () => { this.kmSfx('tap'); this.setState({ qty: st.qty + 1, copied: false }); },
copy: () => { this.kmSfx('copy'); this.setState({ copied: true }); },
copyLabel: st.copied ? 'Mensaje copiado' : 'Copiar mensaje para WhatsApp',
copyColor: st.copied ? 'var(--accentText)' : 'var(--text)'
};
}
}

return Component;})()};
window.KM_SCREENS["Agenda"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1300px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"height:1216px;overflow-y:auto;padding:56px 20px 40px 20px;box-sizing:border-box;display:flex;flex-direction:column;gap:18px\">\n\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Agenda</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{todayLabel}}</span>\n</div>\n\n<div role=\"tablist\" style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;background:var(--card);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"2\">\n<button role=\"tab\" onClick=\"{{t.pick}}\" aria-selected=\"{{t.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.name}}</button>\n</sc-for>\n</div>\n\n<sc-if value=\"{{tabCal}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r3);padding:14px 12px 12px 12px\">\n<div style=\"display:flex;align-items:center;justify-content:space-between\">\n<button onClick=\"{{prevMonth}}\" aria-label=\"Mes anterior\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg></button>\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{monthTitle}}</span>\n<button onClick=\"{{nextMonth}}\" aria-label=\"Mes siguiente\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg></button>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px;text-align:center;font-size:12px;font-weight:600;color:var(--muted)\">\n<span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px\">\n<sc-for list=\"{{cells}}\" as=\"c\" hint-placeholder-count=\"35\">\n<sc-if value=\"{{c.empty}}\" hint-placeholder-val=\"{{ false }}\"><div style=\"height:46px\"></div></sc-if>\n<sc-if value=\"{{c.isDay}}\" hint-placeholder-val=\"{{ true }}\">\n<button onClick=\"{{c.pick}}\" aria-label=\"{{c.aria}}\" aria-pressed=\"{{c.selected}}\" style=\"position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:46px;padding:0;border-radius:var(--r1);box-sizing:border-box;border:{{c.border}};background:{{c.cellBg}}\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:999px;box-sizing:border-box;font-size:14px;font-weight:{{c.weight}};background:{{c.bg}};color:{{c.fg}};border:{{c.ring}}\">{{c.n}}</span>\n<sc-if value=\"{{c.dot}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"position:absolute;bottom:2px;width:6px;height:6px;border-radius:999px;background:var(--warn)\"></span></sc-if>\n</button>\n</sc-if>\n</sc-for>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 10px;padding:6px 4px 0 4px;font-size:12px;color:var(--muted)\">\n<span style=\"display:flex;align-items:center;gap:8px\"><span style=\"width:14px;height:14px;border-radius:999px;background:var(--accent);flex:none\"></span>Boda confirmada</span>\n<span style=\"display:flex;align-items:center;gap:8px\"><span style=\"width:14px;height:14px;border-radius:999px;border:2px dashed var(--accentText);box-sizing:border-box;flex:none\"></span>Boda por confirmar</span>\n<span style=\"display:flex;align-items:center;gap:8px\"><span style=\"width:6px;height:6px;border-radius:999px;background:var(--warn);margin:0 4px;flex:none\"></span>Entrega o rodaje</span>\n<span style=\"display:flex;align-items:center;gap:8px\"><span style=\"width:14px;height:14px;border-radius:4px;background:var(--track);flex:none\"></span>Fecha bloqueada</span>\n</div>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:10px\">\n<div style=\"display:flex;align-items:baseline;justify-content:space-between;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{selTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted);flex:none\">{{selRel}}</span>\n</div>\n<sc-for list=\"{{dayEvents}}\" as=\"e\" hint-placeholder-count=\"1\">\n<div style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border-radius:var(--r2);padding:12px 14px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:8px\">\n<span style=\"font-weight:600;font-size:15px\">{{e.title}}</span>\n<span style=\"font-size:11px;font-weight:600;border-radius:999px;padding:4px 10px;flex:none;background:{{e.badgeBg}};color:{{e.badgeFg}};border:{{e.badgeBorder}}\">{{e.badge}}</span>\n</div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{e.sub}}</span>\n<sc-if value=\"{{e.canFree}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{e.free}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);border:1px solid var(--line);font-size:14px;font-weight:600\">Liberar esta fecha</button>\n</sc-if>\n</div>\n</sc-for>\n<sc-if value=\"{{isFree}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px\">\n<span style=\"font-size:14px;color:var(--muted)\">Sin nada agendado. La fecha est\u00e1 libre.</span>\n<sc-if value=\"{{canBlock}}\" hint-placeholder-val=\"{{ true }}\">\n<button onClick=\"{{blockDay}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">Bloquear este d\u00eda</button>\n</sc-if>\n</div>\n</sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{tabAvi}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Avisos de boda</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">Se aplican a todas las bodas confirmadas. Elige cu\u00e1ntos d\u00edas antes.</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{dayChips}}\" as=\"d\" hint-placeholder-count=\"7\">\n<button onClick=\"{{d.toggle}}\" aria-pressed=\"{{d.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:999px;font-size:13px;font-weight:600;border:2px solid {{d.border}};background:{{d.bg}};color:{{d.fg}};padding:0 6px;box-sizing:border-box\">{{d.label}}</button>\n</sc-for>\n</div>\n<div style=\"display:flex;align-items:center;justify-content:space-between;background:var(--card2);border-radius:var(--r2);padding:8px 8px 8px 16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:12px;color:var(--muted)\">Hora del aviso</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:22px\">{{hourText}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{hourMinus}}\" aria-label=\"Una hora antes\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{hourPlus}}\" aria-label=\"Una hora despu\u00e9s\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;background:var(--field);border-radius:var(--r1);padding:4px\">\n<button onClick=\"{{modeNotif}}\" aria-pressed=\"{{isNotif}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{notifBg}};color:{{notifFg}}\">Notificaci\u00f3n</button>\n<button onClick=\"{{modeAlarm}}\" aria-pressed=\"{{isAlarm}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{alarmBg}};color:{{alarmFg}}\">Alarma</button>\n</div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{modeNote}}</span>\n\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px;margin-top:4px\">Pr\u00f3ximos avisos</span>\n<sc-if value=\"{{hasAvisos}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<sc-for list=\"{{avisos}}\" as=\"a\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 14px\">\n<span style=\"font-size:13px;font-weight:600;color:var(--accentText)\">{{a.when}}</span>\n<span style=\"font-size:14px;line-height:1.4\">{{a.text}}</span>\n</div>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{noAvisos}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:14px;color:var(--muted)\">No hay avisos activos. Activa al menos un d\u00eda.</span>\n</sc-if>\n\n<sc-if value=\"{{tested}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:6px;border:2px solid var(--accent);border-radius:var(--r2);padding:12px 14px;background:var(--bg)\">\n<span style=\"font-size:12px;font-weight:600;color:var(--accentText);letter-spacing:0.4px;text-transform:uppercase\">{{testLabel}} \u00b7 KM Studio</span>\n<span style=\"font-size:14px;line-height:1.4\">{{testText}}</span>\n</div>\n</sc-if>\n<button onClick=\"{{testAviso}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);background:var(--card2);font-size:14px;font-weight:600\">{{testBtn}}</button>\n</div>\n</div>\n</sc-if>\n</div>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { let sg = ''; try { sg = (localStorage.getItem('kmAcc') || '') + '|' + (localStorage.getItem('kmPV') || ''); } catch (e) {} if (sg !== this.kmAccSeen) { this.kmAccSeen = sg; if (this.kmSync) this.kmSync(sg); } if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmSync(sg) { this.forceUpdate(); }
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = {
tab: 'cal', y: new Date().getFullYear(), m: new Date().getMonth(), sel: (() => { const n = new Date(); return n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0'); })(), days: { 30: false, 14: false, 7: true, 3: true, 1: true, 0: true }, hour: 8, mode: 'notif', blocks: [], tested: false
};
}
componentDidMount() { this.kmStart(); }
componentWillUnmount() { this.kmStop(); }
kmRender() {
const st = this.state;
const D = window.KM_DATA;
const TODAY = D ? D.today() : '2026-11-17';
const NOW_HOUR = new Date().getHours();
const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const DOWS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const pad = (n) => String(n).padStart(2, '0');
const key = (y, m, d) => y + '-' + pad(m + 1) + '-' + pad(d);
const toDate = (k) => { const p = k.split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])); };
const diffDays = (a, b) => Math.round((toDate(a) - toDate(b)) / 86400000);
const group = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const EVENTS = (D && !D.hasSample()) ? [] : [
{ d: '2026-11-07', kind: 'boda', status: 'hecha', title: 'Boda de Ana y Luis', sub: 'Paquete Completo. Ya se grabó.' },
{ d: '2026-11-24', kind: 'rodaje', title: 'Rodaje de reels · Gimnasio Fuerza', sub: '4 reels del mes.' },
{ d: '2026-11-28', kind: 'boda', status: 'confirmada', title: 'Boda de Marcela y Diego', who: 'Marcela y Diego', owed: 1950, sub: 'Paquete Premium. Pagado Bs 3.450 de 5.400.' },
{ d: '2026-12-12', kind: 'boda', status: 'cotizada', title: 'Boda de Karen y Mauro', sub: 'Cotizada, sin anticipo. No bloquea la fecha.' }
];
let accList = []; try { accList = JSON.parse(localStorage.getItem('kmAcc') || '[]'); } catch (e) { accList = []; }
accList.forEach((q) => {
const owed = Math.max(0, q.total - q.deposit);
if (q.event && q.isFijo) EVENTS.push(q.grab ? { d: q.event, kind: 'rodaje', title: 'Grabación · ' + q.client, sub: q.optName + (q.start ? ' desde las ' + q.start + ' h' : '') + (q.venue ? ' en ' + q.venue : '') + '. Anticipo por cobrar Bs ' + group(q.deposit) + '.' } : { d: q.event, kind: 'boda', status: 'confirmada', title: 'Boda de ' + q.client, who: q.client, owed, sub: q.optName + '. Anticipo por cobrar Bs ' + group(q.deposit) + (q.venue ? ' · ' + q.venue : '') + '.' });
if (q.items && q.items.length && !q.plan) EVENTS.push({ d: q.due, kind: 'entrega', title: (q.items.length > 1 ? q.items.length + ' entregas' : q.items[0].name) + ' · ' + q.client, sub: 'Cotización N.º ' + q.no + ' aceptada. Entrega prevista.' });
});
accList.forEach((q) => { if (q.event) { for (let i = EVENTS.length - 1; i >= 0; i--) { if (EVENTS[i].status === 'cotizada' && EVENTS[i].d === q.event) EVENTS.splice(i, 1); } } });
let pvList = []; try { pvList = JSON.parse(localStorage.getItem('kmPV') || '[]'); } catch (e) { pvList = []; }
pvList.forEach((v) => { if (v.due) EVENTS.push({ d: v.due, kind: 'entrega', title: v.name + ' · ' + v.client, sub: v.done ? 'Entregado.' : 'Entrega semanal del plan.' }); });
if (D) { D.clients().forEach((c) => { const p = c.plan; if (!p) return;
if (p.start) { for (let k = 0; k < 6; k++) { const dt = D.toDate(p.start); dt.setDate(dt.getDate() + (p.days || 14) * k); EVENTS.push({ d: D.iso(dt), kind: 'rodaje', title: 'Grabación y cobro · ' + c.name, sub: 'Cierra el ciclo ' + ((p.cycle || 1) + k) + '. Cobro Bs ' + group(p.price || 0) + '.' }); } }
if (p.meet && typeof p.meet.dow === 'number') { const t0 = D.toDate(TODAY); const add = (p.meet.dow - t0.getDay() + 7) % 7; for (let k = 0; k < 8; k++) { const dt = new Date(t0.getFullYear(), t0.getMonth(), t0.getDate() + add + 7 * k); EVENTS.push({ d: D.iso(dt), kind: 'reunion', title: 'Reunión semanal · ' + c.name, sub: DOWS[p.meet.dow].charAt(0).toUpperCase() + DOWS[p.meet.dow].slice(1) + ' ' + (p.meet.time || '') + '. Se definen los videos de la semana.' }); } }
}); }
if (D) { D.items().forEach((it) => { if (/^(pv|pe|acc)-/.test(String(it.id)) || !it.due) return; const i2 = D.info(it); EVENTS.push({ d: it.due, kind: 'entrega', title: it.name + ' · ' + it.client, sub: i2.all ? 'Entregado.' : 'Etapa actual: ' + (i2.stages[i2.cur] || '') + '.' }); }); }
if (D) { D.clients().forEach((c) => { if (!c.event) return; const conf = (c.paid || 0) > 0; EVENTS.push({ d: c.event, kind: 'boda', status: conf ? 'confirmada' : 'cotizada', title: (c.kind === 'Boda' ? 'Boda de ' : 'Evento · ') + c.name, who: c.name, owed: D.owed(c), sub: c.detail + '. Pagado Bs ' + group(c.paid || 0) + ' de ' + group(c.total || 0) + '.' }); }); }
const blockEvents = st.blocks.map((d) => ({ d, kind: 'bloqueo', title: 'Fecha bloqueada', sub: 'No aceptas otro trabajo este día.' }));
const all = EVENTS.concat(blockEvents);
const byDay = {};
all.forEach((e) => { (byDay[e.d] = byDay[e.d] || []).push(e); });

const first = new Date(st.y, st.m, 1);
const offset = (first.getDay() + 6) % 7;
const dim = new Date(st.y, st.m + 1, 0).getDate();
const cells = [];
for (let i = 0; i < offset; i++) cells.push({ empty: true, isDay: false });
for (let d = 1; d <= dim; d++) {
const k = key(st.y, st.m, d);
const list = byDay[k] || [];
const has = (kind, status) => list.some((e) => e.kind === kind && (!status || e.status === status));
const conf = has('boda', 'confirmada');
const quote = has('boda', 'cotizada');
const done = has('boda', 'hecha');
const blocked = has('bloqueo');
const dot = has('entrega') || has('rodaje');
const isSel = k === st.sel;
const isToday = k === TODAY;
let bg = 'transparent', fg = 'var(--text)', ring = '2px solid transparent';
if (conf) { bg = 'var(--accent)'; fg = 'var(--onAccent)'; }
else if (quote) { ring = '2px dashed var(--accentText)'; }
else if (done) { bg = 'var(--card2)'; fg = 'var(--muted)'; }
else if (blocked) { bg = 'var(--track)'; }
const dayName = DOWS[new Date(st.y, st.m, d).getDay()];
const what = list.length ? ': ' + list.map((e) => e.title).join(', ') : '';
cells.push({
isDay: true, empty: false, n: d, bg, fg, ring, dot,
weight: isToday || conf ? 700 : 500,
selected: isSel,
border: isSel ? '2px solid var(--text)' : (isToday ? '1px solid var(--line)' : '2px solid transparent'),
cellBg: isSel ? 'var(--card2)' : 'transparent',
aria: dayName + ' ' + d + ' de ' + MONTHS[st.m] + what,
pick: () => this.setState({ sel: k, tested: false })
});
}

const selList = byDay[st.sel] || [];
const sd = toDate(st.sel);
const rel = diffDays(st.sel, TODAY);
const selRel = rel === 0 ? 'hoy' : rel === 1 ? 'mañana' : rel === -1 ? 'ayer' : rel > 0 ? 'en ' + rel + ' días' : 'hace ' + (-rel) + ' días';
const badges = {
confirmada: ['Confirmada', 'var(--accent)', 'var(--onAccent)', '2px solid var(--accent)'],
cotizada: ['Por confirmar', 'transparent', 'var(--text)', '2px dashed var(--accentText)'],
hecha: ['Hecha', 'var(--card2)', 'var(--muted)', '2px solid transparent'],
entrega: ['Entrega', 'var(--track)', 'var(--text)', '2px solid transparent'],
rodaje: ['Rodaje', 'var(--track)', 'var(--text)', '2px solid transparent'],
reunion: ['Reunión', 'var(--card2)', 'var(--text)', '2px solid var(--accentText)'],
bloqueo: ['Bloqueada', 'var(--track)', 'var(--text)', '2px solid transparent']
};
const dayEvents = selList.map((e) => {
const b = badges[e.kind === 'boda' ? e.status : e.kind];
return {
title: e.title, sub: e.sub, badge: b[0], badgeBg: b[1], badgeFg: b[2], badgeBorder: b[3],
canFree: e.kind === 'bloqueo',
free: () => this.setState({ blocks: st.blocks.filter((x) => x !== e.d) })
};
});

const dayDefs = [[30, '30 días'], [14, '14 días'], [7, '7 días'], [3, '3 días'], [2, '2 días'], [1, '1 día'], [0, 'El mismo día']];
const tabs = [['cal','Calendario'],['avi','Avisos']].map(([id, name]) => ({ name, active: st.tab === id, bg: st.tab === id ? 'var(--accent)' : 'transparent', fg: st.tab === id ? 'var(--onAccent)' : 'var(--text)', pick: () => { this.kmSfx('tap'); this.setState({ tab: id }); } }));
const dayChips = dayDefs.map(([n, label]) => {
const on = !!st.days[n];
return {
label, on,
bg: on ? 'var(--accent)' : 'transparent', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'var(--line)',
toggle: () => { this.kmSfx('tap'); this.setState({ days: { ...st.days, [n]: !st.days[n] }, tested: false }); }
};
});

const hh = pad(st.hour) + ':00';
const avisos = [];
EVENTS.filter((e) => e.kind === 'boda' && e.status === 'confirmada').forEach((e) => {
dayDefs.forEach(([n]) => {
if (!st.days[n]) return;
const dt = toDate(e.d); dt.setDate(dt.getDate() - n);
const dk = key(dt.getFullYear(), dt.getMonth(), dt.getDate());
const past = dk < TODAY || (dk === TODAY && st.hour <= NOW_HOUR);
if (past) return;
const lead = n === 0 ? 'Hoy es la boda de ' + e.who + '.' : n === 1 ? 'Mañana es la boda de ' + e.who + '.' : 'Faltan ' + n + ' días para la boda de ' + e.who + '.';
const text = lead + ' Revisa baterías, tarjetas y lista de rodaje.' + (e.owed > 0 ? ' Saldo pendiente: Bs ' + group(e.owed) + '.' : '');
avisos.push({ sortKey: dk, when: DOWS[dt.getDay()].slice(0, 3).replace(/^./, (c) => c.toUpperCase()) + ' ' + dt.getDate() + ' ' + MONTHS[dt.getMonth()].slice(0, 3) + ' · ' + hh, text });
});
});
avisos.sort((a, b) => (a.sortKey < b.sortKey ? -1 : 1));
const shown = avisos.slice(0, 4);
const isAlarm = st.mode === 'alarma';

return {
cells, dayEvents, dayChips, tabs, tabCal: st.tab === 'cal', tabAvi: st.tab === 'avi',
todayLabel: 'Hoy es ' + DOWS[toDate(TODAY).getDay()] + ' ' + toDate(TODAY).getDate() + ' de ' + MONTHS[toDate(TODAY).getMonth()],
monthTitle: MONTHS[st.m].replace(/^./, (c) => c.toUpperCase()) + ' ' + st.y,
prevMonth: () => this.setState(st.m === 0 ? { y: st.y - 1, m: 11 } : { m: st.m - 1 }),
nextMonth: () => this.setState(st.m === 11 ? { y: st.y + 1, m: 0 } : { m: st.m + 1 }),
selTitle: DOWS[sd.getDay()].replace(/^./, (c) => c.toUpperCase()) + ' ' + sd.getDate() + ' de ' + MONTHS[sd.getMonth()],
selRel,
isFree: selList.length === 0,
canBlock: st.sel >= TODAY,
blockDay: () => this.setState({ blocks: [...st.blocks, st.sel] }),
hourText: hh,
hourMinus: () => this.setState({ hour: Math.max(5, st.hour - 1), tested: false }),
hourPlus: () => this.setState({ hour: Math.min(21, st.hour + 1), tested: false }),
isNotif: !isAlarm, isAlarm,
notifBg: !isAlarm ? 'var(--accent)' : 'transparent', notifFg: !isAlarm ? 'var(--onAccent)' : 'var(--text)',
alarmBg: isAlarm ? 'var(--accent)' : 'transparent', alarmFg: isAlarm ? 'var(--onAccent)' : 'var(--text)',
modeNotif: () => this.setState({ mode: 'notif', tested: false }),
modeAlarm: () => this.setState({ mode: 'alarma', tested: false }),
modeNote: isAlarm ? 'Cada boda se envía a Google Calendar con una alerta a esa hora. Suena aunque la app esté cerrada.' : 'Llega como notificación de la app. En iPhone depende de que hayas instalado la app y dado permiso.',
avisos: shown, hasAvisos: shown.length > 0, noAvisos: shown.length === 0,
tested: st.tested && shown.length > 0,
testLabel: isAlarm ? 'Alarma' : 'Notificación',
testText: shown.length ? shown[0].text : '',
testBtn: st.tested ? 'Ocultar la prueba' : 'Probar un aviso',
testAviso: () => { if (!st.tested) this.kmSfx('alert'); this.setState({ tested: !st.tested }); }
};
}
}

return Component;})()};
window.KM_SCREENS["Clientes"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1850px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n\n<sc-if value=\"{{isList}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"km-in\" style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:12px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Clientes</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{listSub}}</span>\n</div>\n<button onClick=\"{{goNew}}\" style=\"display:flex;align-items:center;justify-content:center;gap:6px;height:44px;padding:0 16px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--onAccent)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg>Nuevo</button>\n</div>\n\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px\">\n<div style=\"display:flex;flex-direction:column;gap:4px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-size:12px;color:var(--muted)\">Por cobrar</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:24px;color:var(--accentText)\">Bs {{owedTotal}}</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:4px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-size:12px;color:var(--muted)\">Proyectos abiertos</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:24px\">{{openCount}}</span>\n</div>\n</div>\n\n<div class=\"chips\" style=\"display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;margin:0 -20px;padding:0 20px\">\n<sc-for list=\"{{filters}}\" as=\"f\" hint-placeholder-count=\"5\">\n<button onClick=\"{{f.pick}}\" aria-pressed=\"{{f.active}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;height:44px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:600;background:{{f.bg}};color:{{f.fg}}\">{{f.name}}</button>\n</sc-for>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:10px\">\n<sc-for list=\"{{clients}}\" as=\"c\" hint-placeholder-count=\"4\">\n<div style=\"position:relative\">\n<button onClick=\"{{c.open}}\" onContextMenu=\"{{c.menu}}\" style=\"display:flex;flex-direction:column;gap:10px;width:100%;box-sizing:border-box;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:flex-start;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:11px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:{{c.tagColor}}\">{{c.tag}}</span>\n<span style=\"font-weight:600;font-size:16px\">{{c.name}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{c.detail}}</span>\n</div>\n<span style=\"font-size:12px;font-weight:600;border-radius:999px;padding:4px 10px;background:{{c.chipBg}};color:{{c.chipFg}};flex:none;margin-right:34px\">{{c.status}}</span>\n</div>\n<div style=\"display:flex;align-items:center;gap:10px\">\n<div style=\"flex:1;height:6px;border-radius:999px;background:var(--track)\"><div style=\"width:{{c.progress}}%;height:6px;border-radius:999px;background:var(--accent)\"></div></div>\n<span style=\"font-size:12px;color:var(--muted)\">{{c.progress}}%</span>\n</div>\n<div style=\"display:flex;justify-content:space-between;font-size:13px\">\n<span style=\"color:var(--muted)\">Entrega: {{c.due}}</span>\n<span style=\"font-weight:600;color:{{c.moneyColor}}\">{{c.money}}</span>\n</div>\n</button>\n<button onClick=\"{{c.menu}}\" aria-label=\"Opciones de {{c.name}}\" style=\"position:absolute;top:6px;right:6px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:999px;color:var(--muted)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><circle cx=\"5\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"19\" cy=\"12\" r=\"2\"/></svg></button>\n</div>\n</sc-for>\n</div>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isDetail}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goList}}\" aria-label=\"Volver a clientes\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<div style=\"display:flex;flex-direction:column;gap:2px;flex:1;min-width:0\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:22px;line-height:1.1\">{{sel.name}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{sel.detail}}</span>\n</div>\n<span style=\"font-size:12px;font-weight:600;border-radius:999px;padding:4px 10px;background:{{sel.chipBg}};color:{{sel.chipFg}};flex:none\">{{sel.status}}</span>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:12px;color:var(--muted)\">Total</span><span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Bs {{sel.total}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:12px;color:var(--muted)\">Pagado</span><span style=\"font-family:var(--display);font-weight:700;font-size:18px;color:var(--accentText)\">Bs {{sel.paid}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:12px;color:var(--muted)\">Pendiente</span><span style=\"font-family:var(--display);font-weight:700;font-size:18px;color:{{sel.owedColor}}\">Bs {{sel.owed}}</span></div>\n</div>\n<div style=\"height:6px;border-radius:999px;background:var(--track)\"><div style=\"width:{{sel.paidPct}}%;height:6px;border-radius:999px;background:var(--accent);transition:width 0.4s ease\"></div></div>\n<div style=\"display:flex;gap:8px\">\n<input type=\"number\" inputmode=\"numeric\" value=\"{{payInput}}\" onChange=\"{{setPay}}\" placeholder=\"Monto en Bs\" aria-label=\"Monto del pago en Bs\" style=\"flex:1;min-width:0;box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 14px;font-size:15px\"/>\n<button onClick=\"{{addPayment}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;padding:0 16px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600;flex:none\">Registrar pago</button>\n</div>\n<button onClick=\"{{copyCharge}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);background:var(--card2);font-size:14px;font-weight:600;color:var(--accentText)\">{{copyLabel}}</button>\n</div>\n\n<sc-if value=\"{{planView.isPlan}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border:1px solid var(--accent);border-radius:var(--r3);padding:14px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\"><span style=\"font-family:var(--display);font-weight:700;font-size:17px\">{{planView.title}}</span><span style=\"font-size:13px;font-weight:600;color:var(--accentText);flex:none\">{{planView.pay}}</span></div>\n<label style=\"display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:13px;color:var(--muted)\"><span>D\u00eda de grabaci\u00f3n y cobro</span>\n<input type=\"date\" value=\"{{planView.startVal}}\" onChange=\"{{setPlanStart}}\" aria-label=\"D\u00eda de grabaci\u00f3n y cobro\" style=\"box-sizing:border-box;flex:none;width:160px;height:44px;border-radius:var(--r1);border:1px solid var(--accent);background:var(--card2);color:var(--text);padding:0 10px;font-size:14px;font-weight:600;font-family:var(--body)\"/></label>\n<sc-if value=\"{{planView.moved}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"font-size:12px;color:var(--warn);line-height:1.4\">{{planView.movedText}}</span></sc-if>\n<div style=\"display:flex;gap:6px;background:var(--track);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{planView.tabs}}\" as=\"t\" hint-placeholder-count=\"2\">\n<button onClick=\"{{t.pick}}\" style=\"flex:1;height:40px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.label}}</button>\n</sc-for>\n</div>\n<sc-if value=\"{{planView.tabSem}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<sc-for list=\"{{planView.weeks}}\" as=\"w\" hint-placeholder-count=\"2\">\n<div style=\"display:flex;flex-direction:column;background:var(--card2);border-radius:var(--r2);overflow:hidden\">\n<button onClick=\"{{w.toggleOpen}}\" style=\"display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:52px;padding:8px 12px;text-align:left\"><span style=\"display:flex;flex-direction:column;gap:1px\"><span style=\"font-family:var(--display);font-weight:700;font-size:15px\">{{w.title}}</span><span style=\"font-size:12px;color:var(--muted)\">{{w.meta}}</span></span><span style=\"font-size:18px;color:var(--accentText);flex:none\">{{w.chev}}</span></button>\n<sc-if value=\"{{w.open}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:6px;padding:0 12px 12px\">\n<span style=\"font-size:12px;color:var(--muted);line-height:1.35\">{{w.sub}}</span>\n<sc-for list=\"{{w.videos}}\" as=\"v\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;flex-direction:column;gap:4px;border-top:1px solid var(--line);padding-top:6px\">\n<div style=\"display:flex;gap:6px\">\n<input type=\"text\" value=\"{{v.name}}\" onChange=\"{{v.setName}}\" placeholder=\"Tema del video\" aria-label=\"Tema del video\" style=\"flex:1;min-width:0;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px;font-weight:600\"/>\n<button onClick=\"{{v.toggle}}\" aria-label=\"Marcar entregado\" style=\"display:flex;align-items:center;justify-content:center;flex:none;width:48px;height:40px;border-radius:var(--r1);font-size:20px;font-weight:700;border:2px solid {{v.doneBd}};background:{{v.doneBg}};color:{{v.doneFg}}\">{{v.doneIcon}}</button>\n</div>\n<input type=\"date\" value=\"{{v.due}}\" onChange=\"{{v.setDue}}\" aria-label=\"Fecha de entrega\" style=\"box-sizing:border-box;height:36px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:13px;font-family:var(--body)\"/>\n<sc-if value=\"{{v.canSend}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{v.send}}\" style=\"display:flex;align-items:center;justify-content:center;height:40px;border-radius:var(--r1);background:var(--track);color:var(--accentText);font-size:13px;font-weight:600\">Grabado \u2192 mandar a Entregas</button></sc-if>\n<sc-if value=\"{{v.sent}}\" hint-placeholder-val=\"{{ false }}\"><a href=\"Proyecto.dc.html\" style=\"display:flex;align-items:center;justify-content:space-between;height:36px;font-size:12px;color:var(--muted)\"><span>En Entregas</span><span style=\"font-weight:600;color:var(--accentText)\">{{v.sentText}}</span></a></sc-if>\n</div>\n</sc-for>\n<sc-if value=\"{{w.canSendAll}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{w.sendAll}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">{{w.sendAllLabel}}</button></sc-if>\n<div style=\"display:flex;flex-direction:column;gap:8px;border-top:1px solid var(--line);padding-top:8px\">\n<span style=\"font-size:12px;color:var(--muted)\">Extras de esta semana</span>\n<sc-for list=\"{{w.extras}}\" as=\"x\" hint-placeholder-count=\"1\">\n<div style=\"display:flex;flex-direction:column;gap:6px;background:var(--card);border-radius:var(--r1);padding:8px\">\n<div style=\"display:flex;gap:6px\">\n<input type=\"text\" value=\"{{x.name}}\" onChange=\"{{x.setName}}\" placeholder=\"Qu\u00e9 es (ej. Cobertura de la final)\" aria-label=\"Nombre del extra\" style=\"flex:1;min-width:0;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px;font-weight:600\"/>\n<button onClick=\"{{x.remove}}\" aria-label=\"Quitar extra\" style=\"flex:none;width:40px;height:40px;border-radius:var(--r1);font-size:18px;color:var(--warn);background:var(--track)\">\u00d7</button>\n</div>\n<div style=\"display:flex;gap:6px\">\n<input type=\"number\" inputmode=\"numeric\" value=\"{{x.price}}\" onChange=\"{{x.setPrice}}\" placeholder=\"Bs\" aria-label=\"Precio en Bs\" style=\"width:96px;flex:none;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:14px\"/>\n<input type=\"date\" value=\"{{x.due}}\" onChange=\"{{x.setDue}}\" aria-label=\"Fecha del extra\" style=\"flex:1;min-width:0;box-sizing:border-box;height:40px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 10px;font-size:13px;font-family:var(--body)\"/>\n</div>\n<span style=\"font-size:13px;color:var(--muted)\">{{x.text}}</span>\n<sc-if value=\"{{x.canSend}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{x.send}}\" style=\"display:flex;align-items:center;justify-content:center;height:40px;border-radius:var(--r1);background:var(--track);color:var(--accentText);font-size:13px;font-weight:600\">Mandar a Entregas</button></sc-if>\n<sc-if value=\"{{x.sent}}\" hint-placeholder-val=\"{{ false }}\"><a href=\"Proyecto.dc.html\" style=\"display:flex;align-items:center;justify-content:space-between;height:36px;font-size:12px;color:var(--muted)\"><span>En Entregas</span><span style=\"font-weight:600;color:var(--accentText)\">{{x.sentText}}</span></a></sc-if>\n<sc-if value=\"{{x.canCredit}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{x.applyCredit}}\" style=\"display:flex;align-items:center;justify-content:center;height:40px;border-radius:var(--r1);background:var(--track);color:var(--warn);font-size:13px;font-weight:600\">{{x.creditLabel}}</button></sc-if>\n</div>\n</sc-for>\n<div class=\"chips\" style=\"display:flex;gap:8px;overflow-x:auto;scrollbar-width:none\">\n<sc-for list=\"{{w.opts}}\" as=\"o\" hint-placeholder-count=\"4\">\n<button onClick=\"{{o.pick}}\" style=\"flex:none;min-height:40px;padding:0 14px;border-radius:999px;border:1px dashed var(--line);font-size:13px;font-weight:600\">+ {{o.name}}</button>\n</sc-for>\n</div>\n</div>\n</div>\n</sc-if>\n</div>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{planView.tabCic}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:12px\">\n<sc-if value=\"{{planView.hasCredit}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-size:14px;font-weight:600;color:var(--warn)\">{{planView.credit}}</span>\n<button onClick=\"{{planMode}}\" style=\"display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:48px;padding:0 14px;border-radius:var(--r1);background:var(--card2);font-size:13px;font-weight:600;text-align:left\"><span>{{planView.modeText}}</span><span style=\"color:var(--accentText);flex:none\">Cambiar</span></button>\n</div>\n</sc-if>\n<sc-if value=\"{{planView.hasHist}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:8px\">\n<span style=\"font-size:12px;color:var(--muted)\">Ciclos anteriores</span>\n<sc-for list=\"{{planView.history}}\" as=\"h\" hint-placeholder-count=\"2\">\n<div style=\"display:flex;justify-content:space-between;gap:8px;padding:5px 0;font-size:13px\"><span>{{h.label}}</span><span style=\"color:var(--muted)\">{{h.text}}</span></div>\n</sc-for>\n</div>\n</sc-if>\n<button onClick=\"{{closeCycle}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">Cerrar ciclo y pasar al siguiente</button>\n</div>\n</sc-if>\n</div>\n</sc-if>\n\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\"><span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Cotizaci\u00f3n N.\u00ba {{sel.quoteNo}}</span><span style=\"font-size:13px;font-weight:600;color:{{sel.quoteColor}}\">{{sel.quoteLabel}}</span></div>\n<span style=\"font-size:13px;color:var(--muted)\">{{sel.quoteNote}}</span>\n<sc-if value=\"{{sel.needsFollow}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{showFollow}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">Escribirle por WhatsApp</button>\n</sc-if>\n<sc-if value=\"{{followOn}}\" hint-placeholder-val=\"{{ false }}\">\n<span class=\"km-in\" style=\"font-size:13px;line-height:1.5;color:var(--muted);border-left:3px solid var(--accent);padding-left:10px\">{{followText}}</span>\n</sc-if>\n<div style=\"display:flex;flex-direction:column;gap:2px;border-top:1px solid var(--line);padding-top:10px\"><span style=\"font-size:12px;color:var(--muted)\">Saldo</span><span style=\"font-size:14px;font-weight:600;color:{{sel.saldoColor}}\">{{sel.saldoText}}</span></div>\n<sc-if value=\"{{sel.hasPayments}}\" hint-placeholder-val=\"{{ true }}\">\n<div style=\"display:flex;flex-direction:column;border-top:1px solid var(--line)\">\n<sc-for list=\"{{sel.payments}}\" as=\"p\" hint-placeholder-count=\"2\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:10px 0;border-bottom:1px solid var(--line)\"><div style=\"display:flex;flex-direction:column;gap:1px\"><span style=\"font-size:14px;font-weight:600\">{{p.label}}</span><span style=\"font-size:12px;color:var(--muted)\">{{p.when}}</span></div><span style=\"font-size:14px;font-weight:600;font-variant-numeric:tabular-nums\">{{p.amount}}</span></div>\n</sc-for>\n</div>\n</sc-if>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Entregas de este cliente</span>\n<sc-if value=\"{{noVids}}\" hint-placeholder-val=\"{{ false }}\"><span style=\"font-size:13px;color:var(--muted)\">Todav\u00eda no hay videos. Agr\u00e9galos y aparecen en Entregas, Agenda y Hoy.</span></sc-if>\n<sc-for list=\"{{sel.videos}}\" as=\"v\" hint-placeholder-count=\"3\">\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;gap:8px;background:var(--card);border-radius:var(--r2);padding:12px 16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:center;gap:8px\">\n<span style=\"font-weight:600;font-size:15px\">{{v.name}}</span>\n<span style=\"font-size:12px;color:var(--muted)\">{{v.stage}}</span>\n</div>\n<div style=\"height:6px;border-radius:999px;background:var(--track)\"><div style=\"width:{{v.progress}}%;height:6px;border-radius:999px;background:var(--accent)\"></div></div>\n</a>\n</sc-for>\n<button onClick=\"{{toggleAddV}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r2);border:1px dashed var(--line);font-size:14px;font-weight:600;color:var(--accentText)\">{{addVLabel}}</button>\n<sc-if value=\"{{addVOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<span style=\"font-size:12px;color:var(--muted)\">Tipo de video</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{avTypes}}\" as=\"t\" hint-placeholder-count=\"5\"><button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.label}}</button></sc-for></div>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Nombre (si lo dejas vac\u00edo usa el tipo)<input type=\"text\" value=\"{{avName}}\" onChange=\"{{setAvName}}\" placeholder=\"Ej: Highlight de la boda\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Fecha de entrega<input type=\"date\" value=\"{{avDue}}\" onChange=\"{{setAvDue}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<button onClick=\"{{saveV}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">A\u00f1adir a Entregas</button>\n</div>\n</sc-if>\n</div>\n\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Notas</span>\n<textarea value=\"{{sel.notes}}\" onChange=\"{{setNotes}}\" aria-label=\"Notas del cliente\" style=\"width:100%;box-sizing:border-box;height:84px;border-radius:var(--r2);border:1px solid var(--track);background:var(--card);color:var(--text);padding:12px 14px;font-size:14px;line-height:1.4;resize:none\"></textarea>\n</div>\n\n<button style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);background:var(--card2);font-size:15px;font-weight:600\">Escribir por WhatsApp</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{isNew}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:16px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goList}}\" aria-label=\"Cancelar\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<span style=\"font-family:var(--display);font-weight:700;font-size:22px\">Nuevo cliente</span>\n</div>\n\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Nombre\n<input type=\"text\" value=\"{{form.name}}\" onChange=\"{{setName}}\" placeholder=\"Ej: Luc\u00eda y Mateo\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:16px\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">WhatsApp\n<input type=\"text\" inputmode=\"tel\" value=\"{{form.phone}}\" onChange=\"{{setPhone}}\" placeholder=\"+591 \u2026\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:16px\"/>\n</label>\n\n<div style=\"display:flex;flex-direction:column;gap:6px\">\n<span style=\"font-size:13px;color:var(--muted)\">Trabajo \u00fanico (se paga una vez)</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;background:var(--card);border-radius:var(--r2);padding:6px\">\n<sc-for list=\"{{kindsU}}\" as=\"k\" hint-placeholder-count=\"3\">\n<button onClick=\"{{k.pick}}\" aria-pressed=\"{{k.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{k.bg}};color:{{k.fg}}\">{{k.name}}</button>\n</sc-for>\n</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:6px\">\n<span style=\"font-size:13px;color:var(--muted)\">Trabajo recurrente (se cobra por ciclo)</span>\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;background:var(--card);border-radius:var(--r2);padding:6px\">\n<sc-for list=\"{{kindsR}}\" as=\"k\" hint-placeholder-count=\"3\">\n<button onClick=\"{{k.pick}}\" aria-pressed=\"{{k.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:14px;font-weight:600;background:{{k.bg}};color:{{k.fg}}\">{{k.name}}</button>\n</sc-for>\n</div>\n</div>\n\n\n<sc-if value=\"{{isPlanForm}}\" hint-placeholder-val=\"{{ false }}\">\n<sc-if value=\"{{isPlanForm}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:6px\"><span style=\"font-size:13px;color:var(--muted)\">Tipo de video del paquete</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{vtOpts}}\" as=\"o\" hint-placeholder-count=\"5\"><button onClick=\"{{o.pick}}\" aria-pressed=\"{{o.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{o.bg}};color:{{o.fg}}\">{{o.label}}</button></sc-for></div></div>\n</sc-if>\n<div style=\"display:flex;flex-direction:column;gap:6px\"><span style=\"font-size:13px;color:var(--muted)\">Se cobra cada</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{freqOpts}}\" as=\"o\" hint-placeholder-count=\"3\"><button onClick=\"{{o.pick}}\" aria-pressed=\"{{o.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{o.bg}};color:{{o.fg}}\">{{o.label}}</button></sc-for></div></div>\n<div style=\"display:flex;flex-direction:column;gap:6px\"><span style=\"font-size:13px;color:var(--muted)\">Videos por ciclo</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{pcOpts}}\" as=\"o\" hint-placeholder-count=\"4\"><button onClick=\"{{o.pick}}\" aria-pressed=\"{{o.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{o.bg}};color:{{o.fg}}\">{{o.label}}</button></sc-for></div></div>\n<div style=\"display:flex;flex-direction:column;gap:6px\"><span style=\"font-size:13px;color:var(--muted)\">Reuni\u00f3n semanal con este cliente</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\"><sc-for list=\"{{dowOpts}}\" as=\"o\" hint-placeholder-count=\"7\"><button onClick=\"{{o.pick}}\" aria-pressed=\"{{o.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;min-width:44px;background:{{o.bg}};color:{{o.fg}}\">{{o.label}}</button></sc-for></div></div>\n<sc-if value=\"{{showMeetTime}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Hora de la reuni\u00f3n\n<input type=\"time\" value=\"{{form.meetTime}}\" onChange=\"{{setMeetTime}}\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n</sc-if>\n</sc-if>\n<sc-if value=\"{{showOtro}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">\u00bfQu\u00e9 tipo de trabajo es?\n<input type=\"text\" value=\"{{form.otro}}\" onChange=\"{{setOtro}}\" placeholder=\"Ej: Cumplea\u00f1os, Spot de radio, Podcast\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n</sc-if>\n<sc-if value=\"{{showQty}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Cantidad de videos (se crean en Entregas)\n<input type=\"number\" inputmode=\"numeric\" value=\"{{form.qty}}\" onChange=\"{{setQty}}\" placeholder=\"1\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n</sc-if>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">{{dateLabel}}\n<input type=\"date\" value=\"{{form.event}}\" onChange=\"{{setEvent}}\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n<sc-if value=\"{{showHora}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Hora de inicio (opcional)\n<input type=\"time\" value=\"{{form.hora}}\" onChange=\"{{setHora}}\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n</sc-if>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">{{detLabel}}\n<input type=\"text\" value=\"{{form.det}}\" onChange=\"{{setDet}}\" placeholder=\"Ej: Sal\u00f3n Las Palmas, ceremonia 16:00\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">{{totalLabel}}\n<input type=\"number\" inputmode=\"numeric\" value=\"{{form.total}}\" onChange=\"{{setTotal}}\" placeholder=\"Viene de la cotizaci\u00f3n\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:16px\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Anticipo ya pagado (Bs, opcional)\n<input type=\"number\" inputmode=\"numeric\" value=\"{{form.paid}}\" onChange=\"{{setPaid0}}\" placeholder=\"0\" style=\"box-sizing:border-box;height:52px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted)\">Notas (opcional)\n<textarea value=\"{{form.note}}\" onChange=\"{{setNote0}}\" placeholder=\"Lo que quieres recordar de este cliente\" style=\"width:100%;box-sizing:border-box;height:84px;border-radius:var(--r2);border:1px solid var(--line);background:var(--card);color:var(--text);padding:12px 14px;font-size:14px;line-height:1.4;resize:none;font-family:var(--body)\"></textarea>\n</label>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;align-items:center;justify-content:center;height:44px;font-size:14px;font-weight:600;color:var(--accentText)\">Cotizar primero</a>\n\n<button onClick=\"{{saveClient}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r2);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">Guardar cliente</button>\n</div>\n</sc-if>\n\n<sc-if value=\"{{menuOpen}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position:absolute;left:0;right:0;top:0;bottom:0;z-index:30;display:flex;flex-direction:column;justify-content:flex-end\">\n<button onClick=\"{{menuClose}}\" aria-label=\"Cerrar men\u00fa\" style=\"position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.55)\"></button>\n<div class=\"km-in\" style=\"position:relative;background:var(--card);border-radius:22px 22px 0 0;padding:18px 16px 30px;display:flex;flex-direction:column;gap:8px;max-height:82%;overflow-y:auto;box-shadow:0 -8px 30px rgba(0,0,0,0.35)\">\n<div style=\"width:40px;height:4px;border-radius:999px;background:var(--track);align-self:center;margin-bottom:4px\"></div>\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">{{menuTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{menuSub}}</span>\n<sc-if value=\"{{mMain}}\" hint-placeholder-val=\"{{ true }}\">\n<sc-for list=\"{{menuItems}}\" as=\"o\" hint-placeholder-count=\"5\">\n<button onClick=\"{{o.go}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%;color:{{o.color}}\">{{o.label}}</button>\n</sc-for>\n</sc-if>\n<sc-if value=\"{{mEdit}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Nombre<input type=\"text\"  value=\"{{mfName}}\" onChange=\"{{setMName}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Detalle<input type=\"text\"  value=\"{{mfDetail}}\" onChange=\"{{setMDetail}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Total acordado (Bs)<input type=\"number\" inputmode=\"numeric\" value=\"{{mfTotal}}\" onChange=\"{{setMTotal}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n<label style=\"display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted)\">Entrega<input type=\"text\"  value=\"{{mfDue}}\" onChange=\"{{setMDue}}\" style=\"box-sizing:border-box;width:100%;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px;font-family:var(--body)\"/></label>\n\n<button onClick=\"{{editSave}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:15px;font-weight:600\">Guardar cambios</button>\n<button onClick=\"{{menuBack}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%\">Cancelar</button>\n</sc-if>\n<sc-if value=\"{{mConfirm}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:14px;line-height:1.5\">{{confirmText}}</span>\n<button onClick=\"{{doDelete}}\" style=\"display:flex;align-items:center;justify-content:center;height:52px;border-radius:var(--r1);background:var(--warn);color:var(--onAccent);font-size:15px;font-weight:600\">S\u00ed, eliminar</button>\n<button onClick=\"{{menuBack}}\" style=\"display:flex;align-items:center;justify-content:center;gap:8px;height:52px;border-radius:var(--r1);background:var(--card2);font-size:15px;font-weight:600;width:100%\">Cancelar</button>\n</sc-if>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{toastOn}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"position:absolute;left:16px;right:16px;bottom:96px;z-index:31;display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--text);color:var(--bg);border-radius:var(--r2);padding:10px 14px;font-size:14px;font-weight:600\"><span>{{toastText}}</span>\n<sc-if value=\"{{toastUndo}}\" hint-placeholder-val=\"{{ false }}\"><button onClick=\"{{undo}}\" style=\"flex:none;min-height:40px;padding:0 10px;font-size:14px;font-weight:700;color:var(--bg);text-decoration:underline\">Deshacer</button></sc-if></div>\n</sc-if>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { let sg = ''; try { sg = localStorage.getItem('kmAcc') || ''; } catch (e) {} if (sg !== this.kmAccSeen) { this.kmAccSeen = sg; if (this.kmSync) this.kmSync(sg); } if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmPushPV(list) { try { localStorage.setItem('kmPV', '[]'); } catch (e) {} }
kmSync(sg) {
let list = []; try { list = JSON.parse(sg || '[]'); } catch (e) { list = []; }
const DOWS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MON = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const fmt = (iso) => { const p = iso.split('-'); const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2])); return DOWS[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()]; };
let hid = []; try { hid = JSON.parse(localStorage.getItem('kmHid') || '[]'); } catch (e) { hid = []; }
list = list.filter((q) => hid.indexOf('c:' + String(q.client || '').trim().toLowerCase()) < 0);
let cl = this.state.clients.filter((c) => !c.accNew).map((c) => c._orig ? c._orig : c);
list.forEach((q) => {
const nVid = (q.items || []).length;
const patch = { kind: q.kind, detail: q.plan ? 'Paquete · cada 2 semanas · ' + q.plan.perCycle + ' videos por ciclo' : q.kind + (nVid ? ' · ' + nVid + (nVid === 1 ? ' video' : ' videos') : ' · solo grabación') + (q.event ? ' · ' + fmt(q.event) : ''), status: q.plan ? 'Ciclo 1' : 'Anticipo', stage: q.plan ? 'Editando' : 'Anticipo', progress: 0, due: fmt(q.due), total: q.total, paid: 0, quote: { no: q.no, status: 'aceptada', daysAgo: 0 }, saldo: { text: q.plan ? 'Primer cobro el ' + fmt(q.plan.start) + ', día de grabación' : 'Anticipo por cobrar: Bs ' + q.deposit + (q.event ? '. Saldo hasta el ' + fmt(q.event) : ''), late: false }, payments: [], plan: q.plan ? { perCycle: q.plan.perCycle, price: q.plan.price, start: q.plan.start, anchor: q.plan.start, cycle: 1, meet: { dow: 1, time: '18:00' }, weeks: [[{ name: '', due: '', done: false }, { name: '', due: '', done: false }, { name: '', due: '', done: false }], [{ name: '', due: '', done: false }, { name: '', due: '', done: false }, { name: '', due: '', done: false }]], creditBs: 0, creditMode: 'diff', extras: [], history: [] } : undefined, videos: (q.items || []).map((it) => ({ name: it.name, stage: 'Pendiente', progress: 0 })) };
const i = cl.findIndex((c) => c.name.trim().toLowerCase() === q.client.trim().toLowerCase());
if (i >= 0) cl[i] = { ...cl[i], ...patch, _orig: cl[i] };
else cl = [{ id: 'acc-' + q.id, accNew: true, name: q.client, phone: q.phone, notes: '', ...patch }, ...cl];
});
this.setState({ clients: cl });
this.kmPushPV(cl);
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = {
view: 'list', filter: 'Todos', selId: 1, nextId: 6, payInput: '', followMsg: false,
form: { name: '', phone: '', kind: 'Boda', total: '', event: '', det: '', paid: '', note: '', perCycle: 6, meetDow: -1, meetTime: '18:00', vtype: 'reel', freq: 14, qty: '1', otro: '', hora: '' },
clients: [
{ id: 1, name: 'Ana y Luis', kind: 'Boda', detail: 'Boda · 3 videos', status: 'Editando', stage: 'Editando', progress: 44, due: 'jueves 19', total: 3600, paid: 2400, quote: { no: '0037', status: 'aceptada', daysAgo: 120 }, saldo: { text: 'Venció el 7 de noviembre, día de la boda', late: true }, payments: [{ label: 'Anticipo', amount: 1800, when: '12 de julio' }, { label: 'Segundo pago', amount: 600, when: '20 de septiembre' }], notes: 'Quieren la canción del primer baile en el highlight.',
videos: [{ name: 'Highlight', stage: 'Selección de material', progress: 15 }, { name: 'Teaser', stage: 'Corte', progress: 23 }, { name: 'Ceremonia completa', stage: 'Importar y organizar', progress: 8 }] },
{ id: 2, name: 'Cafetería Aroma', kind: 'Reels', detail: 'Reels · 8 al mes', status: 'En revisión', stage: 'Revisión', progress: 85, due: 'mañana', total: 2400, paid: 2400, quote: { no: '0040', status: 'aceptada', daysAgo: 21 }, saldo: { text: 'Pagado completo', late: false }, payments: [{ label: 'Anticipo', amount: 1200, when: '27 de octubre' }, { label: 'Saldo', amount: 1200, when: '10 de noviembre' }], notes: 'Publican martes y viernes.',
videos: [{ name: 'Reel 3 de 8', stage: 'Gráfica y títulos', progress: 62 }, { name: 'Reel 4 de 8', stage: 'Corte', progress: 20 }, { name: 'Reel 2 de 8', stage: 'Entregado', progress: 100 }] },
{ id: 3, name: 'Marcela y Diego', kind: 'Boda', detail: 'Boda · 1 video', status: 'Anticipo', stage: 'Rodaje', progress: 5, due: 'sábado 5 dic', total: 5400, paid: 3450, quote: { no: '0042', status: 'aceptada', daysAgo: 9 }, saldo: { text: 'Hasta el 28 de noviembre, día del evento', late: false }, payments: [{ label: 'Anticipo', amount: 2700, when: '8 de noviembre' }, { label: 'Segundo pago', amount: 750, when: '14 de noviembre' }], notes: '',
videos: [{ name: 'Highlight', stage: 'Pendiente de rodaje', progress: 0 }] },
{ id: 4, name: 'Gimnasio Fuerza', kind: 'Reels', detail: 'Reels · 4 al mes', status: 'Entregado', stage: 'Entregado', progress: 100, due: 'entregado', total: 1440, paid: 1440, quote: { no: '0039', status: 'aceptada', daysAgo: 36 }, saldo: { text: 'Pagado completo', late: false }, payments: [{ label: 'Anticipo', amount: 720, when: '12 de octubre' }, { label: 'Saldo', amount: 720, when: '30 de octubre' }], notes: '',
videos: [{ name: 'Reel 4 de 4', stage: 'Entregado', progress: 100 }] },
{ id: 5, name: 'Karen y Mauro', kind: 'Boda', detail: 'Boda · sábado 12 de diciembre', status: 'Sin respuesta', stage: 'Cotización', progress: 0, due: 'sábado 12 dic', total: 3600, paid: 0, quote: { no: '0041', status: 'sinrespuesta', daysAgo: 5 }, saldo: { text: 'Sin anticipo: la fecha no está reservada', late: false }, payments: [], notes: '', videos: [] },
{ id: 6, name: 'Bar Central', kind: 'Plan', detail: 'Paquete · cada 2 semanas · 6 videos por ciclo', status: 'Ciclo 5', stage: 'Editando', progress: 50, due: 'jueves 19', total: 1500, paid: 0, quote: { no: '0030', status: 'aceptada', daysAgo: 70 }, saldo: { text: 'Cobro el jueves 19 de noviembre, día de grabación', late: false }, payments: [], notes: '', videos: [{ name: 'Promo hamburguesa', stage: 'Entregado', progress: 100 }, { name: 'Noche de trivia', stage: 'Entregado', progress: 100 }, { name: 'Cumpleaños de la casa', stage: 'Entregado', progress: 100 }],
plan: { perCycle: 6, price: 1500, start: '2026-11-19', anchor: '2026-11-19', cycle: 5, meet: { dow: 1, time: '18:00' }, weeks: [[{ name: 'Promo hamburguesa', due: '2026-11-13', done: true }, { name: 'Noche de trivia', due: '2026-11-14', done: true }, { name: 'Cumpleaños de la casa', due: '2026-11-16', done: true }], [{ name: '', due: '', done: false }, { name: '', due: '', done: false }, { name: '', due: '', done: false }]], creditBs: 250, creditMode: 'diff', extras: [], history: [{ n: 4, range: '30 oct al 12 nov', amount: 1500, paid: true }, { n: 3, range: '16 al 29 oct', amount: 1500, paid: true }] } }
]
};
}
componentDidMount() { this.kmStart(); }
componentWillUnmount() { this.kmStop(); }
kmRender() {
const st = this.state;
const freqText = (d) => d === 7 ? 'cada semana' : d === 28 ? 'cada 4 semanas' : 'cada 2 semanas';
const group = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const chip = (s) => ({
'Editando': ['var(--track)', 'var(--text)'],
'En revisión': ['var(--warnFill)', 'var(--onAccent)'],
'Anticipo': ['var(--track)', 'var(--text)'],
'Entregado': ['var(--accent)', 'var(--onAccent)'],
'Sin respuesta': ['var(--warnFill)', 'var(--onAccent)']
}[s] || ['var(--track)', 'var(--text)']);
const upd = (id, fn) => { const nx = st.clients.map((c) => c.id === id ? fn(c) : c); this.setState({ clients: nx }); this.kmPushPV(nx); };
const names = ['Todos', 'Cotización', 'Rodaje', 'Editando', 'Revisión', 'Entregado', 'Paquetes', 'Bodas'].concat(st.clients.some((c) => c.archived) ? ['Archivados'] : []);
const owedOf = (c) => (!c.quote || c.quote.status === 'aceptada') ? Math.max(0, c.total - c.paid) : 0;
const filters = names.map((n) => ({
name: n,
active: n === st.filter,
bg: n === st.filter ? 'var(--accent)' : 'var(--card)',
fg: n === st.filter ? 'var(--onAccent)' : 'var(--text)',
pick: () => this.setState({ filter: n })
}));
const shown = st.clients.filter((c) => st.filter === 'Archivados' ? !!c.archived : (!c.archived && (st.filter === 'Todos' || (st.filter === 'Paquetes' ? !!c.plan : st.filter === 'Bodas' ? c.kind === 'Boda' : c.stage === st.filter))));
const clients = shown.map((c) => {
const owed = owedOf(c);
const ch = chip(c.status);
return {
tag: c.plan ? 'Paquete · ' + freqText(c.plan.days || 14) : (c.kind === 'Boda' ? 'Boda' : 'Único · ' + c.kind), tagColor: c.plan ? 'var(--accentText)' : 'var(--muted)', name: c.name, detail: c.detail, status: c.status, progress: c.progress, due: c.due,
chipBg: ch[0], chipFg: ch[1],
money: owed > 0 ? 'Debe Bs ' + group(owed) : (c.quote && c.quote.status !== 'aceptada' ? 'Cotización ' + (c.quote.status === 'sinrespuesta' ? 'sin respuesta' : c.quote.status) : 'Pagado'),
moneyColor: owed > 0 || (c.quote && c.quote.status === 'sinrespuesta') ? 'var(--warn)' : 'var(--muted)',
open: () => { if (this.kmCtx && Date.now() - this.kmCtx < 700) return; this.setState({ view: 'detail', selId: c.id, payInput: '', openW: undefined, planTab: 'sem', followMsg: false }); },
menu: (e) => { if (e && e.preventDefault) e.preventDefault(); this.kmCtx = Date.now(); this.kmSfx('tap'); this.setState({ _menu: c.id, _mMode: 'main' }); }
};
});
const s0 = st.clients.find((c) => c.id === st.selId) || st.clients[0] || { id: -1, name: '', detail: '', kind: '', status: '', stage: '', progress: 0, due: '', total: 0, paid: 0, payments: [], videos: [], notes: '', saldo: null, quote: null };
const owed = owedOf(s0);
const sch = chip(s0.status);
const D = window.KM_DATA;
const typesAll = D ? D.types() : {};
const vidsLive = D ? D.items().filter((x) => x.client === s0.name).map((x) => { const i2 = D.info(x); return { name: x.name, stage: i2.all ? 'Entregado' : (i2.stages[i2.cur] || ''), progress: i2.pct }; }) : [];
const vids = vidsLive.length ? vidsLive : (s0.videos || []);
const av = st._addV;
const iso7 = () => { const d = new Date(); d.setDate(d.getDate() + 7); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const addVals = {
noVids: vids.length === 0,
addVOpen: !!av, addVLabel: av ? 'Cancelar' : '+ Agregar video',
avName: av ? av.name : '', avDue: av ? av.due : '',
avTypes: av ? Object.keys(typesAll).map((k) => ({ label: typesAll[k].short, on: av.type === k, bg: av.type === k ? 'var(--accent)' : 'var(--card2)', fg: av.type === k ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ _addV: { ...av, type: k } }) })) : [],
toggleAddV: () => this.setState({ _addV: av ? null : { name: '', type: 'reel', due: '' } }),
setAvName: (e) => this.setState({ _addV: { ...av, name: e.target.value } }),
setAvDue: (e) => this.setState({ _addV: { ...av, due: e.target.value } }),
saveV: () => { if (!av || !D) return; this.kmSfx('done'); const T = typesAll[av.type]; const it = { id: 'c-' + Date.now(), name: av.name.trim() || (T ? T.short : 'Video'), client: s0.name, type: av.type, due: av.due || iso7(), done: {}, times: {}, needsBrand: false }; D.saveItems(D.items().concat([it])); this.setState({ _addV: null }); toast('Añadido a Entregas: ' + it.name); }
};

const sel = {
name: s0.name, detail: s0.detail, status: s0.status, chipBg: sch[0], chipFg: sch[1],
total: group(s0.total), paid: group(s0.paid), owed: group(owed),
owedColor: owed > 0 ? 'var(--warn)' : 'var(--muted)',
paidPct: s0.total > 0 ? Math.min(100, Math.round((s0.paid / s0.total) * 100)) : 0,
videos: vids, notes: s0.notes,
quoteNo: s0.quote ? s0.quote.no : '—',
quoteLabel: s0.quote ? ({ aceptada: 'Aceptada', sinrespuesta: 'Sin respuesta', enviada: 'Enviada', rechazada: 'Rechazada' }[s0.quote.status]) : 'Sin cotización',
quoteNote: s0.quote ? (s0.quote.status === 'sinrespuesta' ? 'Sin respuesta hace ' + s0.quote.daysAgo + ' días' : 'Hace ' + s0.quote.daysAgo + ' días') : '',
quoteColor: s0.quote && (s0.quote.status === 'sinrespuesta' || s0.quote.status === 'rechazada') ? 'var(--warn)' : 'var(--accentText)',
needsFollow: !!s0.quote && s0.quote.status === 'sinrespuesta',
saldoText: s0.saldo ? s0.saldo.text : 'Sin fecha límite',
saldoColor: s0.saldo && s0.saldo.late ? 'var(--warn)' : 'var(--muted)',
hasPayments: !!s0.payments && s0.payments.length > 0,
payments: (s0.payments || []).map((p) => ({ label: p.label, when: p.when, amount: 'Bs ' + group(p.amount) }))
};
const owedTotal = st.clients.filter((c) => !c.archived).reduce((a, c) => a + owedOf(c), 0);
const openCount = st.clients.filter((c) => !c.archived && c.stage !== 'Entregado').length;
const defaults = { 'Boda': 3600, 'Evento': 1500, 'Reels': 1440, 'Comercial': 1200, 'Edición': 720, 'Otro': 0, 'Plan': 1500 };
const KLAB = { Boda: 'Boda', Evento: 'Evento', Reels: 'Reels o videos sueltos', Comercial: 'Video comercial', Edición: 'Edición de material', Otro: 'Otro', Plan: 'Paquete por ciclo' };
const MONP = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const addD = (iso, n) => { const q = iso.split('-'); const d = new Date(Number(q[0]), Number(q[1]) - 1, Number(q[2]) + n); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const DOWP = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const dow = (iso) => { const q = iso.split('-'); return DOWP[new Date(Number(q[0]), Number(q[1]) - 1, Number(q[2])).getDay()]; };
const sh = (iso) => { const q = iso.split('-'); return Number(q[2]) + ' ' + MONP[Number(q[1]) - 1]; };

const hidGet = () => { try { return JSON.parse(localStorage.getItem('kmHid') || '[]'); } catch (e) { return []; } };
const hidSet = (a) => { try { localStorage.setItem('kmHid', JSON.stringify(a)); } catch (e) {} };
const chargeText = (c) => {
const q = c.plan; const ow = owedOf(c); const L = [];
if (q) {
L.push('Hola, el cobro de este ' + dow(q.start) + ' ' + sh(q.start) + ':');
L.push('Paquete ' + freqText(q.days || 14) + ' (' + q.perCycle + ' videos): Bs ' + group(q.price));
let cr = 0;
q.extras.forEach((x) => { if ((Number(x.price) || 0) > 0 || x.name) L.push((x.name || 'Extra') + ': Bs ' + group(Number(x.price) || 0)); cr += x.free ? Math.min(Number(x.price) || 0, x.used || 0) + Math.max(0, (Number(x.price) || 0) - (x.used || 0)) : (x.used || 0); });
if (cr > 0) L.push('Crédito: -Bs ' + group(cr));
if (c.paid > 0) L.push('Ya pagado: -Bs ' + group(c.paid));
L.push('Total a pagar: Bs ' + group(ow));
} else {
L.push('Hola, el cobro de ' + c.detail + ':');
L.push('Total: Bs ' + group(c.total));
if (c.paid > 0) L.push('Ya pagado: Bs ' + group(c.paid));
L.push('Por pagar: Bs ' + group(ow));
if (c.saldo && c.saldo.text) L.push(c.saldo.text + '.');
}
return L.join('\n');
};
const clip = (txt) => { try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt); else { const t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); } } catch (e) {} };
const toast = (text, undo) => { clearTimeout(this.kmToastT); this.setState({ _toast: text, _undo: !!undo }); this.kmToastT = setTimeout(() => { this._undoData = null; this.setState({ _toast: null, _undo: false }); }, 6000); };
const mc = st._menu ? st.clients.find((c) => c.id === st._menu) : null;
const mMode = st._mMode || 'main';
const closeMenu = () => this.setState({ _menu: null, _mMode: 'main' });
const mf = st._mForm || {};
const setMF = (k) => (e) => this.setState({ _mForm: { ...(st._mForm || {}), [k]: e.target.value } });
const menuItems = mc ? [
{ label: 'Abrir ficha', color: 'var(--text)', go: () => { this.setState({ view: 'detail', selId: mc.id, payInput: '', openW: undefined, planTab: 'sem', followMsg: false, _menu: null, _mMode: 'main' }); } },
{ label: 'Editar datos', color: 'var(--text)', go: () => this.setState({ _mMode: 'edit', _mForm: { name: mc.name, detail: mc.detail, total: String(mc.total), due: mc.due } }) },
{ label: 'Copiar cobro pendiente', color: 'var(--accentText)', go: () => { clip(chargeText(mc)); this.kmSfx('done'); closeMenu(); toast('Cobro copiado'); } },
{ label: 'Duplicar', color: 'var(--text)', go: () => { const cp = JSON.parse(JSON.stringify(mc)); cp.id = st.nextId; cp.name = mc.name + ' (copia)'; cp.paid = 0; cp.payments = []; cp.accNew = false; delete cp._orig; delete cp.quote; this.setState({ clients: [cp, ...st.clients], nextId: st.nextId + 1, _menu: null, _mMode: 'main' }); this.kmPushPV([cp, ...st.clients]); toast('Duplicado: ' + cp.name); } },
{ label: mc.archived ? 'Sacar de archivados' : 'Archivar', color: 'var(--text)', go: () => { const on = !mc.archived; const nx = st.clients.map((c) => c.id === mc.id ? { ...c, archived: on } : c); this.setState({ clients: nx, filter: 'Todos', _menu: null, _mMode: 'main' }); toast(on ? 'Archivado: ' + mc.name : 'Restaurado: ' + mc.name); } },
{ label: 'Eliminar', color: 'var(--warn)', go: () => this.setState({ _mMode: 'confirm' }) }
] : [];
const menuVals = {
menuOpen: !!mc, menuTitle: mc ? mc.name : '', menuSub: mc ? mc.detail : '',
mMain: mMode === 'main', mEdit: mMode === 'edit', mConfirm: mMode === 'confirm',
menuItems, menuClose: closeMenu, menuBack: () => this.setState({ _mMode: 'main' }),
confirmText: mc ? '¿Eliminar a ' + mc.name + '? Se borran sus pagos, videos del plan y notas. Podrás deshacerlo unos segundos.' : '',
mfName: mf.name || '', mfDetail: mf.detail || '', mfTotal: mf.total || '', mfDue: mf.due || '',
setMName: setMF('name'), setMDetail: setMF('detail'), setMTotal: setMF('total'), setMDue: setMF('due'),
editSave: () => { if (!mc) return; this.kmSfx('done'); const nm = (mf.name || '').trim() || mc.name; const nx = st.clients.map((c) => c.id === mc.id ? { ...c, name: nm, detail: (mf.detail || '').trim() || c.detail, total: Math.max(0, Number(mf.total) || 0), due: (mf.due || '').trim() || c.due } : c); if (D && nm !== mc.name) D.saveItems(D.items().map((x) => x.client === mc.name ? { ...x, client: nm } : x)); this.setState({ clients: nx, _menu: null, _mMode: 'main' }); this.kmPushPV(nx); toast('Cambios guardados'); },
doDelete: () => { if (!mc) return; const idx = st.clients.findIndex((c) => c.id === mc.id); const nx = st.clients.filter((c) => c.id !== mc.id); const rmIt = D ? D.items().filter((x) => x.client === mc.name && String(x.id).startsWith('c-')) : []; if (D && rmIt.length) D.saveItems(D.items().filter((x) => rmIt.indexOf(x) < 0)); this._undoData = { c: mc, idx, rm: rmIt }; hidSet(hidGet().concat(['c:' + mc.name.trim().toLowerCase()])); this.setState({ clients: nx, view: 'list', selId: nx[0] ? nx[0].id : null, _menu: null, _mMode: 'main' }); this.kmPushPV(nx); this.kmSfx('tap'); toast('Eliminado: ' + mc.name, true); },
toastOn: !!st._toast, toastText: st._toast || '', toastUndo: !!st._undo,
undo: () => { const u = this._undoData; if (!u) return; const nx = st.clients.slice(); nx.splice(Math.min(u.idx, nx.length), 0, u.c); hidSet(hidGet().filter((x) => x !== 'c:' + u.c.name.trim().toLowerCase())); if (D && u.rm && u.rm.length) D.saveItems(D.items().concat(u.rm)); this._undoData = null; clearTimeout(this.kmToastT); this.setState({ clients: nx, _toast: null, _undo: false }); this.kmPushPV(nx); }
};

const pl = s0.plan;
const perVideo = pl ? pl.price / pl.perCycle : 0;
const chg = (x) => x.free ? 0 : Math.max(0, (Number(x.price) || 0) - (x.used || 0));
const setEx = (gi, fn) => { const ex = pl.extras.map((x, k) => k === gi ? fn(x) : x); const cr = pl.creditBs - ex.reduce((a, x, k) => a + ((x.used || 0) - (pl.extras[k].used || 0)), 0); upd(s0.id, (c) => ({ ...c, total: c.plan.price + ex.reduce((a, x) => a + chg(x), 0), plan: { ...c.plan, extras: ex, creditBs: cr } })); };
const optsFor = (wi) => ['Cobertura de evento', 'Invitación de banda', 'Video suelto', 'Otro'].map((name) => ({ name, pick: () => { this.kmSfx('tap'); const ex = [...pl.extras, { name: name === 'Otro' ? '' : name, price: name === 'Video suelto' ? 250 : 0, used: 0, free: false, due: '', week: wi }]; upd(s0.id, (c) => ({ ...c, total: c.plan.price + ex.reduce((a, x) => a + chg(x), 0), plan: { ...c.plan, extras: ex } })); } }));
const planOpts = [];
const DOWN = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const pushPV = (list) => this.kmPushPV(list);
const updW = (wi, vi, patch) => { const next = st.clients.map((c) => c.id === s0.id ? { ...c, plan: { ...c.plan, weeks: c.plan.weeks.map((w, a) => a !== wi ? w : w.map((v, b) => b !== vi ? v : { ...v, ...patch })) } } : c); this.setState({ clients: next }); pushPV(next); };
const itemsNow = D ? D.items() : [];
const sentOf = (v) => (v.sentId ? itemsNow.find((x) => x.id === v.sentId) : null) || null;
const isDone = (v) => !!v.done || (sentOf(v) ? D.info(sentOf(v)).all : false);
const sendSlots = (list) => {
if (!D || !list.length) return;
const adds = [];
const nx = st.clients.map((c) => c.id !== s0.id ? c : { ...c, plan: { ...c.plan, weeks: c.plan.weeks.map((w, a) => w.map((v, b) => {
if (!list.some((x) => x[0] === a && x[1] === b)) return v;
const id = 'c-' + Date.now() + '-' + a + '-' + b;
adds.push({ id, name: v.name.trim(), client: s0.name, type: c.plan.vtype || 'reel', due: v.due || iso7(), done: {}, times: {}, needsBrand: false });
return { ...v, sentId: id };
})) } });
D.saveItems(D.items().concat(adds));
this.setState({ clients: nx });
this.kmSfx('done');
toast(adds.length === 1 ? 'En Entregas: ' + adds[0].name : adds.length + ' videos mandados a Entregas');
};
const sendExtra = (gi) => {
if (!D) return;
const x = pl.extras[gi]; if (!x || !(x.name || '').trim() || x.sentId) return;
const id = 'c-' + Date.now() + '-x' + gi;
D.saveItems(D.items().concat([{ id, name: x.name.trim(), client: s0.name, type: pl.vtype || 'reel', due: x.due || iso7(), done: {}, times: {}, needsBrand: false }]));
const ex = pl.extras.map((y, k) => k === gi ? { ...y, sentId: id } : y);
upd(s0.id, (c) => ({ ...c, plan: { ...c.plan, extras: ex } }));
this.kmSfx('done');
toast('En Entregas: ' + x.name.trim());
};
const weekRows = pl ? pl.weeks.map((w, wi) => {
const rec = addD(pl.start, -7 * (pl.weeks.length - 1 - wi));
const back = !pl.meet ? 0 : ((new Date(Number(rec.split('-')[0]), Number(rec.split('-')[1]) - 1, Number(rec.split('-')[2])).getDay() - pl.meet.dow + 7) % 7) || 7;
const meet = addD(rec, -back);
const defined = w.filter((v) => v.name.trim()).length;
const delivered = w.filter((v) => isDone(v)).length;
const autoOpen = pl.weeks.findIndex((x) => x.some((v) => !isDone(v)));
const openIdx = st.openW === undefined || st.openW === null ? (autoOpen < 0 ? pl.weeks.length - 1 : autoOpen) : st.openW;
const isOpen = openIdx === wi;
return { title: 'Semana ' + (wi + 1), meta: delivered + ' de ' + w.length + ' entregados · ' + defined + ' definidos', hasExtras: pl.extras.some((x) => x.week === wi), extras: pl.extras.map((x, gi) => ({ x, gi })).filter((o) => o.x.week === wi).map(({ x, gi }) => { const xi = x.sentId ? itemsNow.find((z) => z.id === x.sentId) : null; const xf = xi ? D.info(xi) : null; return { canSend: !!(x.name || '').trim() && !xi && !!D, sent: !!xi, sentText: xf ? (xf.all ? 'Entregado' : (xf.stages[xf.cur] || '') + ' · ' + xf.pct + '%') : '', send: () => sendExtra(gi), name: x.name, price: x.price || '', due: x.due || '', text: (x.free ? 'Sin cobro (crédito)' : 'Se cobra Bs ' + group(chg(x))) + (x.used > 0 ? ' · crédito usado Bs ' + group(x.used) : ''), canCredit: pl.creditBs > 0 && !x.used && !x.free && (Number(x.price) || 0) > 0, creditLabel: pl.creditMode === 'free' ? 'Aplicar crédito: sin cobro' : 'Aplicar crédito de Bs ' + group(Math.min(pl.creditBs, Number(x.price) || 0)), applyCredit: () => { this.kmSfx('done'); setEx(gi, (y) => pl.creditMode === 'free' ? { ...y, free: true, used: Math.min(pl.creditBs, perVideo) } : { ...y, used: Math.min(pl.creditBs, Number(y.price) || 0) }); }, setName: (e) => setEx(gi, (y) => ({ ...y, name: e.target.value })), setPrice: (e) => setEx(gi, (y) => ({ ...y, price: Number(e.target.value) || 0 })), setDue: (e) => setEx(gi, (y) => ({ ...y, due: e.target.value })), remove: () => { const ex = pl.extras.filter((_, k) => k !== gi); const back = (pl.extras[gi].used || 0); upd(s0.id, (c) => ({ ...c, total: c.plan.price + ex.reduce((a, y) => a + chg(y), 0), plan: { ...c.plan, extras: ex, creditBs: c.plan.creditBs + back } })); } }; }), opts: optsFor(wi), open: isOpen, chev: isOpen ? '⌃' : '⌄', toggleOpen: () => this.setState({ openW: isOpen ? -1 : wi }), sub: (pl.meet ? 'Reunión ' + DOWN[pl.meet.dow] + ' ' + sh(meet) + ' a las ' + pl.meet.time + ' · grabación ' : 'Grabación ') + DOWN[new Date(Number(rec.split('-')[0]), Number(rec.split('-')[1]) - 1, Number(rec.split('-')[2])).getDay()] + ' ' + sh(rec),
canSendAll: w.some((v, vi) => v.name.trim() && !sentOf(v)),
sendAllLabel: 'Mandar ' + w.filter((v) => v.name.trim() && !sentOf(v)).length + ' a Entregas',
sendAll: () => sendSlots(w.map((v, vi) => [wi, vi]).filter(([a, b]) => w[b].name.trim() && !sentOf(w[b]))),
videos: w.map((v, vi) => { const it = sentOf(v); const dn = isDone(v); const inf = it ? D.info(it) : null; return { name: v.name, due: v.due, doneBg: dn ? 'var(--accent)' : 'transparent', doneFg: dn ? 'var(--onAccent)' : 'var(--muted)', doneBd: dn ? 'var(--accent)' : 'var(--muted)', doneIcon: dn ? '✓' : '',
canSend: !!v.name.trim() && !it && !!D, sent: !!it, sentText: inf ? (inf.all ? 'Entregado' : (inf.stages[inf.cur] || '') + ' · ' + inf.pct + '%') : '',
send: () => sendSlots([[wi, vi]]),
setName: (e) => updW(wi, vi, { name: e.target.value }),
setDue: (e) => updW(wi, vi, { due: e.target.value }),
toggle: () => { this.kmSfx(dn ? 'tap' : 'done'); updW(wi, vi, { done: !dn }); } }; }) };
}) : [];
const planView = pl ? {
isPlan: true,
title: 'Ciclo ' + pl.cycle + ' · ' + sh(addD(pl.start, -13)) + ' al ' + sh(pl.start),
pay: 'Cobro el ' + dow(pl.start) + ' ' + sh(pl.start) + ' · Bs ' + group(s0.total),
startVal: pl.start,
moved: (pl.anchor || pl.start) !== pl.start,
movedText: 'Movido desde el ' + dow(pl.anchor || pl.start) + ' ' + sh(pl.anchor || pl.start) + '. El siguiente ciclo vuelve a su día normal.',
hasCredit: pl.creditBs > 0,
credit: 'Crédito a favor del cliente: Bs ' + group(pl.creditBs),
modeText: pl.creditMode === 'free' ? 'El siguiente extra sale gratis' : 'Se descuenta del siguiente extra',
weeks: weekRows,
tabs: [['sem', 'Semanas'], ['cic', 'Ciclo']].map((t) => ({ label: t[1], bg: (st.planTab || 'sem') === t[0] ? 'var(--accent)' : 'transparent', fg: (st.planTab || 'sem') === t[0] ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ planTab: t[0] }) })),
tabSem: (st.planTab || 'sem') === 'sem',
tabCic: st.planTab === 'cic',
hasExtras: false,
extras: [],
hasHist: pl.history.length > 0,
history: pl.history.map((h) => ({ label: 'Ciclo ' + h.n + ' · ' + h.range, text: 'Bs ' + group(h.amount) + (h.paid ? ' · pagado' : ' · pendiente') }))
} : { isPlan: false, weeks: [], tabs: [], tabSem: false, tabCic: false, title: '', pay: '', startVal: '', moved: false, movedText: '', progress: '', pct: 0, hasCredit: false, credit: '', modeText: '', hasExtras: false, extras: [], hasHist: false, history: [] };
const mkKinds = (arr) => arr.map((k) => ({
name: KLAB[k],
active: k === st.form.kind,
bg: k === st.form.kind ? 'var(--accent)' : 'transparent',
fg: k === st.form.kind ? 'var(--onAccent)' : 'var(--text)',
pick: () => this.setState({ form: { ...st.form, kind: k, total: String(defaults[k]) } })
}));
const kindsU = mkKinds(['Boda', 'Evento', 'Reels', 'Comercial', 'Edición', 'Otro']);
const kindsR = mkKinds(['Plan']);
return {
isList: st.view === 'list', isDetail: st.view === 'detail', isNew: st.view === 'new',
filters, clients, sel, owedTotal: group(owedTotal), openCount, kindsU, kindsR,
payInput: st.payInput,
form: st.form,
goList: () => this.setState({ view: 'list', followMsg: false }),
showFollow: () => { this.kmSfx('copy'); this.setState({ followMsg: !st.followMsg }); },
followOn: st.followMsg,
followText: 'Hola ' + s0.name + ', ¿pudiste revisar la cotización N.º ' + (s0.quote ? s0.quote.no : '') + '? Si tienes dudas, dime y las vemos.',
isPlanForm: st.form.kind === 'Plan',
showOtro: st.form.kind === 'Otro',
vtOpts: Object.keys(typesAll).map((k) => ({ label: typesAll[k].short, on: (st.form.vtype || 'reel') === k, bg: (st.form.vtype || 'reel') === k ? 'var(--accent)' : 'var(--card2)', fg: (st.form.vtype || 'reel') === k ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ form: { ...st.form, vtype: k } }) })),
showMeetTime: st.form.kind === 'Plan' && Number(st.form.meetDow) >= 0,
showQty: ['Reels', 'Comercial', 'Edición'].indexOf(st.form.kind) >= 0,
showHora: ['Boda', 'Evento'].indexOf(st.form.kind) >= 0,
dateLabel: st.form.kind === 'Plan' ? 'Primer día de grabación y cobro' : ['Boda', 'Evento'].indexOf(st.form.kind) >= 0 ? 'Fecha del evento' : 'Fecha de entrega (opcional)',
detLabel: st.form.kind === 'Boda' ? 'Lugar (opcional)' : st.form.kind === 'Evento' ? 'Lugar o detalle del evento (opcional)' : 'Detalle (opcional)',
totalLabel: st.form.kind === 'Plan' ? 'Precio por ciclo (Bs)' : 'Total acordado (Bs)',
freqOpts: [[7, 'Cada semana'], [14, 'Cada 2 semanas'], [28, 'Cada 4 semanas']].map(([d, l]) => ({ label: l, on: Number(st.form.freq) === d, bg: Number(st.form.freq) === d ? 'var(--accent)' : 'var(--card2)', fg: Number(st.form.freq) === d ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ form: { ...st.form, freq: d } }) })),
setOtro: (e) => this.setState({ form: { ...st.form, otro: e.target.value } }),
setQty: (e) => this.setState({ form: { ...st.form, qty: e.target.value } }),
setHora: (e) => this.setState({ form: { ...st.form, hora: e.target.value } }),
pcOpts: [2, 4, 6, 8, 10, 12].map((n) => ({ label: String(n), on: Number(st.form.perCycle) === n, bg: Number(st.form.perCycle) === n ? 'var(--accent)' : 'var(--card2)', fg: Number(st.form.perCycle) === n ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ form: { ...st.form, perCycle: n } }) })),
dowOpts: [['Sin reunión', -1], ['L', 1], ['M', 2], ['X', 3], ['J', 4], ['V', 5], ['S', 6], ['D', 0]].map(([l, d]) => ({ label: l, on: Number(st.form.meetDow) === d, bg: Number(st.form.meetDow) === d ? 'var(--accent)' : 'var(--card2)', fg: Number(st.form.meetDow) === d ? 'var(--onAccent)' : 'var(--text)', pick: () => this.setState({ form: { ...st.form, meetDow: d } }) })),
goNew: () => this.setState({ view: 'new', form: { name: '', phone: '', kind: 'Boda', total: '3600', event: '', det: '', paid: '', note: '', perCycle: 6, meetDow: -1, meetTime: '18:00', vtype: 'reel', freq: 14, qty: '1', otro: '', hora: '' } }),
setPay: (e) => this.setState({ payInput: e.target.value }),
planView, planOpts, ...menuVals, ...addVals, listSub: st.clients.length ? (st.clients.some((c) => c.id <= 5 && !c.accNew) ? 'Datos de ejemplo' : st.clients.length + ' en total') : 'Sin clientes todavía',
copyLabel: st.copied ? 'Copiado' : 'Copiar cobro pendiente',
copyCharge: () => {
const L = [chargeText(s0)];
const txt = L.join('\n');
try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt); else { const t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); } } catch (e) {}
this.kmSfx('done'); this.setState({ copied: true, lastCopy: txt }); setTimeout(() => this.setState({ copied: false }), 2000);
},
setPlanStart: (e) => { const v = e.target.value; if (!v) return; this.kmSfx('tap'); upd(s0.id, (c) => ({ ...c, due: dow(v) + ' ' + Number(v.split('-')[2]), saldo: { text: 'Cobro el ' + dow(v) + ' ' + sh(v) + ', día de grabación', late: false }, plan: { ...c.plan, start: v, anchor: c.plan.anchor || c.plan.start } })); },
planMode: () => { this.kmSfx('tap'); upd(s0.id, (c) => ({ ...c, plan: { ...c.plan, creditMode: c.plan.creditMode === 'free' ? 'diff' : 'free' } })); },
closeCycle: () => {
if (!pl) return;
this.kmSfx('goal');
const missing = pl.weeks.reduce((a, w) => a + w.filter((v) => v.name.trim() && !v.done).length, 0);
const nextStart = addD(pl.anchor || pl.start, pl.days || 14);
this.setState({ openW: undefined, planTab: 'sem' });
upd(s0.id, (c) => ({ ...c, total: c.plan.price, paid: 0, payments: [], saldo: { text: 'Cobro el ' + dow(nextStart) + ' ' + sh(nextStart) + ', día de grabación', late: false }, due: dow(nextStart) + ' ' + Number(nextStart.split('-')[2]), status: 'Ciclo ' + (c.plan.cycle + 1), plan: { ...c.plan, creditBs: c.plan.creditBs + missing * (c.plan.price / c.plan.perCycle), start: nextStart, anchor: nextStart, cycle: c.plan.cycle + 1, weeks: c.plan.weeks.map((w) => w.map(() => ({ name: '', due: '', done: false }))), extras: [], history: [{ n: c.plan.cycle, range: sh(addD(c.plan.start, -13)) + ' al ' + sh(c.plan.start), amount: c.total, paid: c.paid >= c.total }, ...c.plan.history] } }));
},
addPayment: () => {
const v = Math.max(0, Number(st.payInput) || 0);
if (v === 0) return;
this.kmSfx('coin');
upd(s0.id, (c) => ({ ...c, paid: Math.min(c.total, c.paid + v), payments: [...(c.payments || []), { label: c.paid === 0 ? 'Anticipo' : (c.paid + v >= c.total ? 'Saldo' : 'Pago'), amount: v, when: 'hoy' }] }));
this.setState({ payInput: '' });
},
setNotes: (e) => upd(s0.id, (c) => ({ ...c, notes: e.target.value })),
setName: (e) => this.setState({ form: { ...st.form, name: e.target.value } }),
setPhone: (e) => this.setState({ form: { ...st.form, phone: e.target.value } }),
setTotal: (e) => this.setState({ form: { ...st.form, total: e.target.value } }),
setMeetTime: (e) => this.setState({ form: { ...st.form, meetTime: e.target.value } }),
setEvent: (e) => this.setState({ form: { ...st.form, event: e.target.value } }),
setDet: (e) => this.setState({ form: { ...st.form, det: e.target.value } }),
setPaid0: (e) => this.setState({ form: { ...st.form, paid: e.target.value } }),
setNote0: (e) => this.setState({ form: { ...st.form, note: e.target.value } }),
saveClient: () => {
this.kmSfx('done');
const f = st.form;
const name = f.name.trim() || 'Cliente nuevo';
const total = Math.max(0, Number(f.total) || 0);
const paid0 = Math.min(total || Infinity, Math.max(0, Number(f.paid) || 0));
const MESN = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const nw = new Date();
const evLabel = f.event ? (dow(f.event) + ' ' + sh(f.event)) : '';
const detail = (f.kind === 'Otro' ? (f.otro.trim() || 'Otro') : f.kind === 'Comercial' ? 'Video comercial' : f.kind) + (f.event ? ' · ' + evLabel : '') + (f.det.trim() ? ' · ' + f.det.trim() : '') + (!f.event && !f.det.trim() ? ' · sin videos aún' : '');
const isP = f.kind === 'Plan';
const kindName = f.kind === 'Otro' ? (f.otro.trim() || 'Otro') : f.kind;
const hh = f.hora ? ' a las ' + f.hora : '';
const c = { id: st.nextId, name, kind: kindName, phone: f.phone.trim(), eventTime: f.hora || '', event: f.event || '', detail, status: paid0 > 0 ? 'Anticipo' : 'Sin anticipo', stage: paid0 > 0 ? 'Rodaje' : 'Cotización', progress: 0, due: f.event ? evLabel : 'por definir', total, paid: paid0, quote: { no: '—', status: 'aceptada', daysAgo: 0 }, saldo: { text: f.event ? 'Hasta el ' + sh(f.event) + ', día del evento' : 'Sin fecha límite', late: false }, payments: paid0 > 0 ? [{ label: 'Anticipo', amount: paid0, when: nw.getDate() + ' de ' + MESN[nw.getMonth()] }] : [], notes: f.note.trim(), videos: [] };
if (isP) {
const pc = Math.max(1, Number(f.perCycle) || 6); const days = Number(f.freq) || 14; const nW = Math.max(1, Math.round(days / 7)); const per = Math.ceil(pc / nW);
const pstart = f.event || (() => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); })();
const slot = () => ({ name: '', due: '', done: false });
Object.assign(c, { event: '', plan: { perCycle: pc, price: total, days, vtype: f.vtype || 'reel', start: pstart, anchor: pstart, cycle: 1, meet: Number(f.meetDow) >= 0 ? { dow: Number(f.meetDow), time: f.meetTime || '18:00' } : null, weeks: Array.from({ length: nW }, () => Array.from({ length: per }, slot)), creditBs: 0, creditMode: 'diff', extras: [], history: [] }, detail: 'Paquete ' + freqText(days) + ' · ' + pc + ' videos por ciclo' + (f.det.trim() ? ' · ' + f.det.trim() : ''), status: 'Ciclo 1', stage: 'Editando', due: dow(pstart) + ' ' + sh(pstart), saldo: { text: 'Primer cobro el ' + dow(pstart) + ' ' + sh(pstart) + ', día de grabación', late: false } });
}
const Dd = window.KM_DATA;
if (Dd && ['Reels', 'Comercial', 'Edición'].indexOf(f.kind) >= 0) { const q = Math.min(30, Math.max(1, Number(f.qty) || 1)); const ty = f.kind === 'Reels' ? 'reel' : f.kind === 'Edición' ? 'edicion' : 'reel'; const dd0 = f.event || (() => { const d = new Date(); d.setDate(d.getDate() + 7); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); })(); const base = f.kind === 'Reels' ? 'Reel' : f.kind === 'Comercial' ? 'Comercial' : 'Edición'; Dd.saveItems(Dd.items().concat(Array.from({ length: q }, (_, i) => ({ id: 'c-' + Date.now() + '-' + i, name: q > 1 ? base + ' ' + (i + 1) + ' de ' + q : base, client: name, type: ty, due: dd0, done: {}, times: {}, needsBrand: false })))); c.detail = c.detail.replace(' · sin videos aún', '') + ' · ' + q + (q === 1 ? ' video' : ' videos'); }
this.setState({ clients: [c, ...st.clients], nextId: st.nextId + 1, view: 'detail', selId: c.id, filter: 'Todos', payInput: '', planTab: 'sem', openW: undefined, _addV: (isP || ['Reels', 'Comercial', 'Edición'].indexOf(f.kind) >= 0) ? null : { name: '', type: f.kind === 'Reels' ? 'reel' : f.kind === 'Edición' ? 'edicion' : 'highlight', due: '' } });
}
};
}
}

return Component;})()};
window.KM_SCREENS["Tiempos"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:1450px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"height:1366px;overflow-y:auto;padding:56px 20px 40px 20px;box-sizing:border-box;display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<a href=\"Proyecto.dc.html\" aria-label=\"Volver a Entregas\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</a>\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Tiempos</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{subLabel}}</span>\n</div>\n</div>\n\n<div role=\"tablist\" style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;background:var(--card);border-radius:var(--r2);padding:4px\">\n<sc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\">\n<button role=\"tab\" onClick=\"{{t.pick}}\" aria-selected=\"{{t.active}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.name}}</button>\n</sc-for>\n</div>\n\n<sc-if value=\"{{tabRes}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:14px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">\u00daltimos 7 d\u00edas</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{rangeLabel}}</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;align-items:end;height:136px\">\n<sc-for list=\"{{week}}\" as=\"d\" hint-placeholder-count=\"7\">\n<div style=\"display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:136px\">\n<span style=\"font-size:11px;font-weight:600;color:var(--muted)\">{{d.text}}</span>\n<div class=\"km-bar\" style=\"width:100%;height:{{d.h}}px;border-radius:var(--r1) var(--r1) 2px 2px;background:{{d.bg}}\"></div>\n<span style=\"font-size:12px;font-weight:600\">{{d.day}}</span>\n</div>\n</sc-for>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Horas</span><span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{weekTotal}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Etapas cerradas</span><span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{stagesWeek}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Racha</span><span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{streakText}}</span></div>\n</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:14px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Mejor horario</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{hourNote}}</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;align-items:end;height:124px\">\n<sc-for list=\"{{hours}}\" as=\"h\" hint-placeholder-count=\"6\">\n<div style=\"display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:124px\">\n<span style=\"font-size:11px;font-weight:600;color:var(--muted)\">{{h.count}}</span>\n<div class=\"km-bar\" style=\"width:100%;height:{{h.h}}px;border-radius:var(--r1) var(--r1) 2px 2px;background:{{h.bg}}\"></div>\n<span style=\"font-size:11px;font-weight:600\">{{h.label}}</span>\n</div>\n</sc-for>\n</div>\n<span style=\"font-size:12px;color:var(--muted)\">Etapas cerradas por franja horaria, \u00faltimos 30 d\u00edas.</span>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{tabDin}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Bs por hora real</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">Lo cobrado dividido entre las horas del cron\u00f3metro.</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;background:var(--field);border-radius:var(--r1);padding:4px\">\n<sc-for list=\"{{rateTabs}}\" as=\"t\" hint-placeholder-count=\"3\">\n<button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;border-radius:var(--r1);font-size:13px;font-weight:600;background:{{t.bg}};color:{{t.fg}}\">{{t.label}}</button>\n</sc-for>\n</div>\n<button onClick=\"{{toggleNet}}\" role=\"switch\" aria-checked=\"{{netOn}}\" style=\"display:flex;align-items:center;gap:12px;min-height:44px;text-align:left\">\n<span style=\"flex:1;min-width:0;display:flex;flex-direction:column;gap:2px\"><span style=\"font-size:14px;font-weight:500\">Descontar gastos</span><span style=\"font-size:12px;color:var(--muted)\">{{netNote}}</span></span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{netTrack}};flex:none\"><span style=\"position:absolute;top:3px;left:{{netKnob}}px;width:20px;height:20px;border-radius:999px;background:{{netKnobBg}}\"></span></span>\n</button>\n<sc-for list=\"{{rates}}\" as=\"r\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;flex-direction:column;gap:6px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\">\n<span style=\"font-size:14px;font-weight:600;min-width:0\">{{r.name}}</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:16px;flex:none\">Bs {{r.rate}}/h</span>\n</div>\n<div style=\"height:8px;border-radius:999px;background:var(--track)\"><div class=\"km-barx\" style=\"width:{{r.w}}%;height:8px;border-radius:999px;background:var(--accent)\"></div></div>\n<span style=\"font-size:12px;color:var(--muted)\">{{r.sub}}</span>\n</div>\n</sc-for>\n<span style=\"font-size:13px;line-height:1.4\">{{rateNote}}</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;justify-content:space-between;align-items:baseline;gap:8px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Gastos del trabajo</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px;color:var(--warn)\">Bs {{exTotal}}</span>\n</div>\n<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Cobrado</span><span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Bs {{paidTotal}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Gastos</span><span style=\"font-family:var(--display);font-weight:700;font-size:16px\">Bs {{exTotal}}</span></div>\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\"><span style=\"font-size:12px;color:var(--muted)\">Neto</span><span style=\"font-family:var(--display);font-weight:700;font-size:16px;color:var(--accentText)\">Bs {{netTotal}}</span></div>\n</div>\n<span style=\"font-size:13px;line-height:1.4\">{{exNote}}</span>\n<div style=\"display:flex;flex-direction:column\">\n<sc-for list=\"{{expenses}}\" as=\"e\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;align-items:center;gap:8px;border-top:1px solid var(--line);padding:8px 0\">\n<div style=\"display:flex;flex-direction:column;gap:1px;flex:1;min-width:0\"><span style=\"font-size:14px;font-weight:600\">{{e.concept}}</span><span style=\"font-size:12px;color:var(--muted)\">{{e.to}}</span></div>\n<span style=\"font-size:14px;font-weight:600;font-variant-numeric:tabular-nums\">Bs {{e.amount}}</span>\n<button onClick=\"{{e.remove}}\" aria-label=\"Quitar gasto\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></button>\n</div>\n</sc-for>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:8px;border-top:1px solid var(--line);padding-top:12px\">\n<span style=\"font-size:14px;font-weight:600\">Agregar gasto</span>\n<div style=\"display:flex;gap:8px\">\n<input type=\"text\" value=\"{{exConcept}}\" onChange=\"{{setConcept}}\" placeholder=\"Disco, vi\u00e1ticos, suscripci\u00f3n\" aria-label=\"Concepto del gasto\" style=\"flex:1;min-width:0;box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n<input type=\"number\" inputmode=\"numeric\" value=\"{{exAmount}}\" onChange=\"{{setAmount}}\" placeholder=\"Bs\" aria-label=\"Monto en Bs\" style=\"width:84px;box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 12px;font-size:15px\"/>\n</div>\n<span style=\"font-size:12px;color:var(--muted)\">Aplica a</span>\n<div class=\"chips\" style=\"display:flex;gap:8px;overflow-x:auto;scrollbar-width:none\">\n<sc-for list=\"{{exTargets}}\" as=\"t\" hint-placeholder-count=\"4\">\n<button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"display:flex;align-items:center;justify-content:center;flex:none;height:44px;padding:0 14px;border-radius:999px;font-size:14px;font-weight:600;background:{{t.bg}};color:{{t.fg}};border:2px solid {{t.border}};box-sizing:border-box\">{{t.label}}</button>\n</sc-for>\n</div>\n<button onClick=\"{{addExpense}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--accent);color:var(--onAccent);font-size:14px;font-weight:600\">Agregar gasto</button>\n</div>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{tabEta}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:18px\">\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">Promedio por etapa</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{avgSub}}</span>\n</div>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\">\n<sc-for list=\"{{typeTabs}}\" as=\"t\" hint-placeholder-count=\"3\">\n<button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 16px;border-radius:999px;box-sizing:border-box;font-size:14px;font-weight:600;border:2px solid {{t.border}};background:{{t.bg}};color:{{t.fg}}\">{{t.label}}</button>\n</sc-for>\n</div>\n<sc-for list=\"{{avgRows}}\" as=\"a\" hint-placeholder-count=\"10\">\n<div style=\"display:flex;align-items:center;gap:10px;min-height:28px\">\n<span style=\"width:118px;flex:none;font-size:13px;font-weight:{{a.weight}}\">{{a.name}}</span>\n<div style=\"flex:1;height:8px;border-radius:999px;background:var(--track)\"><div class=\"km-barx\" style=\"width:{{a.w}}%;height:8px;border-radius:999px;background:{{a.bg}}\"></div></div>\n<span style=\"width:76px;flex:none;text-align:right;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums\">{{a.time}}</span>\n</div>\n</sc-for>\n<div style=\"display:flex;flex-direction:column;gap:2px;background:var(--card2);border-radius:var(--r1);padding:10px 12px\">\n<span style=\"font-size:13px;font-weight:600\">{{avgTotal}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{avgSlow}}</span>\n</div>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:12px;background:var(--card);border-radius:var(--r3);padding:16px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:18px\">La etapa que m\u00e1s te frena</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">Tiempo total por etapa, sumando todos tus videos.</span>\n</div>\n<sc-for list=\"{{rank}}\" as=\"k\" hint-placeholder-count=\"5\">\n<div style=\"display:flex;align-items:center;gap:12px\">\n<span style=\"display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:999px;flex:none;font-size:13px;font-weight:700;background:{{k.bg}};color:{{k.fg}}\">{{k.n}}</span>\n<span style=\"flex:1;min-width:0;font-size:14px;font-weight:600\">{{k.name}}</span>\n<span style=\"font-size:13px;color:var(--muted);flex:none\">{{k.pct}}%</span>\n<span style=\"width:72px;text-align:right;font-size:13px;font-weight:600;flex:none\">{{k.time}}</span>\n</div>\n</sc-for>\n</div>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.45\">Los promedios son confiables desde 4 o 5 videos del mismo tipo. El cron\u00f3metro se pausa solo si dejas la app sin tocar, para no inflar las horas.</span>\n</div>\n</sc-if>\n\n</div>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--accentText);font-size:11px;font-weight:600\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = { tab: 'res', by: 'servicio', type: 'reel', net: true, nextEx: 10, exForm: { concept: '', amount: '', to: 'General' }, expenses: (window.KM_DATA && !window.KM_DATA.hasSample()) ? [] : [{ id: 1, concept: 'Viáticos y traslado', amount: 360, to: 'Paola y René' }, { id: 2, concept: 'Disco duro 2 TB', amount: 520, to: 'General' }, { id: 3, concept: 'Música con licencia', amount: 180, to: 'General' }, { id: 4, concept: 'Pasajes a rodaje', amount: 60, to: 'Cafetería Aroma' }] };
}
componentDidMount() { this.kmStart(); }
componentWillUnmount() { this.kmStop(); }
kmRender() {
const st = this.state;
const group = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const dur = (m) => { m = Math.round(m); const h = Math.floor(m / 60); const r = m % 60; return h ? h + ' h' + (r ? ' ' + r + ' min' : '') : r + ' min'; };
const hrs = (h) => String(Math.round(h * 10) / 10).replace('.', ',') + ' h';

const D = window.KM_DATA;
const L = D ? D.log() : {};
const DI = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
const weekData = [];
for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); weekData.push([DI[d.getDay()], D ? ((L[D.iso(d)] || { secs: 0 }).secs) / 3600 : 0]); }
const wMax = Math.max(...weekData.map((d) => d[1])) || 1;
const week = weekData.map(([day, h]) => ({ day, text: h ? hrs(h) : '0', h: Math.max(4, Math.round((h / wMax) * 88)), bg: h > 0 && h === wMax ? 'var(--accent)' : (h ? 'var(--line)' : 'var(--track)') }));
const weekTotal = hrs(weekData.reduce((a, d) => a + d[1], 0));

const cls = D ? D.clients() : [];
const allIts = D ? D.items() : [];
const cnt = {}; allIts.forEach((x) => { cnt[x.client] = (cnt[x.client] || 0) + 1; });
const jobs = allIts.filter((x) => Object.keys(x.times || {}).some((k) => x.times[k] > 0)).map((x) => {
const c = cls.find((k) => k.name === x.client);
const secs = Object.keys(x.times).reduce((a, k) => a + (x.times[k] || 0), 0);
let paid = 0; if (c) paid = c.plan ? (c.plan.price || 0) / Math.max(1, c.plan.perCycle || 1) : (c.total || 0) / Math.max(1, cnt[x.client] || 1);
return { name: x.name, client: x.client, service: c ? c.kind : 'Edición', paid: Math.round(paid), h: Math.max(0.01, secs / 3600) };
});
const keyOf = { entrega: (j) => j.name + ' · ' + j.client, cliente: (j) => j.client, servicio: (j) => j.service };
const jobsC = jobs.map((j) => ({ ...j, cost: 0 }));
st.expenses.forEach((e) => {
const targets = e.to === 'General' ? jobsC : jobsC.filter((j) => j.client === e.to);
const th = targets.reduce((a, j) => a + j.h, 0);
if (th > 0) targets.forEach((j) => { j.cost += e.amount * j.h / th; });
});
const acc = {};
jobsC.forEach((j) => { const k = keyOf[st.by](j); acc[k] = acc[k] || { name: k, paid: 0, h: 0, n: 0, cost: 0 }; acc[k].paid += j.paid; acc[k].h += j.h; acc[k].n += 1; acc[k].cost += j.cost; });
const netOf = (x) => x.paid - (st.net ? x.cost : 0);
const list = Object.keys(acc).map((k) => ({ ...acc[k], rate: netOf(acc[k]) / acc[k].h })).sort((a, b) => b.rate - a.rate);
const rMax = Math.max((list[0] || { rate: 0 }).rate, 1);
const rates = list.map((r) => ({ name: r.name, rate: group(r.rate), w: Math.max(2, Math.round((Math.max(r.rate, 0) / rMax) * 100)), sub: 'Bs ' + group(r.paid) + ' cobrados' + (st.net && r.cost > 0 ? ' · gastos Bs ' + group(r.cost) : '') + ' · ' + hrs(r.h) + (st.by === 'entrega' ? '' : ' · ' + r.n + (r.n === 1 ? ' entrega' : ' entregas')) }));
const best = list[0] || { name: '', rate: 0 }; const worst = list[list.length - 1] || { name: '', rate: 0 };
const rateNote = !list.length ? 'Todavía no hay entregas con tiempo registrado. Usa el cronómetro en Hoy o Entregas.' : 'Rinde más: ' + best.name + ' (Bs ' + group(best.rate) + '/h). Rinde menos: ' + worst.name + ' (Bs ' + group(worst.rate) + '/h).';
const paidTotal = jobs.reduce((a, j) => a + j.paid, 0);
const hTotal = jobs.reduce((a, j) => a + j.h, 0) || 0;
const exTotalN = st.expenses.reduce((a, e) => a + e.amount, 0);
const netTotalN = paidTotal - exTotalN;
const expenses = st.expenses.map((e) => ({ concept: e.concept, to: e.to === 'General' ? 'General, repartido entre todas las entregas' : 'Solo ' + e.to, amount: group(e.amount), remove: () => { this.kmSfx('tap'); this.setState({ expenses: st.expenses.filter((x) => x.id !== e.id) }); } }));
const clientsList = Array.from(new Set(cls.map((c) => c.name)));
const exTargets = ['General', ...clientsList].map((n) => { const on = st.exForm.to === n; return { label: n, on, bg: on ? 'var(--accent)' : 'transparent', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'var(--line)', pick: () => { this.kmSfx('tap'); this.setState({ exForm: { ...st.exForm, to: n } }); } }; });
const tabs = [['res','Resumen'],['din','Dinero'],['eta','Etapas']].map(([id, name]) => ({ name, active: st.tab === id, bg: st.tab === id ? 'var(--accent)' : 'transparent', fg: st.tab === id ? 'var(--onAccent)' : 'var(--text)', pick: () => { this.kmSfx('tap'); this.setState({ tab: id }); } }));
const rateTabs = [['servicio', 'Servicio'], ['cliente', 'Cliente'], ['entrega', 'Entrega']].map(([id, label]) => ({ label, on: st.by === id, bg: st.by === id ? 'var(--accent)' : 'transparent', fg: st.by === id ? 'var(--onAccent)' : 'var(--text)', pick: () => { this.kmSfx('tap'); this.setState({ by: id }); } }));

const AVG = {};
const TY = D ? D.types() : {};
Object.keys(TY).forEach((k) => {
const its2 = allIts.filter((x) => x.type === k && Object.keys(x.times || {}).some((i) => x.times[i] > 0));
if (!its2.length) return;
const rows = TY[k].stages.map((nm, i) => { const vs = its2.map((x) => (x.times || {})[i] || 0).filter((v) => v > 0); return [nm, vs.length ? vs.reduce((a, v) => a + v, 0) / vs.length / 60 : 0]; }).filter((r) => r[1] > 0);
if (rows.length) AVG[k] = { label: TY[k].short, n: its2.length, rows };
});
const typeSel = AVG[st.type] ? st.type : Object.keys(AVG)[0];
const cur = AVG[typeSel] || { label: 'Video', n: 0, rows: [] };
const aMax = Math.max(...cur.rows.map((r) => r[1]), 0.0001);
const aSum = cur.rows.reduce((a, r) => a + r[1], 0) || 1;
const slow = cur.rows.length ? cur.rows.reduce((a, r) => (r[1] > a[1] ? r : a)) : ['', 0];
const avgRows = cur.rows.map(([name, m]) => ({ name, time: dur(m), w: Math.round((m / aMax) * 100), bg: m === aMax ? 'var(--warnFill)' : 'var(--accent)', weight: m === aMax ? 700 : 500 }));
const typeTabs = Object.keys(AVG).map((k) => ({ label: AVG[k].label, on: typeSel === k, bg: typeSel === k ? 'var(--accent)' : 'transparent', fg: typeSel === k ? 'var(--onAccent)' : 'var(--text)', border: typeSel === k ? 'var(--accent)' : 'var(--line)', pick: () => { this.kmSfx('tap'); this.setState({ type: k }); } }));

const tot = {};
Object.keys(AVG).forEach((k) => AVG[k].rows.forEach(([name, m]) => { const key = name === 'Selección de material' ? 'Selección' : name.replace('Importar y organizar', 'Importar'); tot[key] = (tot[key] || 0) + m * AVG[k].n; }));
const all = Object.keys(tot).map((k) => ({ name: k, m: tot[k] })).sort((a, b) => b.m - a.m);
const allSum = all.reduce((a, r) => a + r.m, 0) || 1;
const rank = all.slice(0, 5).map((r, i) => ({ n: i + 1, name: r.name, time: dur(r.m), pct: Math.round((r.m / allSum) * 100), bg: i === 0 ? 'var(--warnFill)' : 'var(--card2)', fg: i === 0 ? 'var(--onAccent)' : 'var(--text)' }));

const hb = [0, 0, 0, 0, 0, 0]; Object.keys(L).forEach((k) => { (L[k].hrs || []).forEach((c, i) => { hb[i] += c; }); });
const hourData = ['6–9', '9–12', '12–15', '15–18', '18–21', '21–24'].map((l, i) => [l, hb[i]]);
const hSum = hb.reduce((a, c) => a + c, 0);
const hMax = Math.max(...hourData.map((d) => d[1])) || 1;
const top = hourData.find((d) => d[1] === hMax);
const hours = hourData.map(([label, c]) => ({ label, count: c, h: Math.max(4, Math.round((c / hMax) * 80)), bg: c > 0 && c === hMax ? 'var(--accent)' : 'var(--line)' }));

const d0 = new Date(); d0.setDate(d0.getDate() - 6); const d1 = new Date();
const MES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const rangeLabel = d0.getMonth() === d1.getMonth() ? d0.getDate() + ' al ' + d1.getDate() + ' de ' + MES[d1.getMonth()] : d0.getDate() + ' de ' + MES[d0.getMonth()] + ' al ' + d1.getDate() + ' de ' + MES[d1.getMonth()];
let stagesWeek = 0; for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); stagesWeek += D ? (L[D.iso(d)] || { n: 0 }).n : 0; }
const stk = D ? D.streak() : 0;
return {
rangeLabel, stagesWeek, streakText: stk + (stk === 1 ? ' día' : ' días'), subLabel: 'Sale de tus cronómetros' + (D && D.hasSample() ? ' · datos de ejemplo' : ''),
week, weekTotal, rates, rateTabs, rateNote, tabs, tabRes: st.tab === 'res', tabDin: st.tab === 'din', tabEta: st.tab === 'eta',
expenses, exTargets, exTotal: group(exTotalN), paidTotal: group(paidTotal), netTotal: group(netTotalN),
exNote: hTotal > 0 ? 'Cobras Bs ' + group(paidTotal / hTotal) + ' por hora. Descontando gastos, ganas Bs ' + group(netTotalN / hTotal) + ' por hora.' : 'Sin horas registradas todavía.',
netOn: st.net, netTrack: st.net ? 'var(--accent)' : 'var(--track)', netKnob: st.net ? 23 : 3, netKnobBg: st.net ? 'var(--onAccent)' : 'var(--muted)',
netNote: st.net ? 'Cada Bs por hora ya resta sus gastos.' : 'Muestra solo lo cobrado, sin restar gastos.',
toggleNet: () => { this.kmSfx('tap'); this.setState({ net: !st.net }); },
exConcept: st.exForm.concept, exAmount: st.exForm.amount,
setConcept: (e) => this.setState({ exForm: { ...st.exForm, concept: e.target.value } }),
setAmount: (e) => this.setState({ exForm: { ...st.exForm, amount: e.target.value } }),
addExpense: () => { const amt = Math.max(0, Number(st.exForm.amount) || 0); if (amt === 0) return; this.kmSfx('coin'); this.setState({ expenses: [...st.expenses, { id: st.nextEx, concept: st.exForm.concept.trim() || 'Gasto', amount: amt, to: st.exForm.to }], nextEx: st.nextEx + 1, exForm: { ...st.exForm, concept: '', amount: '' } }); }, typeTabs, avgRows, rank, hours,
avgSub: cur.n === 0 ? 'Sin videos con tiempo todavía.' : cur.n + ' videos medidos' + (cur.n < 4 ? '. Pocos datos todavía.' : '.'),
avgTotal: cur.n === 0 ? 'Cuando cierres etapas con el cronómetro, aquí ves cuánto te toma cada tipo de video.' : 'Un ' + cur.label.toLowerCase() + ' te toma ' + dur(aSum) + ' en promedio.',
avgSlow: cur.n === 0 ? '' : 'La más lenta: ' + slow[0] + ', con ' + Math.round((slow[1] / aSum) * 100) + '% del tiempo.',
hourNote: hSum === 0 ? 'Todavía no hay etapas cerradas con hora registrada.' : 'Cierras más etapas de ' + top[0].replace('–', ' a ') + ' h. Deja el corte y el color para esa franja.'
};
}
}

return Component;})()};
window.KM_SCREENS["Ajustes"]={tpl:"<div class=\"kmroot\" data-theme=\"{{themeId}}\" data-motion=\"{{motion}}\" style=\"position:relative;width:390px;height:2200px;box-sizing:border-box;background:var(--bg);color:var(--text);font-family:var(--body);overflow:hidden\">\n<div style=\"padding:56px 20px 0 20px;display:flex;flex-direction:column;gap:18px\">\n\n<sc-if value=\"{{isHome}}\" hint-placeholder-val=\"{{ true }}\">\n<div class=\"km-in\" style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:28px;letter-spacing:-0.5px\">Ajustes</span>\n<span style=\"font-size:13px;color:var(--muted)\">Toca una secci\u00f3n para cambiarla</span>\n</div>\n<sc-for list=\"{{groups}}\" as=\"g\" hint-placeholder-count=\"3\">\n<div style=\"display:flex;flex-direction:column;gap:8px\">\n<span style=\"font-size:12px;font-weight:600;letter-spacing:0.6px;text-transform:uppercase;color:var(--muted)\">{{g.title}}</span>\n<div style=\"background:var(--card);border-radius:var(--r2);overflow:hidden\">\n<sc-for list=\"{{g.items}}\" as=\"i\" hint-placeholder-count=\"2\">\n<button onClick=\"{{i.open}}\" style=\"display:flex;align-items:center;gap:12px;width:100%;min-height:64px;padding:8px 16px;box-sizing:border-box;border-top:{{i.border}}\">\n<span style=\"flex:1;min-width:0;display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:15px;font-weight:600\">{{i.label}}</span>\n<span style=\"font-size:13px;color:var(--muted);line-height:1.35\">{{i.value}}</span>\n</span>\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n</button>\n</sc-for>\n</div>\n</div>\n</sc-for>\n</sc-if>\n\n<sc-if value=\"{{isSub}}\" hint-placeholder-val=\"{{ false }}\">\n<div class=\"km-in\" style=\"display:flex;align-items:center;gap:12px\">\n<button onClick=\"{{goHome}}\" aria-label=\"Volver a Ajustes\" style=\"display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--r2);background:var(--card2);flex:none\">\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n</button>\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-family:var(--display);font-weight:700;font-size:24px;letter-spacing:-0.3px;line-height:1.1\">{{subTitle}}</span>\n<span style=\"font-size:13px;color:var(--muted)\">{{subHint}}</span>\n</div>\n</div>\n\n<sc-if value=\"{{isTemas}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;flex-direction:column;gap:12px\">\n<sc-for list=\"{{themes}}\" as=\"t\" hint-placeholder-count=\"4\">\n<button onClick=\"{{t.pick}}\" aria-pressed=\"{{t.active}}\" aria-label=\"Tema {{t.name}}\" style=\"display:flex;align-items:stretch;gap:12px;width:100%;box-sizing:border-box;padding:14px;border-radius:var(--r3);background:{{t.bg}};border:3px solid {{t.border}}\">\n<div style=\"display:flex;flex-direction:column;justify-content:space-between;gap:8px;flex:1;min-width:0\">\n<div style=\"display:flex;flex-direction:column;gap:4px\">\n<span style=\"font-family:{{t.display}};font-weight:700;font-size:22px;color:{{t.text}};line-height:1.1\">{{t.name}}</span>\n<span style=\"font-size:13px;color:{{t.muted}};line-height:1.35\">{{t.desc}}</span>\n</div>\n<span style=\"font-size:12px;font-weight:600;color:{{t.activeColor}}\">{{t.activeText}}</span>\n</div>\n<div style=\"display:flex;flex-direction:column;gap:8px;width:152px;flex:none;background:{{t.card}};border-radius:{{t.r2}};padding:12px\">\n<span style=\"font-family:{{t.display}};font-weight:700;font-size:14px;color:{{t.text}};line-height:1.2\">Highlight \u00b7 Ana y Luis</span>\n<div style=\"height:6px;border-radius:999px;background:{{t.track}}\"><div style=\"width:62%;height:6px;border-radius:999px;background:{{t.accent}}\"></div></div>\n<span style=\"align-self:flex-start;font-size:11px;font-weight:600;border-radius:999px;padding:5px 10px;background:{{t.accent}};color:{{t.onAccent}}\">Etapa lista</span>\n<span style=\"font-size:11px;color:{{t.muted}}\">Entrega en 3 d\u00edas</span>\n</div>\n</button>\n</sc-for>\n</div>\n</sc-if>\n\n<sc-for list=\"{{rows}}\" as=\"r\" hint-placeholder-count=\"4\">\n<div style=\"display:flex;flex-direction:column;gap:10px;background:var(--card);border-radius:var(--r2);padding:14px 16px\">\n<sc-if value=\"{{r.isToggle}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{r.flip}}\" role=\"switch\" aria-checked=\"{{r.on}}\" style=\"display:flex;align-items:center;gap:12px;min-height:44px\">\n<span style=\"flex:1;min-width:0;font-size:15px;font-weight:500\">{{r.label}}</span>\n<span style=\"position:relative;width:46px;height:26px;border-radius:999px;background:{{r.track}};flex:none\"><span style=\"position:absolute;top:3px;left:{{r.knob}}px;width:20px;height:20px;border-radius:999px;background:{{r.knobBg}};transition:left 0.15s ease\"></span></span>\n</button>\n</sc-if>\n<sc-if value=\"{{r.isStep}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:flex;align-items:center;justify-content:space-between;gap:8px\">\n<div style=\"display:flex;flex-direction:column;gap:2px\">\n<span style=\"font-size:15px;font-weight:500\">{{r.label}}</span>\n<span style=\"font-family:var(--display);font-weight:700;font-size:20px\">{{r.valueText}}</span>\n</div>\n<div style=\"display:flex;gap:8px\">\n<button onClick=\"{{r.minus}}\" aria-label=\"Menos\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/></svg></button>\n<button onClick=\"{{r.plus}}\" aria-label=\"M\u00e1s\" style=\"display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:var(--r2);background:var(--card2)\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text)\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M12 5v14M5 12h14\"/></svg></button>\n</div>\n</div>\n</sc-if>\n<sc-if value=\"{{r.isChips}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:15px;font-weight:500\">{{r.label}}</span>\n<div style=\"display:flex;flex-wrap:wrap;gap:8px\">\n<sc-for list=\"{{r.chips}}\" as=\"c\" hint-placeholder-count=\"3\">\n<button onClick=\"{{c.pick}}\" aria-pressed=\"{{c.on}}\" style=\"display:flex;align-items:center;justify-content:center;height:44px;padding:0 16px;border-radius:999px;box-sizing:border-box;font-size:14px;font-weight:600;border:2px solid {{c.border}};background:{{c.bg}};color:{{c.fg}}\">{{c.label}}</button>\n</sc-for>\n</div>\n</sc-if>\n<sc-if value=\"{{r.isInput}}\" hint-placeholder-val=\"{{ false }}\">\n<label style=\"display:flex;flex-direction:column;gap:6px;font-size:15px;font-weight:500\">{{r.label}}\n<input type=\"{{r.inputType}}\" value=\"{{r.value}}\" onChange=\"{{r.setValue}}\" placeholder=\"{{r.placeholder}}\" style=\"box-sizing:border-box;height:48px;border-radius:var(--r1);border:1px solid var(--line);background:var(--field);color:var(--text);padding:0 14px;font-size:15px;font-family:var(--body)\"/>\n</label>\n</sc-if>\n<sc-if value=\"{{r.isButton}}\" hint-placeholder-val=\"{{ false }}\">\n<button onClick=\"{{r.press}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--card2);font-size:14px;font-weight:600;text-align:center\">{{r.label}}</button>\n<sc-if value=\"{{r.hasResult}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:13px;font-weight:600;color:var(--accentText)\">{{r.result}}</span>\n</sc-if>\n</sc-if>\n<sc-if value=\"{{r.hasNote}}\" hint-placeholder-val=\"{{ false }}\">\n<span style=\"font-size:13px;color:var(--muted);line-height:1.4\">{{r.note}}</span>\n</sc-if>\n</div>\n</sc-for>\n\n<sc-if value=\"{{isSonidos}}\" hint-placeholder-val=\"{{ false }}\">\n<div style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px\">\n<sc-for list=\"{{tests}}\" as=\"s\" hint-placeholder-count=\"6\">\n<button onClick=\"{{s.play}}\" style=\"display:flex;align-items:center;justify-content:center;height:48px;border-radius:var(--r1);background:var(--card);font-size:14px;font-weight:600;text-align:center\">{{s.label}}</button>\n</sc-for>\n</div>\n</sc-if>\n</sc-if>\n\n</div>\n\n<div style=\"position:absolute;left:0;bottom:0;width:390px;height:84px;box-sizing:border-box;background:var(--tab);border-top:1px solid var(--card2);display:flex;justify-content:space-around;align-items:flex-start;padding-top:8px\">\n<a href=\"Main.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z\"/></svg>Hoy</a>\n<a href=\"Proyecto.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8l-9-5-9 5v8l9 5 9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/></svg>Entregas</a>\n<a href=\"Cotizador.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2\"/></svg>Cotizar</a>\n<a href=\"Agenda.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>Agenda</a>\n<a href=\"Clientes.dc.html\" style=\"display:flex;flex-direction:column;align-items:center;gap:4px;min-width:64px;min-height:44px;color:var(--muted);font-size:11px;font-weight:500\">\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"8\" r=\"4\"/><path d=\"M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 4a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6\"/></svg>Clientes</a>\n</div>\n\n</div>",Comp:(function(){
class Component extends DCLogic {
kmId() {
const ok = ['noche', 'claro', 'estudio', 'boda', 'cine', 'neon', 'papel', 'atardecer'];
let id = this.state.kmTheme;
if (!ok.includes(id)) { try { id = localStorage.getItem('kmTheme'); } catch (e) { id = null; } }
if (!ok.includes(id)) id = this.props.theme;
return ok.includes(id) ? id : 'noche';
}
kmStart() {
this.kmPoll = setInterval(() => { if (this.kmId() !== this.kmSeen) this.forceUpdate(); }, 700);
}
kmStop() {
clearInterval(this.kmPoll);
}
kmSfx(k) {
try { if (localStorage.getItem('kmSfx') === 'off') return; } catch (e) {}
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.kmAc = this.kmAc || new AC();
const ac = this.kmAc;
if (ac.state === 'suspended') ac.resume();
let lv = 4; try { lv = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
if (!this.kmMaster || this.kmMasterAc !== ac) { const cp = ac.createDynamicsCompressor(); cp.connect(ac.destination); this.kmMaster = ac.createGain(); this.kmMaster.connect(cp); this.kmMasterAc = ac; }
this.kmMaster.gain.value = [0, 1, 2, 3, 4.5, 6][Math.min(5, Math.max(1, lv))];
const t0 = ac.currentTime;
const note = (f, at, dur, type, vol, f2) => {
const o = ac.createOscillator(); const g = ac.createGain();
o.type = type || 'sine';
o.frequency.setValueAtTime(f, t0 + at);
if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + at + dur);
g.gain.setValueAtTime(0.0001, t0 + at);
g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + at + 0.012);
g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
o.connect(g); g.connect(this.kmMaster);
o.start(t0 + at); o.stop(t0 + at + dur + 0.03);
};
const S = {
tap: () => note(900, 0, 0.05, 'sine', 0.05),
copy: () => { note(700, 0, 0.06, 'triangle', 0.06); note(1050, 0.06, 0.08, 'triangle', 0.06); },
start: () => note(520, 0, 0.16, 'triangle', 0.07, 880),
pause: () => note(620, 0, 0.14, 'triangle', 0.06, 380),
done: () => { note(523, 0, 0.1, 'triangle', 0.08); note(659, 0.09, 0.1, 'triangle', 0.08); note(784, 0.18, 0.18, 'triangle', 0.08); },
goal: () => { [523, 659, 784, 1047].forEach((f, i) => note(f, i * 0.1, 0.16, 'triangle', 0.08)); note(1319, 0.42, 0.3, 'sine', 0.07); },
coin: () => { note(1319, 0, 0.08, 'square', 0.035); note(1760, 0.08, 0.22, 'square', 0.035); },
alert: () => { note(880, 0, 0.5, 'sine', 0.09); note(1320, 0, 0.35, 'sine', 0.04); note(880, 0.32, 0.5, 'sine', 0.08); note(1320, 0.32, 0.35, 'sine', 0.035); }
};
(S[k] || S.tap)();
} catch (e) {}
}
kmParty() {
this.setState({ confetti: true });
clearTimeout(this.kmPartyT);
this.kmPartyT = setTimeout(() => this.setState({ confetti: false }), 2000);
}
renderVals() {
const v = this.kmRender();
const id = this.kmId();
this.kmSeen = id;
v.themeId = id;
let mo = 'on';
try { if (localStorage.getItem('kmMotion') === 'off') mo = 'off'; } catch (e) {}
v.motion = mo;
v.confetti = !!this.state.confetti && mo === 'on';
const cols = ['var(--accent)', 'var(--warnFill)', 'var(--text)', 'var(--accentText)'];
v.confettiBits = Array.from({ length: 26 }, (_, i) => ({ x: (i * 37 + 11) % 96 + 2, c: cols[i % 4], d: ((i * 7) % 10) / 22, w: 6 + (i % 3) * 3, h: 10 + (i % 4) * 3 }));
return v;
}
constructor(props) {
super(props);
this.state = {
view: 'home',
cfg: {
rate: 12, currency: 'Bs', dep: 50, valid: 7, factura: false, tax: 13,
days: { 30: false, 14: false, 7: true, 3: true, 1: true, 0: true }, hour: 8, mode: 'notif', payAlert: true, delivAlert: true, daily: false, dailyHour: 19,
goal: 5, rest: 1, ask: true, askEvery: 45, askWait: 5, askDiscount: true, vibe: true,
name: '', wa: '', city: '', sign: '', pay: '',
autobackup: true, backedUp: false, imported: false, exported: false, qrUp: false, qrExp: ''
}
};
}
componentDidMount() { this.kmStart(); }
componentWillUnmount() { this.kmStop(); }
kmRender() {
const st = this.state;
const cfg = st.cfg;
const cur = this.kmId();
let sfxOff = st.sfxOff;
if (typeof sfxOff !== 'boolean') { try { sfxOff = localStorage.getItem('kmSfx') === 'off'; } catch (e) { sfxOff = false; } }
const pad = (n) => String(n).padStart(2, '0');
let motionOff = st.motionOff;
if (typeof motionOff !== 'boolean') { try { motionOff = localStorage.getItem('kmMotion') === 'off'; } catch (e) { motionOff = false; } }
const set = (patch) => { const nx = { ...st.cfg, ...patch }; this.setState({ cfg: nx }); try { localStorage.setItem('kmAsk', JSON.stringify({ on: nx.ask, every: nx.askEvery, wait: nx.askWait, discount: nx.askDiscount })); } catch (e) {} };
const base = (label, note, extra) => ({ isToggle: false, isStep: false, isChips: false, isInput: false, isButton: false, label, note: note || '', hasNote: !!note, hasResult: false, result: '', ...extra });
const toggle = (label, note, on, flip) => base(label, note, { isToggle: true, on, track: on ? 'var(--accent)' : 'var(--track)', knob: on ? 23 : 3, knobBg: on ? 'var(--onAccent)' : 'var(--muted)', flip: () => { this.kmSfx('tap'); flip(); } });
const flipKey = (k) => () => set({ [k]: !cfg[k] });
const step = (label, note, text, minus, plus) => base(label, note, { isStep: true, valueText: text, minus: () => { this.kmSfx('tap'); minus(); }, plus: () => { this.kmSfx('tap'); plus(); } });
const stepKey = (k, min, max, by) => [() => set({ [k]: Math.max(min, cfg[k] - (by || 1)) }), () => set({ [k]: Math.min(max, cfg[k] + (by || 1)) })];
const chipStyle = (on) => ({ on, bg: on ? 'var(--accent)' : 'transparent', fg: on ? 'var(--onAccent)' : 'var(--text)', border: on ? 'var(--accent)' : 'var(--line)' });
const chips = (label, note, opts, isOn, pick) => base(label, note, { isChips: true, chips: opts.map(([v, l]) => ({ label: l, ...chipStyle(isOn(v)), pick: () => { this.kmSfx('tap'); pick(v); } })) });
const input = (label, note, k, type, placeholder) => base(label, note, { isInput: true, inputType: type, value: cfg[k], placeholder: placeholder || '', setValue: (e) => set({ [k]: type === 'number' ? Math.max(0, Number(String(e.target.value).replace(',', '.')) || 0) : e.target.value }) });
const button = (label, k, okText) => base(label, '', { isButton: true, hasResult: !!cfg[k], result: okText, press: () => { this.kmSfx('done'); set({ [k]: true }); } });

const dayLabel = (n) => n === 0 ? 'El mismo día' : n === 1 ? '1 día' : n + ' días';
const activeDays = [30, 14, 7, 3, 1, 0].filter((n) => cfg.days[n]);
const daysSummary = activeDays.length ? activeDays.map((n) => n === 0 ? 'el mismo día' : n).join(', ') + ' · ' + pad(cfg.hour) + ':00' : 'Sin avisos activos';

const defs = [
{ id: 'noche', name: 'Noche', desc: 'Oscuro con verde lima. Letra Sora y Manrope, esquinas medias.', bg: '#0E0F13', card: '#181A21', track: '#2A2E39', text: '#F2F3F5', muted: '#9AA0AE', accent: '#C6F432', accentText: '#C6F432', onAccent: '#0E0F13', line: '#4A4F5E', display: "'Sora',sans-serif", r2: '16px' },
{ id: 'claro', name: 'Claro', desc: 'Fondo claro con naranja. Letra Plus Jakarta y DM Sans, esquinas redondas.', bg: '#F3F4F7', card: '#FFFFFF', track: '#D5DAE3', text: '#14161C', muted: '#565D6D', accent: '#FF7A3D', accentText: '#B4400A', onAccent: '#14161C', line: '#9AA2B2', display: "'Plus Jakarta Sans',sans-serif", r2: '18px' },
{ id: 'estudio', name: 'Estudio', desc: 'Gris de editor con turquesa. Letra monoespaciada, esquinas casi rectas.', bg: '#1A1B1E', card: '#25272B', track: '#3B3F46', text: '#E8E9EB', muted: '#A1A6AF', accent: '#36D1C4', accentText: '#36D1C4', onAccent: '#06201D', line: '#5A5F69', display: "'IBM Plex Mono',monospace", r2: '6px' },
{ id: 'boda', name: 'Boda', desc: 'Crema con rosa. Títulos serif Playfair, esquinas muy suaves.', bg: '#FAF4EC', card: '#FFFFFF', track: '#E2D3BF', text: '#2B2420', muted: '#6B5D54', accent: '#D98E7B', accentText: '#A24A36', onAccent: '#2B2420', line: '#BBA78F', display: "'Playfair Display',serif", r2: '22px' },
{ id: 'cine', name: 'Cine', desc: 'Negro con ámbar de claqueta. Letra condensada Barlow, esquinas rectas.', bg: '#0A0A0B', card: '#151517', track: '#2C2C30', text: '#F4EFE6', muted: '#A39E94', accent: '#F2B33D', accentText: '#F2B33D', onAccent: '#14100A', line: '#55524B', display: "'Barlow Condensed',sans-serif", r2: '4px' },
{ id: 'neon', name: 'Neón', desc: 'Violeta profundo con rosa neón. Letra Syne y Outfit, esquinas muy redondas.', bg: '#130C24', card: '#1E1536', track: '#382B5C', text: '#F5F0FF', muted: '#B3A6D4', accent: '#FF4FA3', accentText: '#FF7AB9', onAccent: '#1A0A18', line: '#6B5C99', display: "'Syne',sans-serif", r2: '20px' },
{ id: 'papel', name: 'Papel', desc: 'Papel crema con tinta y rojo. Títulos Fraunces, esquinas cuadradas.', bg: '#F1EDE2', card: '#FBF9F3', track: '#D4CCB8', text: '#16140F', muted: '#5C564A', accent: '#FF5A4D', accentText: '#B8261A', onAccent: '#16140F', line: '#8F8670', display: "'Fraunces',serif", r2: '2px' },
{ id: 'atardecer', name: 'Atardecer', desc: 'Ciruela cálida con coral. Letra Bricolage y Figtree, esquinas suaves.', bg: '#1B1118', card: '#281923', track: '#473040', text: '#FBEFE9', muted: '#C4A9A6', accent: '#FF8F66', accentText: '#FF8F66', onAccent: '#2A0F08', line: '#7A5A62', display: "'Bricolage Grotesque',sans-serif", r2: '24px' }
];
const curTheme = defs.find((d) => d.id === cur) || defs[0];
const themes = defs.map((d) => {
const on = d.id === cur;
return {
...d, active: on, border: on ? d.accentText : d.line,
activeText: on ? 'En uso' : 'Usar este tema', activeColor: on ? d.accentText : d.muted,
pick: () => {
try { localStorage.setItem('kmTheme', d.id); } catch (e) {}
this.setState({ kmTheme: d.id });
this.kmSfx('tap');
}
};
});
const tests = [['tap', 'Toque'], ['done', 'Etapa lista'], ['goal', 'Meta cumplida'], ['coin', 'Pago'], ['alert', 'Aviso de boda'], ['start', 'Iniciar cronómetro']].map(([k, label]) => ({ label, play: () => this.kmSfx(k) }));

const go = (v) => () => { this.kmSfx('tap'); this.setState({ view: v }); };
const VACIAR = { label: 'Vaciar datos de ejemplo', value: 'Borra clientes, entregas y cotizaciones guardadas. Conserva tus precios y ajustes.', open: () => { if (!window.confirm('¿Vaciar los datos de ejemplo?\n\nSe borran clientes, entregas y cotizaciones guardadas. Tus precios, equipo y ajustes se conservan. No se puede deshacer.')) return; try { localStorage.setItem('kmS.Clientes', JSON.stringify({ clients: [], selId: null, view: 'list', filter: 'Todos' })); localStorage.setItem('kmS.Proyecto', JSON.stringify({ items: [], view: 'list', selId: null })); localStorage.setItem('kmS.Tiempos', JSON.stringify({ expenses: [] })); ['kmAcc', 'kmPV', 'kmHid', 'kmLog', 'kmS.Main', 'kmS.Agenda'].forEach((k) => localStorage.removeItem(k)); } catch (e) {} try { localStorage.setItem('kmVacio', '1'); } catch (e) {} this.kmSfx('done'); setTimeout(() => location.reload(), 300); } };
let hasSample = true;
try {
if (localStorage.getItem('kmVacio') === '1') hasSample = false;
else { const sc = JSON.parse(localStorage.getItem('kmS.Clientes') || 'null'); if (sc && Array.isArray(sc.clients)) hasSample = sc.clients.some((c) => c.id <= 5 && !c.accNew); }
} catch (e) {}
const groups = [
{ title: 'Apariencia', items: [
{ label: 'Temas', value: curTheme.name + ' · 8 disponibles', open: go('temas') },
{ label: 'Sonidos', value: sfxOff ? 'Apagados' : 'Activados', open: go('sonidos') },
{ label: 'Animaciones', value: motionOff ? 'Reducidas' : 'Activadas', open: go('animaciones') }
] },
{ title: 'Trabajo', items: [
{ label: 'Cotizador', value: cfg.currency + ' · 1 US$ = ' + cfg.rate + ' Bs · anticipo ' + cfg.dep + '%', open: go('cotizador') },
{ label: 'Avisos', value: daysSummary, open: go('avisos') },
{ label: 'Cronómetro y metas', value: 'Meta de ' + cfg.goal + ' etapas al día · ' + (cfg.ask ? 'pregunta cada ' + cfg.askEvery + ' min' : 'sin preguntas'), open: go('cronometro') }
] },
{ title: 'Cuenta', items: [
{ label: 'Mi negocio', value: cfg.name.trim() ? cfg.name.trim() : 'Nombre, WhatsApp y firma sin completar', open: go('negocio') },
{ label: 'Respaldo y datos', value: cfg.autobackup ? 'Respaldo automático activo' : 'Respaldo automático apagado', open: go('datos') }
] }
].map((g) => g.title === 'Cuenta' && hasSample ? { ...g, items: g.items.concat([VACIAR]) } : g).map((g) => ({ ...g, items: g.items.map((it, idx) => ({ ...it, border: idx === 0 ? '0 solid transparent' : '1px solid var(--card2)' })) }));

let rows = [];
let subTitle = '', subHint = '';
const v = st.view;
let vol = 4; try { vol = Number(localStorage.getItem('kmVol')) || 4; } catch (e) {}
const setVol = (n) => { const x = Math.min(5, Math.max(1, n)); try { localStorage.setItem('kmVol', String(x)); } catch (e) {} this.setState({ volTick: x }); this.kmSfx('done'); };
if (v === 'sonidos') {
subTitle = 'Sonidos'; subHint = 'Tonos cortos de la app';
rows = [toggle('Sonidos de la app', sfxOff ? 'Apagados.' : 'Suenan al terminar etapas, cumplir la meta, registrar pagos y probar avisos.', !sfxOff, () => {
const next = !sfxOff;
try { localStorage.setItem('kmSfx', next ? 'off' : 'on'); } catch (e) {}
this.setState({ sfxOff: next });
if (!next) this.kmSfx('done');
}), step('Volumen', 'Sube o baja el volumen de los tonos.', 'Nivel ' + vol + ' de 5', () => setVol(vol - 1), () => setVol(vol + 1))];
} else if (v === 'animaciones') {
subTitle = 'Animaciones'; subHint = 'Movimiento de la app';
rows = [toggle('Reducir animaciones', motionOff ? 'Sin transiciones, confeti ni contadores. Todo cambia al instante.' : 'Apágalas si el celular va lento o prefieres que todo cambie al instante.', motionOff, () => {
const next = !motionOff;
try { localStorage.setItem('kmMotion', next ? 'off' : 'on'); } catch (e) {}
this.setState({ motionOff: next });
})];
} else if (v === 'temas') {
subTitle = 'Temas'; subHint = 'Colores, letra y esquinas';
} else if (v === 'cotizador') {
subTitle = 'Cotizador'; subHint = 'Valores que usa cada cotización';
rows = [
input('Tipo de cambio (Bs por US$)', '', 'rate', 'number', '12'),
chips('Moneda principal', 'Se muestra primero. La otra aparece como equivalente.', [['Bs', 'Bolivianos'], ['US$', 'Dólares']], (x) => cfg.currency === x, (x) => set({ currency: x })),
chips('Anticipo para reservar', '', [[30, '30%'], [50, '50%'], [70, '70%']], (x) => cfg.dep === x, (x) => set({ dep: x })),
step('Plazo para pagar el anticipo', 'Días que tiene el cliente para reservar al precio que mandas.', cfg.valid + ' días', ...stepKey('valid', 1, 60)),
toggle('Con factura por defecto', '', cfg.factura, flipKey('factura')),
input('Porcentaje de impuesto', 'Solo se suma cuando la cotización lleva factura.', 'tax', 'number', '13')
];
} else if (v === 'avisos') {
subTitle = 'Avisos'; subHint = 'Bodas, pagos y entregas';
rows = [
base('Días antes de la boda', 'Cada día marcado genera un aviso.', { isChips: true, chips: [30, 14, 7, 3, 1, 0].map((n) => ({ label: dayLabel(n), ...chipStyle(!!cfg.days[n]), pick: () => { this.kmSfx('tap'); set({ days: { ...cfg.days, [n]: !cfg.days[n] } }); } })) }),
step('Hora del aviso', '', pad(cfg.hour) + ':00', () => set({ hour: Math.max(5, cfg.hour - 1) }), () => set({ hour: Math.min(21, cfg.hour + 1) })),
chips('Cómo avisar', cfg.mode === 'alarma' ? 'Crea un evento en Google Calendar con alerta. Suena aunque la app esté cerrada.' : 'Notificación de la app. En iPhone necesita la app instalada y permiso.', [['notif', 'Notificación'], ['alarma', 'Alarma']], (x) => cfg.mode === x, (x) => set({ mode: x })),
toggle('Avisar el saldo pendiente', 'Lo agrega al texto del aviso de boda.', cfg.payAlert, flipKey('payAlert')),
toggle('Avisar entregas el día anterior', 'Reels y videos con fecha de entrega.', cfg.delivAlert, flipKey('delivAlert')),
toggle('Recordatorio diario para trabajar', 'Un empujón a la hora que elijas.', cfg.daily, flipKey('daily'))
];
if (cfg.daily) rows.push(step('Hora del recordatorio diario', '', pad(cfg.dailyHour) + ':00', () => set({ dailyHour: Math.max(6, cfg.dailyHour - 1) }), () => set({ dailyHour: Math.min(23, cfg.dailyHour + 1) })));
} else if (v === 'cronometro') {
subTitle = 'Cronómetro y metas'; subHint = 'Cómo se mide tu día';
rows = [
step('Meta diaria', 'Etapas terminadas por día para mantener la racha.', cfg.goal + ' etapas', ...stepKey('goal', 1, 12)),
step('Días de descanso libres', 'Por semana, sin perder la racha.', cfg.rest + (cfg.rest === 1 ? ' día' : ' días'), ...stepKey('rest', 0, 3)),
toggle('Preguntar si sigo trabajando', 'El cronómetro no sabe si trabajas. Mientras corre, te lo pregunta cada cierto tiempo.', cfg.ask, flipKey('ask')),
chips('Preguntar cada', 'Tiempo con el cronómetro corriendo antes de cada aviso.', [[30, '30 min'], [45, '45 min'], [60, '60 min'], [90, '90 min']], (x) => cfg.askEvery === x, (x) => set({ askEvery: x })),
chips('Si no respondo, pausar en', 'El cronómetro se pausa solo para no inflar tus horas.', [[5, '5 min'], [10, '10 min'], [15, '15 min']], (x) => cfg.askWait === x, (x) => set({ askWait: x })),
toggle('Descontar los minutos sin responder', 'Resta del tiempo de la etapa lo que pasó desde el aviso.', cfg.askDiscount, flipKey('askDiscount')),
toggle('Vibrar al terminar una etapa', '', cfg.vibe, flipKey('vibe'))
];
} else if (v === 'negocio') {
subTitle = 'Mi negocio'; subHint = 'Aparece en tus cotizaciones';
rows = [
input('Nombre o marca', '', 'name', 'text', 'Tu nombre o marca'),
input('WhatsApp', '', 'wa', 'tel', '+591 …'),
input('Ciudad', '', 'city', 'text', 'Ciudad'),
input('Datos de pago', 'Se agregan al final del mensaje de cada cotización.', 'pay', 'text', 'Banco, cuenta o QR'),
button('Subir imagen del QR de cobro', 'qrUp', 'QR cargado. Va en el PDF y se puede mandar como imagen.'),
input('Vencimiento del QR', 'La app te avisa una semana antes de que venza.', 'qrExp', 'date', ''),
input('Firma del mensaje', 'Una línea al cierre de cada cotización.', 'sign', 'text', 'Ej: Quedo atento a tu respuesta.')
];
} else if (v === 'datos') {
subTitle = 'Respaldo y datos'; subHint = 'Que no se pierda nada';
rows = [
toggle('Respaldo automático', 'Una copia al día cuando haya internet.', cfg.autobackup, flipKey('autobackup')),
button('Exportar respaldo a un archivo', 'backedUp', 'Guardado: km-respaldo-2026-11-17.json, con clientes, cotizaciones, pagos y entregas.'),
button('Importar un respaldo', 'imported', 'Demo: aquí se elige el archivo y se recuperan los datos en un celular nuevo.'),
button('Exportar clientes y cotizaciones a Excel', 'exported', 'Archivo generado.')
];
}

return {
isHome: v === 'home', isSub: v !== 'home',
isTemas: v === 'temas', isSonidos: v === 'sonidos',
groups, rows, themes, tests, subTitle, subHint,
goHome: () => { this.kmSfx('tap'); this.setState({ view: 'home' }); }
};
}
}

return Component;})()};