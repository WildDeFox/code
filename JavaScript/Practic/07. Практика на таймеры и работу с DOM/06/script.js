// Дан абзац и две кнопки. Сделайте так,
// чтобы по нажатию на первую кнопку в абзаце начал
// тикать таймер от 1 до бесконечности, а по нажатию
// на вторую таймер останавливался.
let p = document.querySelector('p');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');

let timerId 
start.addEventListener('click', function() {
    let count = 1;
    timerId = setInterval(function() {
        p.textContent = count++;
    }, 1000)
})
stop.addEventListener('click', function() {
    clearInterval(timerId);
})