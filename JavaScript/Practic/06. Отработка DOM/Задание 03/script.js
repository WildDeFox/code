// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
let input = document.querySelector('.input');
input.addEventListener('blur', function () {
    let str = input.value;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
})