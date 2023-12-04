// Дан инпут. По потери фокуса проверьте введенное в него число.
// Если это число до десяти, то покрасьте инпут в зеленый цвет,
// если от десяти до двадцати - в желтый, а если более двадцати - в красный.
let input = document.querySelector('input');

input.addEventListener('blur', function() {
    let num = Number(input.value);
    if (num < 10) {
        input.dataset.type = 'one';
    } else if (num >= 10 && num < 20) {
        input.dataset.type = 'two';
    } else if (num > 20) {
        input.dataset.type = 'three';
    }
})