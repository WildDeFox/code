import { pow2 as square, pow3 as cube, pow4 } from "./math.js";

let result = square(5) + cube(5) + pow4(5);
console.log(result);

let button = document.querySelector('.button');
let list = document.querySelector('.list');

button.addEventListener('click', function() {
    import('./days.js').then(mod => {
        let days = mod.default;
        for (let day of days) {
            let li = document.createElement('li');
            li.textContent = day;
            list.appendChild(li);
        }
    })
})