// Дан инпут. В него вводится текст.
// По потери фокуса узнайте количество слов в этом тексте.
let input = document.querySelector('.input');
let elem = document.querySelector('.elem');
input.addEventListener('blur', function () {
    let arr = input.value.split(' ');
    elem.textContent = `Колличество слов в этом инпуте составляет: ${arr.length}`;
})