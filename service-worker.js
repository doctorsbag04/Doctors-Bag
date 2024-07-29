const CACHE_NAME = 'doctors-bag-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/onlinemedicine.html',
  '/healthupdates.html',
  '/about.html',
  '/contact.html',
  '/injury.html',
  '/diagnosis.html',
  '/termsandconditions.html',
  '/bonefracture.html',
  '/home.html',
  '/corn.html',
  '/rinjuries.html',
  '/scarpionbite.html',
  '/scars.html',
  '/twisted.html',
  '/service-worker.js',
  'https://i.postimg.cc/c4cr9LTj/Pics-Art-10-26-08-40-10.jpg',
  'https://i.postimg.cc/PrdqwkhM/Pics-Art-10-26-08-49-29.jpg',
  'https://i.postimg.cc/zXpGwPGY/Pics-Art-10-26-09-10-54.jpg',
  'https://i.postimg.cc/bJQzZmBM/Pics-Art-10-26-09-06-36.jpg',
  'https://i.postimg.cc/NFDB45Yk/Pics-Art-10-26-09-08-28.jpg',
  'https://i.postimg.cc/8kmpDnWf/Pics-Art-10-26-09-12-43.jpg',
  'https://i.postimg.cc/vT0wnkLP/Pics-Art-10-26-09-28-49.jpg',
  'https://i.postimg.cc/RCdB2J5c/bd38e16b545682da174d440ab4203f03.gif',
  '/https://i.postimg.cc/13JKJBXL/Picsart-24-05-27-16-22-03-467.png',
  '/https://i.postimg.cc/3NCN0Xj8/mic.png',
  '/https://i.postimg.cc/TPm80CXc/Picsart-24-05-30-20-33-57-074.jpg',
   '/https://i.postimg.cc/XqMSdM96/speaking.png',
   '/https://i.postimg.cc/prtF7C9K/house-black-silhouette-without-door.png',
   '/https://i.postimg.cc/WbdxkcqC/Pics-Art-10-27-07-03-15.jpg',
   '/https://i.postimg.cc/bwbMm0TR/Pics-Art-10-27-07-03-02.jpg',
   '/https://i.postimg.cc/VN8hpSZP/Pics-Art-10-27-07-03-34.jpg',
   '/https://i.postimg.cc/DzRPHRwJ/Pics-Art-10-27-07-04-09.jpg',
   'https://i.postimg.cc/TPm80CXc/Picsart-24-05-30-20-33-57-074.jpg',
    'https://i.postimg.cc/sXyLczmV/Picsart-24-05-30-20-34-28-360.jpg',


];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Serve from cache
        }
        return fetch(event.request); // Fetch from network
      })
  );
});
