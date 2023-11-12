// -- Метод map для перебора массива
// Дан массив с числами.
// Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function(elem){
//     return Math.sqrt(elem);
// });
// console.log(newArr);

// Дан массив со строками.
// Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// let arr = ['123', '456', '789'];
// let newArr = arr.map(function(elem) {
//     return elem + '!';
// });
// console.log(newArr);

// Дан массив со строками.
// Используя метод map переверните символы каждой строки в обратном порядке.
// let arr = ['123', '456', '789'];
// let newArr = arr.map(function(elem) {
//     let subStr = '';
//     for (let i = elem.length - 1; i >= 0; i--) {
//         subStr += elem[i]
//     }
//     return subStr;
// });
// console.log(newArr);

// let arr = ['123', '456', '789'];
// let newArr = arr.map(function(elem) {
//     let subArr = [];
//     for(let i = 0; i < elem.length; i++) {
//         subArr.push(elem[i]);
//     }
//     return subArr;
// })
// console.log(newArr);


// -- Ключ элемента
// Дан массив с числами.
// Используя метод map запишите в каждый элемент массива значение этого элемента,
// умноженное на его порядковый номер в массиве.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map(function(elem, index) {
//     return elem * index;
// })
// console.log(newArr);


// -- Метод forEach для перебора массива
// Дан массив с числами.
// Используя метод forEach найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(function(elem){
//     sum += elem;
// });
// console.log(sum);


// -- Метод filter для фильтрации массива
// Дан массив с числами. Оставьте в нем только положительные числа.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter(function(elem) {
//     if (elem % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newArr);

// Дан массив с числами. Оставьте в нем только отрицательные числа.
// let arr = [1, -1, 2, 3, -3, -4, -5];
// let newArr = arr.filter(elem => elem < 0);
// console.log(newArr);

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// let arr = [1, 2, -2, 20, 40, 5, 6, 7];
// let newArr = arr.filter(elem => elem > 0 && elem < 10);
// console.log(newArr)

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['123', 'Привет!', 'Как дела!', 'Неизвестная строка'];
// let newArr = arr.filter(elem => elem.length > 5);
// console.log(newArr);

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((elem, index) => elem * index < 30);
// let newArr = arr.filter(function (elem, index) {
//     if (elem * index < 30) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(newArr);


// -- Метод every для проверки массива
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let arr = [1, -2, 4, 6, 7];
// let result = arr.every(function (elem) {
//     if (elem < 0) {
//         return false;
//     } else {
//         return true;
//     }
// });
// console.log(result);

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// let arr = [1, 2, 4, 5, 6, 7, 8, 9];
// let result = arr.every(function (elem, index){
//     if (elem * index < 30) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(result);


// -- Метод some для проверки массива
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// let arr = [-1, -2, -3, 4];
// let result = arr.some(elem => elem > 0);
// console.log(result);

// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// let arr = [1, 2, 4, 5, 6, 7, 8, 9];
// let result = arr.some((elem, index) => elem * index > 30);
// console.log(result);