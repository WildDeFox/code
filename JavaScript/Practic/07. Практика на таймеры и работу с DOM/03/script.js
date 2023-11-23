// Дан инпут с числом. Сделайте так, чтобы каждую секунду
// в нем появлялся квадрат того числа, которое в нем записано.
let input = document.querySelector('input');

setInterval(function() {
    input.value = Math.sqrt(+input.value);
}, 1000)