// Дан инпут. В него вводится число. По потери фокуса сделайте так,
// чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа.
// Когда отсчет дойдет до нуля - он должен закончится.
let input = document.querySelector('input');
let p = document.querySelector('p');

input.addEventListener('blur', function() {
    let count = Number(input.value);

    timerId = setInterval(function() {
        p.textContent = --count;
        
        if (count == 0) {
            clearInterval(timerId);
        }
    }, 1000);
});