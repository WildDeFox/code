// Дан инпут, кнопка и абзац. В инпут вводится какое-то число.
// По нажатию на кнопку запишите введенное число в текст абзаца
// и запустите обратный отсчет в абзаце: пусть каждую секунду
// число в абзаце уменьшается на единицу, пока не дойдет до нуля.
let input = document.querySelector('input');
let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let count = Number(input.value);

    let timerId = setInterval(function() {
        p.textContent = count--;

        if (count == 0) {
            clearInterval(timerId);
        }
    }, 1000);
})