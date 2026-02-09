var CACHE = 'bhuvan-v1';

function addToCache(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    var clone = response.clone();
    caches.open(CACHE).then(function (cache) {
      cache.put(request, clone);
    });
  }
  return response;
}

function fromCache(request) {
  return caches.match(request).then(function (cached) {
    return cached || fetch(request).then(function (response) {
      addToCache(request, response);
      return response;
    });
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        '/',
        '/assets/css/style.css',
        '/assets/js/theme.js',
        '/manifest.json'
      ]).catch(function () {});
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE) return caches.delete(key);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  if (event.request.url.indexOf(self.location.origin) !== 0) return;
  event.respondWith(fromCache(event.request));
});
