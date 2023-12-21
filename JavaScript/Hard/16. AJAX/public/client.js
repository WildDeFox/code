// let div = document.querySelector('div');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//     fetch('/ajax.html').then(
//         response => {
//             return response.text();
//         }
//     ).then(
//         text => {
//             div.innerHTML = text;
//         }
//     )
// });

let div = document.querySelector('div');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.addEventListener('click', function() {
    fetch('/ajax1.html').then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            div.innerHTML = text;
        }
    )
});

button2.addEventListener('click', function() {
    fetch('/ajax2.html').then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            div.innerHTML = text;
        }
    )
});

button3.addEventListener('click', function() {
    fetch('/ajax3.html').then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            div.innerHTML = text;
        }
    )
})