self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('convertidor-cache').then((cache) => {
            return cache.addAll([
                './',
                'index.html',
                'styles.css',
                'app.js',
                'icon.png'
                // Agrega aquí otros recursos que desees cachear
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
