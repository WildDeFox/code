// Получите массив доменных имен из этой строки.
// let str = 'site.ru sss site.com zzz site.net';
// let res = str.match(/(\w+)\.(\w+)/g);
// console.log(res);

// Найдите сумму всех чисел этой строки.
let str = 'a1b c34d x567z';
let res = str.match(/\d/g);
console.log(res);
let sum = 0
for (let i of res) {
    sum += Number(i);
}
console.log(sum);