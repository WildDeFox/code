// -- Передача функций параметрами
// Сделайте функцию test, параметрами принимающую 3 функции.
// Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию,
// возвращающую 2, третьим - функцию, возвращающую 3.
// Выведите в консоль сумму результатов функций.
// function test (func1, func2, func3) {
//     console.log(func1() + func2() + func3());
// }
// function func1 () {
//     return 1;
// }
// function func2 () {
//     return 2;
// }
// function func3 () {
//     return 3;
// }
// test(func1, func2, func3);


// -- Именованные функции-параметры
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
// function test (func1, func2, func3) {
//     return func1() + func2() + func3();
// }
// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
// Пусть первая функция возвращает 1, вторая - 2, а третья - 3.
// Передайте эти функции параметром в функцию test из предыдущей задачи.
// let func1 = function () {
//     return 1;
// }
// let func2 = function () {
//     return 2;
// }
// let func3 = function () {
//     return 3;
// }
// let result = test(func1, func2, func3);
// console.log(result);
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.


// -- Параметры передаваемых функций
// Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
// function test(func1, func2) {
// 	console.log(func1(2) + func2(3));
// }
// let func = function (num) {
//     return num ** 3;
// }
// test (func, func)
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной,
// а была определена как Function Declaration с именем func.
// Переделайте передаваемую функцию на Function Expression с тем же именем func.
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
// При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3.


// -- Передача числа параметром
// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
// Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию,
// возводящую число в квадрат, а третьим - функцию, возводящую число в куб.
// Выведите результат работы в консоль.
// let result = test (3, function (num) {
//     return num ** 2;
// }, function (num) {
//     return num ** 3;
// });
// console.log(result);


// -- Применение передачи функции параметром
// Сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию.
// Переданная функция должна будет применится к каждому элементу массива:
// function test (arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let result = test ([1, 2, 3, 4], function (num) {
//     return num ** 3;
// });
// console.log(result);


// -- Вложенные функции
// Сделайте функцию func, которая параметрами будет принимать два числа,
// а возвращать сумму квадрата первого числа с кубом второго числа.
// Сделайте для этого вспомогательную функцию square, возводящую число в квадрат,
// и вспомогательную функцию cube, возводящую число в куб.
// function func (num1, num2) {
//     function square (num) {
//         return num ** 2;
//     }
//     function cube (num) {
//         return num ** 3;
//     }
//     return square(num1) + cube(num2);
// }
// console.log(func(5, 10));


// -- Функция, возвращающая функцию
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1.
// Сделайте аналогичную функцию func2, возвращающую число 2.
// Найдите сумму результатов этих функций.
// function func1 () {
//     return function () {
//         return 1;
//     }
// }
// function func2 () {
//     return function () {
//         return 2;
//     }
// }
// console.log(func1()() + func2()());


// -- Любой уровень вложенности
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
// function func () {
//     return function () {
//         return function () {
//             return function () {
//                 return function () {
//                     return "!";
//                 }
//             }
//         }
//     }
// }
// console.log(func()()()()());


// -- Параметры возвращаемой функции
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
// function func (num) {
//     return function (num1) {
//         return function (num2) {
//             return num + num1 + num2;
//         }
//     }
// }
// console.log(func(2)(3)(4));

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
// function func(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function () {
//                     return [num1, num2, num3, num4];
//                 }
//             }
//         }
//     }
// }
// let result = func(2)(3)(4)(5)();
// console.log(result);


// -- Функции-коллбэки
// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
function each (arr, callback) {
    let result = [];
    for (let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = each(arr, function (num){
    return num * 2;
})
console.log(result);
