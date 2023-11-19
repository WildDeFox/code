// Даны несколько абзацев и кнопка.
// По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
let elems = document.querySelectorAll('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    for (let [index, elem] of elems.entries()) {
        elem.textContent = elem.textContent + index;
    }
})