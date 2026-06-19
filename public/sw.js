// Naam van de cache.
const CACHE_NAAM = 'cat-world-cache-v1';

// Bestanden voor offline gebruik.
const TE_CACHEN_BESTANDEN = [
  '/',
  '/manifest.json',
  '/CSS/header_footer.css',
  '/CSS/Home.css',
  '/CSS/opties.css',
  '/CSS/style_facts.css',
  '/img/Logo_192x192.png',
  '/img/Logo512x512.png',
  '/img/Cat_World_Icon.ico'
];

// Service Worker installeren.
self.addEventListener('install', function(event) {
  console.log('SW: Cat World Service Worker installeren...');

  event.waitUntil(
    caches.open(CACHE_NAAM).then(function(cache) {
      console.log('SW: Cat World bestanden cachen');

      // Sla alle bestanden op in de cache.
      return cache.addAll(TE_CACHEN_BESTANDEN).catch(err => {
        console.error('SW: Fout bij het cachen van bestanden:', err);
      });
    })
  );
});

// Service Worker activeren.
self.addEventListener('activate', function(event) {
  console.log('SW: Cat World Service Worker geactiveerd!');
});

// Verwerk alle aanvragen.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {

      // Gebruik eerst de cache.
      // Haal anders het bestand online op.
      return response || fetch(event.request);

    })
  );
});