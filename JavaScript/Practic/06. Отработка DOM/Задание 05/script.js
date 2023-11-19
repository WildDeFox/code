// Даны 4 инпута. В первый инпут вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
input1.addEventListener('blur', function () {
    let arr = this.value.split(' ');
    input2.value = arr[0];
    input3.value = arr[1];
    input4.value = arr[2];
})