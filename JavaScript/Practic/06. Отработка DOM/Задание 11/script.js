// Даны ссылки. Если ссылка начинается с http://,
// то добавьте ей в конец стрелку → (делается так: &rarr;).
let links = document.querySelectorAll('.link');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    for (let link of links) {
        if (link.href.startsWith("http://")) {
            link.innerHTML = link.innerHTML + `&#8594;`;
        }
    }
})