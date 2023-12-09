// let ps = document.querySelectorAll('p');
// let map = new Map;

// let i = 1;
// for (let p of ps) {
//     map.set(p, i++);
// }

// for (let p of ps) {
//     p.addEventListener('click', function() {
//         this.textContent = this.textContent + map.get(this);
//     });
// }

// Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map,
// ключами в которой будут инпуты, а значением - их порядковый номер на странице.
// Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.
// let inputs = document.querySelectorAll('input');
// let map = new Map;

// let count = 1;
// for (let input of inputs) {
//     map.set(input, count++);
// }

// for (let input of inputs) {
//     input.addEventListener('click', function() {
//         this.value = map.get(this);
//     });
// }


// Даны инпуты. В каждый инпут можно ввести число.
// Пусть по нажатию на Enter инпут запоминает введенное число.
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился
// массив всех введенных ранее в инпут чисел.
let inputs = document.querySelectorAll('input');
let map = new Map;

for (let input of inputs) {
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            map.set(this, this.value);
            this.value = ''
        }
    });

    input.addEventListener('blur', function() {
        console.log(map);
    })
}