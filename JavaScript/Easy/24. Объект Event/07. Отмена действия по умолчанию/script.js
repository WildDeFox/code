// Даны ссылки. Сделайте так, чтобы по клику на ссылку
// ей в конец записывался ее href, а перехода по ссылке не происходило.
let links = document.querySelectorAll('.link');
for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        this.textContent = this.textContent + ` (${this.href})`;
    })
}

// Даны два инпута, абзац и ссылка.
// Пусть в инпуты вводятся числа.
// Сделайте так, чтобы по клику на ссылку
// в абзац записалась сумма введенных чисел.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function (event) {
    event.preventDefault();
    elem.textContent = +input1.value + +input2.value;
})