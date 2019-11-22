var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log('Service Worker registered!');
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('Before beforeinstallprompt fired!');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});