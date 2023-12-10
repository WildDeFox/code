// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';

// for (let key in obj) {
//     console.log(key);
// }

let obj = {a: 1, b: 2, c: 3};
let sym = Symbol();
obj[sym] = function(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
        console.log(elem);
    }
}

let arr = [1, 2, 3, 4];
let sum = obj[sym](arr);
console.log(sum);