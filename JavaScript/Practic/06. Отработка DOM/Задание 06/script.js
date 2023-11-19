// Дан инпут. В него вводится ФИО через пробел.
// ФИО вводится с маленькой буквы. Сделайте так,
// чтобы по потери фокуса инпутом, введенные фамилия,
// имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
let input = document.querySelector('.input');
input.addEventListener('blur', function () {
    let arr = input.value.split(' ');
    let newArr = arr.map(function (elem) {
        return elem.slice(0, 1).toUpperCase() + elem.slice(1);
    });
    this.value = newArr.join(' ');
})