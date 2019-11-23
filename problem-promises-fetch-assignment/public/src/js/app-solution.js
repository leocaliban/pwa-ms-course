var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function () {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('https://swapi.co/api/people/1');
        }, 3000);
    }).then(function (url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                output.textContent = data.name;
            }).catch(function (error) {
                console.log(error);
            });
    });
});