// Дан инпут. В него вводятся числа через запятую.
// По потери фокуса найдите среднее арифметическое
// этих чисел (сумма делить на количество).
let input = document.querySelector('.input');
input.addEventListener('blur', function () {
    let arrNum = input.value.split(',');
    let sum = 0;
    for (let num of arrNum) {
        sum += Number(num);
    }
    console.log(sum / arrNum.length);
})