// Minimal Service Worker für ZEN-Trading PWA-Install
// Muss neben der index.html im gleichen Verzeichnis liegen.
// Dieser SW macht KEIN Offline-Caching — er existiert nur, damit Chrome/Brave/Edge
// den "Install"-Prompt auslösen (die Browser verlangen einen SW mit fetch-Handler).

self.addEventListener('install', (event) => {
  // Direkt aktiv werden
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: keine Caching-Logik, einfach Netzwerk-Request durchreichen.
  // Damit bleibt die App immer live und delayed-Daten werden nicht zwischengespeichert.
  event.respondWith(fetch(event.request));
});
