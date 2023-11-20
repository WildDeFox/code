// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет,
// но только если в момент клика нажата клавиша Alt.
let button = document.querySelector('.button');
button.addEventListener('click', function (event) {
    if (event.altKey) {
        this.style.backgroundColor = 'red';
    }
});


// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1,
// если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
let ul = document.querySelectorAll('#elem li');
for (let li of ul) {
    li.addEventListener('click', function (event) {
        if (event.ctrlKey) {
            li.textContent += '1';
        };
        if (event.shiftKey) {
            li.textContent += '2';
        }
    })
}