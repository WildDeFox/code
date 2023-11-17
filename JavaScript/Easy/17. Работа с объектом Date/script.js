let date = new Date();

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
// -- Работа с объектом Date
// Выведите на экран текущий день.
// console.log(date.getDate());

// Выведите на экран текущий месяц.
// console.log(date.getMonth());

// Выведите на экран текущий год.
// console.log(date.getFullYear());


// -- Форматирование даты
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
// console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear());


// -- Смена формата даты
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
// let oldDate = '2023-11-13';
// let newDate = oldDate.split('-').reverse().join('.');
// console.log(newDate);


// -- Получения дня недели
// Выведите на экран номер текущего дня недели.
// console.log(date.getDay());
// function isWeekend () {
//     let num = date.getDay();
//     let count = 0;
//     if (num == 0 && num == 7) {
//         console.log('Ура!!! Сегодня выходной!');
//     } else {
//         console.log('Как грустно((( Сегодня рабочий день!');
//         getDayForWeekend();
//     }
// }
// Определите сколько дней осталось до ближайшего воскресенья.
// function getDayForWeekend() {
//     let day = date.getDay();
//     let count = 0;
//     for (let i = day; i <= 6; i++) {
//         count++;
//     }
//     console.log(`До выходных осталось: ${count} дней.`);
// }
// isWeekend();


// -- Вывод частей даты словом
// Пусть дан следующий массив:
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// Выведите с помощью этого массива название текущего месяца.
// let month = date.getMonth();
// console.log(months[month]);


// -- Установка времени в объекте Date
// Узнайте, какой день недели был в ваш день рождения.
// !!!! при передаче параметром отсчет месяцев начинается с нуля.
// let oldDate = new Date(1998, 11, 24);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let day = oldDate.getDay();
// console.log(days[day]);


// -- Получение времени в формате timestamp
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
// let newDate = new Date(2025, 0, 1);
// console.log(newDate.getTime());


// -- Разность между датами в формате timestamp
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
// let oldDate = new Date(1988, 2, 1);
// let newOldDate = new Date(2000, 0, 10);
// let diff = newOldDate.getTime() - oldDate.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
// let nowDate = new Date();
// let searchDay = new Date(1998, 11, 24);
// let diff = nowDate.getTime() - searchDay.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 30));


// -- Разница между объектами с датой
// let oldDate = new Date(2000, 8, 1);
// let newDate = new Date(2010, 1, 15);
// let diff = newDate - oldDate;
// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
// console.log(diff);

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
// console.log(diff / (1000 * 60 * 60 * 24));

// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
// console.log(diff / (1000 * 60 * 60 * 24 * 366));


// -- Нахождение последнего дня месяца
// Оформите способ решения проблемы в виде функции, которая параметрами будет
// принимать месяц и год и возвращать номер последнего дня этого месяца.
// function lastDay (year, month) {
//     let date = new Date(year, month + 1, 0);
//     console.log(date.getDate());
// }
// lastDay(2023, 11);


// -- Определение високосного года
// Сделайте функцию isLeap, которая параметром будет принимать год
// и возвращать true, если этого год високосный, и false - если нет.
// function isLeap (year) {
//     let date = new Date (year, 2, 0);
//     if (date.getDate() == 29) {
//         return true;
//     } else {
//         return false;
//     }
// }


// -- Проверка корректности даты
// Сделайте функцию checkDate, которая будет выполнять описанную проверку.
// Пусть функция возвращает true, если дата корректна и false, если нет.
// function checkDate (year, month, day) {
//     let date = new Date(year, month, day);
//     if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkDate(2025, 0, 31));
// console.log(checkDate(2025, 0, 32));
