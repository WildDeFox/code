// Навешайте на див обработчик клика.
// В этом обработчике определите, в каком из тегов сработало событие.
let div = document.querySelector('div');
div.addEventListener('click', function(event) {
    if (event.target.matches('div')) {
        console.log('Клик по div');
    }
    if (event.target.matches('ul')) {
        console.log('Клик по ul');
    }
    if (event.target.matches('li')) {
        event.target.textContent += '1';
    }
})