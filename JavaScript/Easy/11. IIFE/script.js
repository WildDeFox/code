// -- Вызов функции на месте
// +function() {
// 	console.log('!'); // выведет '!'
// }();


// -- Присваивание функции в переменную
// let result = function() {
// 	return '!';
// }();
// console.log(result); // выведет '!'


// -- Применение вызова функции на месте
// let sum = 1 + function() {
// 	return 2;
// }();
// console.log(sum); // выведет 3


// -- Круглые скобки в IIFE
// (function() {
// 	console.log('!');
// })();


// -- Параметры функции при вызове на месте
// (function(str) {
// 	console.log(str); // выведет '!!!'
// })('!!!');


// -- Множественные вызовы IIFE
// Допишите следующий код так, чтобы его запуск алертом выводил '!':
// (function() {
// 	return function () {
//         return function () {
//             console.log('!');
//         }
//     }
// })()()();

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
// (function(num1) {
// 	return function (num2) {
//         console.log (num1 + num2);
//     }
// })(1)(2);

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел
// (function(num1) {
// 	return function (num2) {
//         return function (num3) {
//             console.log (num1 + num2 + num3);
//         }
//     }
// })(1)(2)(3);


// -- Замыкания и вызов функции на месте
// Реализация счетчика
let count = (function () {
    let num = 1;
    return function () {
        if (num == 5) {
            console.log(num);
            num = 1;
        } else {
            console.log (num);
            num++;
        }
    }
})();
count();
count();
count();
count();
count();
count();
count();
count();