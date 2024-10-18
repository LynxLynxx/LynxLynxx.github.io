'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d88bc5ebfaec7f65bf254c9e0ab5052c",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "76ac91c3c46023b0540e0c31d0c4be32",
"/": "76ac91c3c46023b0540e0c31d0c4be32",
"main.dart.js": "75fb629260ad05f3b7703549cd9b623e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"assets/AssetManifest.json": "5d77f32906383fa719d5624890d9f26f",
"assets/NOTICES": "501aa1f681b3cc17ed9ad60f3299f8ac",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "74977ddf5e555d3c2e9b031114adbc42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a75c25c81ec635d9189cbb6fd9f96995",
"assets/fonts/MaterialIcons-Regular.otf": "b5138ca3ce8fc51711b25ba58e0fb0eb",
"assets/assets/img/me.png": "8803d93e7314cdce5c59bd91ce14799b",
"assets/assets/img/kiw3.png": "b368b73f9e71861a63e22b3a4a4ed1db",
"assets/assets/img/kiw2.png": "e96fab2dff756c40f0f3c00734a3899d",
"assets/assets/img/kiw1.jpg": "febb0cfee38a7257f5565866427cd31a",
"assets/assets/img/kiw4.png": "c63e61e1910802cc21742ed44a2d58bc",
"assets/assets/img/personal_website.jpg": "f0623f3fdfe3e95581be1ba6fde0ce78",
"assets/assets/img/Simulator%2520Screenshot%2520-%2520iPhone%252014%2520Pro%2520-%25202023-06-02%2520at%252015.36.01.png": "93f386832881140490f6b2428e4e1914",
"assets/assets/img/pluginIcon.svg": "305c0bb9897a4b13c0f30e6fe0e748ac",
"assets/assets/img/ss1.png": "79b703ee0e3ca99f7d625dd9c7a91d5f",
"assets/assets/img/ss2.png": "bd4358a53eac603c091704922d81c6a9",
"assets/assets/img/ss3.png": "4564161b404bc6384bf7d938d54b8dce",
"assets/assets/img/linkedin_icon.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/img/ss4.png": "983e7a5f26481653b6238334be289576",
"assets/assets/img/pobrane.jpeg": "2b88e689613de3a31bb550e38fb6b1ed",
"assets/assets/img/pw2.png": "6473e87af728642d07895786e70f1041",
"assets/assets/img/pw3.png": "0dd3c5345151142200458c36af71e84e",
"assets/assets/img/easy_eat2.png": "b94706adf913b7db389a6ba2c9aa79d0",
"assets/assets/img/pw4.png": "0a58b6296cf26d4f87328a457e5947e7",
"assets/assets/img/pw5.png": "046755cdcaef896aa387cb1c22c2923f",
"assets/assets/img/easy_eat.png": "71619de6ea713bb8c243c0921764fcde",
"assets/assets/img/t1_1.png": "c63e61e1910802cc21742ed44a2d58bc",
"assets/assets/img/t1_2.png": "330408a9bf03e495e46879363aee47c1",
"assets/assets/img/carlog1.png": "5ce0f48f28bea71193ebcecd62457f4b",
"assets/assets/img/github_icon.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/img/md1.png": "237919b5aade3a27ef1028fca14eb0db",
"assets/assets/img/md3.png": "7169b70f665840157babc12b078cbf2c",
"assets/assets/img/carlog2.png": "4829406b75bf05ccbc1611fcb7e575f6",
"assets/assets/img/md2.png": "a025fe7d4a94b6338187ec563b5cd4e9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
