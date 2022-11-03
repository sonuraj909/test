'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "c2454d0cee8281d92addc59ac21bc27d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb13b20ee20eae5d2cb1653057851a67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e285efd16943991e2c187346506c622",
".git/logs/refs/heads/main": "7cdd94b3f8bc0c996bab23cf1e30cc33",
".git/logs/refs/remotes/origin/main": "1167636eb53206ed3eccc896a80f52a1",
".git/objects/01/39c16bdbf15872081fbd9e48b28a07a4d0bd9c": "f291dd02e64df33810731ea53dd94648",
".git/objects/07/f70af1e1f8a0a487bb300a0366a522ef41f5fe": "03fc3e0ba6454baf08aff0aabfdd5dab",
".git/objects/12/4702d01e3ed748fa125797e6a31d832555d13c": "1f5ef42bbe1bf98def3d48e6f782327f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/0e0c0680211897309b2909b40c83a4e865d706": "e3f3ad89ba6f8e8deb9f09f4ae4ebc4d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/39/91a90b80ed170927148dccfae3dc66284fd861": "fb2efd23584b055f9e6c3ead76b232d8",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/e62380a813f0aad0ce9346c0950c94af55d83d": "67fa9de404322ab3d8c5fbd0339bbd02",
".git/objects/46/1d6a75f4333bcd01e9e3d27f7f6015b5bd1075": "f15e41ccc1297f3e9ba574267963caf3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e9c2040b6ea5762c37876cf95cca8ac67c1939": "bb57af27512c91c327b5ccdabf44bad6",
".git/objects/4a/017dff6e8bc315167fd0ef74a376d5f7df51a6": "e5a53d9c53e998fc9edded3c68fb52d1",
".git/objects/4a/eb2ffe7d6072cf2dced196c62ee74fececcd68": "e83c6eba0082dc1d4d6ff5ffac225892",
".git/objects/56/afc6fe5b97ec46b30894eb308a4248d9b66fbd": "ff5279527966ed86e245e9ea3a673cba",
".git/objects/67/933e6fd801b453f1b64d0fcfcea3d1f86e49d0": "b26b829d0f4a78bfb747cc868ef2a4ac",
".git/objects/68/7d80cd51a8169ae146a7cde91afabbef6d28e8": "2548bf13938fa4871e92f1b9576d15dc",
".git/objects/68/fe245e8b13a3b3da5bb18df2f802d74ade1a2c": "5d69ef7f3fc839519f85d940b23ded95",
".git/objects/6d/c6bae7a136edaff4dd740cd68ce88ab2819b98": "85dee69fc18e4e49301b1fbd078cb9c4",
".git/objects/6e/482679a0f106c3d55dc93f7c0b579c7a9e7eb7": "75d96abd28f8f006e8227a9b4473c2d3",
".git/objects/71/ed2bded6e2e9775fba9da62bbfdbaed35b7a3a": "09f9a32046855e3ae97cfecc3195e0ac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/329f2e503d3e4e286c092fd438cf0e15a159cd": "f16e5ee4d1bdd9e11885acd149e827e5",
".git/objects/82/a0e05c82d2890efe48b8319378ade85e2f9c7a": "f90b3cdd12d63f53544b201db0386e12",
".git/objects/86/c48faa5b645429babc26210eabfb91c8ddf15f": "b842e765542fc7a52f20200600aeaff4",
".git/objects/90/e3685b168e24dbf81cd3603dd11c16c0840f9f": "08f7e0c800427c6669d5a15b93b3f1f3",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/419e1d4fba151ea00907cd121c6bf3fa449220": "5c03361d6ebc9ba7df063b6624e80c3f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/3b0c7bc6ca2c11f8276620249684ce18e718e5": "b0bd7b2e5c0efbc30245def62c3df83a",
".git/objects/c9/0f42b09bffecaa1bb864b46bf335ae225781f5": "b148b72984f0720a1959f3f772b272e7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/3257af3709ed67e2aa3f39c78f55365d9bdf4d": "889a7f0b8702fb99fe83b2ce6b628f49",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/00db266a99b5223edb5ca7b9f8773239ca7b1c": "020f65d0871fb0bca0f302ef101a21b6",
".git/refs/heads/main": "23b924f5a5f4ce777cd8701c1b456597",
".git/refs/remotes/origin/main": "23b924f5a5f4ce777cd8701c1b456597",
"assets/AssetManifest.json": "1facf64212de210032c27165fa589619",
"assets/assets/image/coverpic.jpeg": "ad6ac57c72973708d648d0a2eb8cfb0b",
"assets/assets/image/github.png": "2698f0e8dde3375a4dd3f5c20c4ab8b1",
"assets/assets/image/propic.jpeg": "ee46b31e2103ba430de290e676664932",
"assets/assets/image/srfolio-logos.jpeg": "2abaa0a8654f8c4c8cdf41250a0695da",
"assets/assets/image/srfolio-logos_black.png": "b3ed7833b1129ac406e39cdbb4fbc213",
"assets/assets/image/srfolio.png": "1bd77e06a35f445f0fd4f411a80c3738",
"assets/assets/image/srfolio_adaptive_back.png": "ca8ee7f93171bb4638f729567cc20b39",
"assets/assets/image/srfolio_adaptive_fore.png": "64c2383c8999a7cfd81e5a15465f666f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "22c15bb9f89a4839580b5fcced95441d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f3c84120163dbb4cee6b72ebeaeeedf0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2971976d61f889475b43efdde0ffd75c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "07fb01091572cb2bfca5b47fe11ebd19",
"icons/Icon-512.png": "4fa3b745d9669c8b8d16dcd0d3d3c923",
"icons/Icon-maskable-192.png": "07fb01091572cb2bfca5b47fe11ebd19",
"icons/Icon-maskable-512.png": "4fa3b745d9669c8b8d16dcd0d3d3c923",
"index.html": "48b85e7e59cc6336427e43e1c5653cf8",
"/": "48b85e7e59cc6336427e43e1c5653cf8",
"main.dart.js": "4a0e6b2ec83b95f741d03eaab45f01cf",
"manifest.json": "79eb3f29d9988ced1ee6d95719a3ccb1",
"version.json": "e26a274fe28d71984d7cf1450514aa15"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
