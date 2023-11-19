// -- Стилизация элементов через атрибут style
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    elem.style.width = '200px';
    elem.style.height = '200px';
    elem.style.border = '1px solid black';
});


// -- Стилизация свойств с дефисом
button.addEventListener('click', function () {
    elem.style.backgroundColor = 'red';
})