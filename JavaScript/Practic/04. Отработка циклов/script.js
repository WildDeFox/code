// Выведите с помощью цикла столбец чисел от 1 до 100.
// for (let i = 1; i < 101; i++) {
//     console.log(i);
// }


// Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }


// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for (let i = 2; i < 101; i += 2) {
//     console.log(i);
// }


// Заполните массив 10-ю иксами с помощью цикла.
// let arr = [];
// for(let i = 1; i < 11; i++) {
//     arr.push('x');
// }
// console.log(arr);


// Заполните массив числами от 1 до 10 с помощью цикла.
// let arr = [];
// for (let i = 1; i < 11; i++) {
//     arr.push(i);
// }
// console.log(arr);


// Дан массив с числами.
// С помощью цикла выведите только те элементы массива,
// которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, 34, 213, 24, 6, 7, 8];
// for(let elem of arr) {
//     if (elem > 0 && elem < 10) {
//         console.log (elem);
//     }
// }


// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// let arr = [1, 2, 3, 5, 6, 7, 8];
// let flag = false;
// for (let elem of arr) {
//     if (elem === 6) {
//         flag = true;
//     }
// }
// if (flag) {
//     console.log("В массиве есть цифра 5!");
// } else {
//     console.log("Увы в массиве нет цифры 5!")
// }


// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let arr = [1, 2, 3, 4, 5, 6];
// let result = 0;
// for(let elem of arr) {
//     result += elem;
// }
// console.log(result);


// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5, 6];
// let result = 0;
// for (let elem of arr) {
//     result += elem ** 2;
// }
// console.log (result)


// Дан массив с числами. Найдите среднее арифметическое его элементов.
// let arr = [1, 2, 3, 5, 6, 7, 8];
// let result = 0;
// for(let elem of arr) {
//     result += elem;
// }
// console.log(result / arr.length);


// Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.
// let num = 10;
// let result = 1;
// for (let i = 1; i <= num; i++) {
//     result *= i;
// }
// console.log(result);


// Заполните массив числами от 10 до 1 с помощью цикла.
// let arr = [];
// for (let i = 10; i > 0; i--) {
//     arr.push(i);
// }
// console.log(arr);


// Дан массив с числами.
// Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for(let elem of arr) {
//     if (elem % 2 === 0) {
//         result += elem;
//     }
// }
// console.log(result)


// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let elem of arr) {
//     let str = String(elem);
//     if (str[0] == '1' || str[0] == '2' || str[0] == '5') {
//         console.log(elem);
//     }
// }


// Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [1, 2, 4, 5, 6, 8];
// for (let i = arr.length -1 ; i >= 0; i--) {
//     console.log (arr[i]);
// }


// Дан массив с числами.
// С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [1, 1, 2, 4, 6, 7, 8, 3];
// for (let i = 0; i < arr.length; i++) {
//     if (i == arr[i]) {
//         console.log(arr[i]);
//     }
// }


// Дан массив с числами.
// С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки.
// Используйте для этого тег br.
// let arr = [1, 2, 4, 5, 7, 8, 9];
// for (let elem of arr) {
//     document.write(elem + '<br>');
// }


// Дан массив с числами.
// С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [1, 2, 4, 6, 8, 9, 23, 43, 63];
// for (let elem of arr) {
//     document.write('<p>' + elem + '</p>');
// }