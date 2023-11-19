// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
let links = document.querySelectorAll('.link');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
    for (let link of links) {
        link.textContent = link.textContent + ` (${link.href})`;
    }
})