// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let input = document.querySelector('.input');
let elem = document.querySelector('.elem');
input.addEventListener('blur', function () {
    elem.textContent = input.value;
});