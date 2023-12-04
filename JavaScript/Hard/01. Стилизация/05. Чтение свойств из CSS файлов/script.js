let elem = document.querySelector('.elem');
let showStyle = document.querySelector('.showStyle');
let changeStyle = document.querySelector('.changeStyle');

showStyle.addEventListener('click', function() {
    let computerStyle = getComputedStyle(elem);
    console.log(computerStyle.width);
    console.log(computerStyle.fontSize); // Преобразует все значения в абсолютные (в основном в px)!!!
});

// -- НЕ работает. Метод getComputedStyle применяется только для чтения!
// changeStyle.addEventListener('click', function() {
//     let computerStyle = getComputedStyle(elem);
//     computerStyle.width = '500px';
//     computerStyle.height = '600px';
// })