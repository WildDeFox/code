// Дано несколько инпутов, абзац и кнопка.
// По нажатию на кнопку получите числа,
// стоящие в этих инпутах и запишите их сумму в абзац.
let inputs = document.querySelectorAll('.input');
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let sum = 0;
    for (let input of inputs) {
        sum += Number(input.value);
    }
    elem.textContent = sum;
});