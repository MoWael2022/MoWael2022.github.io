'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bb25b5421764cd8f9d45afdd59e990db",
"assets/AssetManifest.bin.json": "928bb81422b4dd3a1891a52cdedfbd4b",
"assets/AssetManifest.json": "84396320bc88cefcbf089edeee6fc2c7",
"assets/assets/image/crossplatform.png": "9cc95a328bc3a73fb4bf38f34f433c64",
"assets/assets/image/frame/Ellipse%25202.svg": "55db89ee045b1d65e0d1e5786269e196",
"assets/assets/image/frame/Frame.png": "6e38484d634e9ad253a3e2e36781c231",
"assets/assets/image/frame/Frame.svg": "62bac8e43c52a70d892d3ad8432de05c",
"assets/assets/image/frame/frame1.png": "2995ef5733f102b8f4cb0855ebe0b0fa",
"assets/assets/image/my_photo/main_profie.jpeg": "9cdb355533d7757bdb7727d0bf62ece9",
"assets/assets/image/my_photo/profile1.jpeg": "960e69d4dfe5cd0def195019bf2e1504",
"assets/assets/image/my_photo/profile2.jpeg": "2e57466c16165a9d0f8f3a7dd1ae2b01",
"assets/assets/image/my_photo/profile3.jpeg": "33300a081e7ec6e2d09b2bceee8a888d",
"assets/assets/image/my_photo/profile4.jpeg": "6e797419567efa321f2c8822effa345c",
"assets/assets/image/my_photo/profile5.jpeg": "ffbace541704b4d87d85acd95539f9f8",
"assets/assets/image/my_photo/profile6.jpeg": "07479d88fd7e79be0217caf379e796df",
"assets/assets/image/my_photo/profile7.jpeg": "d8ced906abab8cc633e8d9d632f0d976",
"assets/assets/image/portfolio_logo.png": "bacda72901dd9190c28bfd1a50288fcd",
"assets/assets/image/skills/AI_logo.png": "f3766aee0def2ef950867942af16f18b",
"assets/assets/image/skills/algo_logo.jpg": "28e5668e6600487b0e6ef9ab2941816d",
"assets/assets/image/skills/c++_logo.png": "d8c6efc0dced4d5c642a7b2329b34f9c",
"assets/assets/image/skills/dart_logo.png": "75566a02b5bef2aa0a7425a79cb8655c",
"assets/assets/image/skills/data_science_logo.png": "48aa8dba5f71d17a958469a55aae2d42",
"assets/assets/image/skills/data_structure_logo.png": "1389742b11316d39a3438ca39f3c7b22",
"assets/assets/image/skills/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/image/skills/oop_logo.png": "aa689fbb7e4655e7a58ac292f7f0f788",
"assets/assets/image/skills/python_logo.png": "b609caef179bc8987543940172f9f2db",
"assets/assets/image/skills/sql_logo.png": "32dbf6a13b7c8c34949835e039587856",
"assets/assets/video/Bookdetector.mp4": "e57e2feeffb7140c6c086f211620096a",
"assets/assets/video/meal.mp4": "6e66f135155ebe8fe0a8d107383e17e5",
"assets/assets/video/Onlinemarket.mp4": "35a16fd546c84ac28e357cd94311241f",
"assets/assets/video/orange_project.mp4": "0a029a62ce52aec2edf108f7db93765b",
"assets/assets/video/tennis.mp4": "31544cd18b8b97a0e9f2b2dd16319357",
"assets/assets/video/Weatherapplication.mp4": "6b5f1288f5789985e5733dd3fbdb9722",
"assets/font/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/font/Lufga/LufgaBold.ttf": "adecc4bca5b2a9687481c342a4fe9f40",
"assets/font/Lufga/LufgaLight.ttf": "1ddf17687f8773fda121f4ef0e6a9885",
"assets/font/Lufga/LufgaMedium.ttf": "9ab833326b202fb55eb336db57aa3508",
"assets/font/Lufga/LufgaRegular.ttf": "9df35b2045f6e32dcfa5bbc421ed05b1",
"assets/font/Lufga/LufgaSemiBold.ttf": "1e053b4805d075f403dd3e44a3d4ec31",
"assets/font/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/FontManifest.json": "ebf928a53f2aedb2e60969f0a2baa8b6",
"assets/fonts/MaterialIcons-Regular.otf": "944c38146b797dd58c247a7dd0e6a0a4",
"assets/NOTICES": "d487dc172568c2ef6c947b85f979fdf6",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "bacda72901dd9190c28bfd1a50288fcd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d708fab7975cca74595cb98d3e908018",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9354630ef66599966daca196a5da4df",
"/": "c9354630ef66599966daca196a5da4df",
"main.dart.js": "8a9d42ccda583e9b6b29df77ec4b620d",
"manifest.json": "76960cbce93a245fc03ba864ffb6907d",
"version.json": "93d939be7666eea4b51f79298486318a"};
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
