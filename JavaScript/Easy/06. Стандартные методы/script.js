// -- Степень и корень
// Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10));

// Найдите квадратный корень из 245.
// console.log(Math.sqrt(245));

// Найдите квадратный корень из суммы кубов его элементов.
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = 0;
// for (let elem of arr) {
//     result = Math.pow(elem, 3);
// }
// console.log(Math.sqrt(result));


// -- Функции округления
// Math.round выполняет округление до ближайшего целого числа по правилам математического округления.
// Math.ceil производит округление дробного числа до целого всегда в большую сторону.
// Math.floor производит округление числа до целых всегда в меньшую сторону.
// toFixed производит округление числа до указанного знака в дробной части.
// toPrecision округляет число до заданного знака.

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// console.log(Math.round(Math.sqrt(379)));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));


// -- Экстремальные числа
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));


// -- Рандом 
// Выведите на экран случайное целое число от 1 до 100.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + 1;
// }
// console.log(getRandomInt(1, 10));

// С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(getRandomInt(1, 100));
// }
// console.log(arr);


// -- Модули
// Даны переменные a и b. Найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 2;
// let b = 5;
// console.log(Math.abs(a - b));


// -- Регистр символов
// Дана строка 'js'. Сделайте из нее строку 'JS'.
// console.log('js'.toUpperCase());

// Дана строка 'JS'. Сделайте из нее строку 'js'.
// console.log('JS'.toLowerCase());


// -- Вырезание строк
// Дана строка 'я учу javascript!'.
// Вырежьте из нее слово 'учу' и слово 'javascript'
// let str = 'я учу javascript!';
// console.log(str.slice(2, 5));


// -- Поиск по строкам
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = 'http://itechnoform.ru/index.html';
// console.log(str.startsWith('http://'));

// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
// console.log(str.endsWith('.html'));


// -- Замена частей строки
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
// let elem = '-';
// let str = '1-2-3-4-5';
// while(str.includes(elem)) {
//     str = str.replace(elem, '.');
// }
// console.log(str);


// -- Части строк
// Дана строка '1-2-3-4-5'.
// С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);

// Дана строка '12345'.
// С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// С помощью метода join слейте его в строку '1-2-3-4-5'.
// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);


// -- Граничные элементы
// Выведите на экран первый элемент этого массива.
// let arr = [1, 2, 3];
// console.log(arr.shift());

// Выведите на экран последний элемент этого массива.
// console.log(arr.pop());

// Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);


// - Части массивов
// let arr = [1, 2, 3, 4, 5];
// let new_arr = arr.slice(0, 3);
// console.log(new_arr);


// -- Массив ключей объекта
// Получите массив ключей.
let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
console.log(keys);