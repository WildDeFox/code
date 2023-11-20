let elem1 = document.querySelector('.elem1');
let elem2 = document.querySelector('.elem2');
let elem3 = document.querySelector('.elem3');

elem1.addEventListener('click', function () {
    alert('Красный');
});
elem2.addEventListener('click', function () {
    alert('Синий');
});
elem3.addEventListener('click', function () {
    alert('Желтый');
})