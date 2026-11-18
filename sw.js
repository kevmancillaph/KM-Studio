const VERSION = 'km-0.9.1';
const FILES = ['./', './index.html', './pruebas.html', './app/app.css', './app/runtime.js', './app/screens.js', './app/datos.js', './app/img/osmo.png', './app/img/sony.png', './manifest.webmanifest', './lib/jspdf.umd.min.js', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== 'km-fuentes').map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', (e) => { if (e.data === 'saltar') self.skipWaiting(); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.hostname.indexOf('googleapis') >= 0 || u.hostname.indexOf('gstatic') >= 0) { e.respondWith(caches.open('km-fuentes').then((c) => c.match(e.request).then((hit) => hit || fetch(e.request).then((r) => { c.put(e.request, r.clone()); return r; }).catch(() => hit)))); return; }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).catch(() => caches.match('./index.html'))));
});
