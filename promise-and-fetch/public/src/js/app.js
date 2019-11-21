
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
    // resolve('This is executed once the timer is done!');
    reject({
      code: 500,
      message: 'An error ocurred!'
    });
  }, 3000);
});

// Error with reject callback
// promise.then((text) => {
//   console.log(text);
// }, (error) => {
//   console.log(error.code, error.message);
// });

// Error with Catch (Recomended)
promise.then((text) => {
  console.log(text);
}).catch((error) => { // Catch any errors in the 'then' chain
  console.log(error.code, error.message);
});

console.log('This is executed right after setTimeout()');
