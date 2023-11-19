// Даны несколько абзацев с числами. По нажатию на
// любой абзац запишите в него квадрат числа, которое в нем находится.
let elems = document.querySelectorAll('.elem');
for (let elem of elems) {
    elem.addEventListener('click', function() {
        this.textContent = Number(this.textContent) ** 2;
    })
}