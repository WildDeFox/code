// Дана кнопка. Дан абзац, текстом которого является число.
// По нажатию на кнопку запустите таймер, который каждую
// секунду будет увеличивать текст абзаца на 1.
let p = document.querySelector('.elem');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    
    setInterval(function() {
        fs = parseInt(p.style.fontSize);
        step = 1;
        p.style.fontSize = (+fs + 1) + 'px';
    }, 1000);
});