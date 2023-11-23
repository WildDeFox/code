// Дана кнопка. Дан абзац, текстом которого является число, например, 10.
// По нажатию на кнопку запустите таймер, который каждую секунду будет
// уменьшать текст абзаца на 1. Как только значение абзаца
// станет равно нулю - остановите таймер.
let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let timerId = setInterval(function() {
        p.textContent = +p.textContent - 1;

        if (p.textContent == 0) {
            clearInterval(timerId);
        };
    }, 1000)

    
})