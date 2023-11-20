// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
let input = document.querySelector('.input');

input.addEventListener('keypress', function(event) {
    console.log(event.key);
    console.log(event.code);
})

// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter.
// Сделайте так, чтобы в этот момент введенный текст попадал в абзац
// под инпутом, а содержимое инпута очищалось.
let input1 = document.querySelector('.input1');
let elem = document.querySelector('.elem');
input1.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        elem.textContent = input1.value;
        input1.value = '';
    }
});