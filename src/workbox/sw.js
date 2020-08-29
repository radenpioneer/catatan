importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

const FALLBACK_URL = '/offline.html'

workbox.core.skipWaiting()
workbox.core.clientsClaim()
workbox.googleAnalytics.initialize()
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst())
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30 * 3
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({request}) => request.destination === 'audio' || request.destination === 'video',
    new workbox.strategies.CacheFirst({
        cacheName: 'media',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 10
            }),
            new workbox.rangeRequests.RangeRequestsPlugin()
        ]
    })
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('post'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'posts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 10
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('page'),
    new workbox.strategies.NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 10
            })
        ]
    })
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('browser-sync'),
    new workbox.strategies.NetworkOnly(),
    'GET'
)

workbox.routing.registerRoute(
    ({url}) => url.pathname.includes('browser-sync'),
    new workbox.strategies.NetworkOnly(),
    'POST'
)

workbox.routing.setCatchHandler(({event}) => {
    switch (event.request.destination) {
        case 'document': return matchPrecache(FALLBACK_URL)
        default: return Response.error()
    }
})