self.addEventListener('install', function (event) {
    console.log('[ServiceWorker] - Instaling Service Worker...', event);
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                console.log('[SERVICE WORKER] Precaching App Shell.');
                cache.add('/src/js/app.js');
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[ServiceWorker] - Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});