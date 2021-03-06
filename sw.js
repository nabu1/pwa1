importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js")
console.log('Siemanko z Service Workiera')

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com\/users/,
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  })
)

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "10348f2d02ad4c726191be95062b4c0c"
  },
  {
    "url": "app.js",
    "revision": "5eced2337b766c8bf4723088352a3306"
  },
  {
    "url": "app.webmanifest",
    "revision": "b36b7c9b0ac0d9e2134c701de3433739"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "a1ef1b9708d1ea183a9bc3c84ae12f2b"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46191e632fc0608fddd6807fb3c0e195"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "cb261019ea0d6deebd87ade090d74447"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "add0be3f5939bed00e3d5c25d3704b8c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "944845293fe2d79da51210d2abef435a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "42ae7882c8e77d70b4139cefcd7a2a4d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "afe3b946a130e48a1beff91016a9ab12"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "997a884575b29116abb58e1d46a79885"
  },
  {
    "url": "index.html",
    "revision": "ea3f3400520e6ed71f38b6903e54ba16"
  },
  {
    "url": "src-sw.js",
    "revision": "d1c0251fe5c2133b90adbd1e37321cd6"
  },
  {
    "url": "workbox-config.js",
    "revision": "43e42ed935bb8bed7601394eda546738"
  }
])

workbox.core.skipWaiting()
workbox.core.clientsClaim()
