importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js")
console.log('Siemanko z Service Workiera')

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com\/users/,
  new workbox.strategies.NetworkFirst()
  //  workbox.strategies.networkFirst()
)

workbox.precaching.precacheAndRoute([])

workbox.core.skipWaiting()
workbox.core.clientsClaim()
