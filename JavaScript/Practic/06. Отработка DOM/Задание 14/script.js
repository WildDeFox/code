// Дан инпут. Даны абзацы.
// Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
let input = document.querySelector('.input');
let elems = document.querySelectorAll('.elem');

for (let elem of elems) {
    elem.addEventListener('click', getCount);
    
}

function getCount () {
    input.value = +input.value + 1;
}