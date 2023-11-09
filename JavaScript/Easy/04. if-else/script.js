// -- Проверка на равенство
// Проверьте, что переменная test равна 10.
// let test = 20;
// if (test == 10) {
//     console.log('+++');
// }


// -- Проверка на неравенство
// Проверьте, что переменная test не равна 10.
// let test = 12;
// if (test != 10) {
//     console.log('+++');
// }


// -- Логическое И
// Проверьте, что переменная num больше нуля и меньше 5.
// let num = 5;
// if (num > 0 && num < 5) {
//     console.log('Good');
// }


// -- Логическое ИЛИ
// ||


// -- Конструкция else if
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = 23;
// if (day > 0 && day <= 10) {
//     console.log('Первая декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада');
// } else {
//     console.log('Неверные данные!');
// }


// Вложенные конструкции if-else
// Пусть в переменной num хранится число.
// Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа.
// Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна,
// в противном случае выведите сообщение о том, что сумма цифр двухзначна.
// let num = 99;
// if (num >= 10 && num <= 99) {
//     let result = +String(num)[0] + +String(num)[1];
//     if (result <= 9) {
//         console.log("Сумма чисел однознача: " + result);
//     } else {
//         console.log('Сумма чисел двухзначна: ' + result);
//     }
// } else {
//     console.log("Неверные данные!");
// }


// -- Конструкция switch-case
// Перепишите следующий код через switch-case:
// let lang = 'ru';
// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }
// let lang = 'ru';
// switch (lang) {
//     case 'ru':
//         console.log('рус');
//         break;
//     case 'en':
//         console.log('анг');
//         break
//     case 'de':
//         console.log('нем');
//         break;
//     default:
//         console.log('язык не поддерживается');
// }


// -- Тернарный оператор
// Синтаксис: let переменная = условие ? значение1 : значение2;
// Перепишите следующий код через тернарный оператор:
// let num = 1;
// let res;
// if (num >= 0) {
// 	res = '1';
// } else {
// 	res = '2';
// }
// console.log(res);
// let num = 1;
// let res = (num >= 0) ? '1' : '2';
// console.log(res)


// -- Функция confirm
// Спросите у пользователя, есть ли ему уже 18 лет.
// Если есть - выведите на экран алерт с текстом для взрослых,
// а если нет, выведите сообщение о том, что доступ пользователю запрещен.
// let ok = confirm('Вам есть 18 лет?');
// if (ok) {
//     alert('Голые бубесы');
// } else {
//     alert('Контент для взрослых');
// }


// -- Проверка длины строк и массивов
// В переменной arr содержится некоторый массив с числами.
// Напишите условие, которое проверит, что в массиве 3 элемента.
// Если это так, выведите на экран сумму элементов массива.
// let arr = [1, 2, 3];
// if (arr.length == 3) {
//     console.log(arr[0] + arr[1] + arr[2]);
// }


// -- Проверка символов строки
// Дана переменная, содержащая некоторую строку.
// Проверьте, что эта строка начинается на символ 'a'.
// let str = 'abdser';
// if (str[0] == 'a') {
//     console.log('Страка начинаестя с a');
// }

// Дана переменная, содержащая некоторую строку.
// Проверьте, что эта строка заканчивается на символ 'x'.
let str = 'fsdfsxfd';
if (str[str.length - 1] == 'x') {
    console.log('Строка заканчивется на X');
} else {
    console.log('Строка НЕ заканчивается на x');
}