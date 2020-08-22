function registerServiceWorker() {
    // register sw script in supporting browsers
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
            console.log('Service Worker registered successfully.');
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    }
}

self.addEventListener('install', e => {
    e.waitUntil(
        // after the service worker is installed,
        // open a new cache
        caches.open('my-pwa-cache').then(cache => {
            // add all URLs of resources we want to cache
            return cache.addAll([
                '/',
                'index.html',
                'contact.html',
                'post.html',
                'me.html',
                'portfolio.html',
                'portfolio.html',
                'style1.css',
                '/js/lightbox-plus-jquery.min.js',
                'android-chrome-192x192.png',
                'android-chrome-512x512.png',
                'apple-touch-icon.png',
                'browserconfig.xml',
                'favicon-16x16.png',
                'favicon-32x32.png',
                'favicon.ico',
                'mstile-150x150.png',
                'safari-pinned-tab.svg',
                'site.webmanifest',

            ]);
        })
    );
});