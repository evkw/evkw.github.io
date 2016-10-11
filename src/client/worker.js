var CACHE_NAME = 'v1::evantest';

// Install
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css',
            'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function (cacheName) {
          console.log('Deleting ' + cacheName);
          return caches.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});