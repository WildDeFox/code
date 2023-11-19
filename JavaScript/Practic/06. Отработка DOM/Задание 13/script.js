// Реализуйте кнопочки +1, -1, которые будут увеличивать
// или уменьшать на 1 значение инпута.
// Сделайте так, чтобы это значение не могло стать меньше нуля.
let input = document.querySelector('.input');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
button1.addEventListener('click', function () {
    if (+input.value > 0) {
        input.value = +input.value - 1;
    }
})

button2.addEventListener('click', function () {
    input.value = +input.value + 1;
})