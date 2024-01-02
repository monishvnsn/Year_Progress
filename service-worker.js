self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('progress-bar-app').then(function (cache) {
        return cache.addAll([
          '/',
          '/manifest.json',
          '/icon.png',
          '/service-worker.js',
          '/styles.css', // Add other relevant files
          '/index.html'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  });
  