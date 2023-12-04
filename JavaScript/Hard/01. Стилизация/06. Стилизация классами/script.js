// Даны абзацы с числами. Переберите эти абзацы циклом и абзацы,
// содержащие четные числа, покарасьте в красный цвет,
// а содержащие нечетные - в зеленый.
let ps = document.querySelectorAll('p');

for (let p of ps) {
    if (Number(p.textContent) % 2 === 0) {
        p.classList.add('good')
    } else {
        p.classList.add('error');
    }
}