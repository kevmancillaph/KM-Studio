self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', (e) => {
  const a = e.action; e.notification.close();
  if (a) { const t = { pausa: 'Pausar', listo: 'Check', sig: 'Siguiente' }[a] || a; e.waitUntil(self.registration.showNotification('Botón recibido: ' + t, { body: 'Los botones funcionan.', tag: 'km-r' })); }
});
