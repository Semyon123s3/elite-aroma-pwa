const CACHE_NAME = 'elite-aroma-cache-v1';
const urlsToCache = [
  '/',
  '/elite-aroma.html',
  '/styles/style.css',
  '/img/logo.png',
  '/img/main-aroma.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});