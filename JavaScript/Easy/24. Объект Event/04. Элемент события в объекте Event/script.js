// Привяжите к тегу ul обработчик клика. В этом обработчике
// проверяйте с помощью свойства tagName, по какому тегу был клик.
// Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак.
// А если клик был по тегу ul - выведите информацию об этом в консоль.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function (event) {
    if (event.target.tagName == 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName == 'UL') {
        console.log('Вы кликнули по списку.')
    }
})