// service-worker.js
onmessage = async (e) => {
	const result = e.data[0] * e.data[1]
	if (isNaN(result)) {
		postMessage('Please write two numbers')
	} else {
		postMessage('Worker: Posting message back to main script timeout 1s')
	}
}
const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
	'/tag_names.json'
]
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache)
		})
	)
})
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
				console.info('CALLED FETCH', event.request)
				// Cache hit - return response
				if (response) {
					return response
				}
				return fetch(event.request)
			}
		)
	)
})
