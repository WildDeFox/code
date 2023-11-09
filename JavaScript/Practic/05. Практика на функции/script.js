// -- Практика на фукции
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// function sumArr (arr) {
//     let result = 0;
//     for (let elem of arr) {
//         result += elem
//     }
//     return result;
// }
// console.log(sumArr([1, 2, 3, 4, 5]));


// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// function delitel (num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(delitel(32));


// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function arrStr (str) {
//     return str.split('');
// }
// console.log (arrStr('Привет Мир!'));


// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// function revertStr (str) {
//     let result = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         result.push(str[i]);
//     }
//     return result;
// }
// console.log(revertStr("Привeт"));


// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function strUpp (str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
// }
// console.log(strUpp("привет"));


// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// function addArr(num) {
//     let result = []
//     for (let i = 1; i <= num; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(addArr(20));
