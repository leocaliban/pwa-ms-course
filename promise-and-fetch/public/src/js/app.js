
var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is executed once the timer is done!');
  }, 3000);
});

promise.then((text) => {
  console.log(text);
});

console.log('This is executed right after setTimeout()');
