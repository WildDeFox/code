// Дан инпут. В него вводится число.
// Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
let input = document.querySelector('.input');
input.addEventListener('blur', function () {
    let numStr = this.value;
    for (let i = 0; i < numStr; i++) {
        if (numStr[i] == 3) {
            console.log('Данное число содержит в себе цифру 3');
            break;
        } else {
            console.log('Увы...');
        }
    }
})