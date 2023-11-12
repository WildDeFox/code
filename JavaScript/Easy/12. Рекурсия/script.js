// -- Пример с параметром через рекурсию
// С помощью рекурсии выведите элементы массива в консоль.
// function func (arr) {
//     console.log(arr.shift());

//     if (arr.length != 0) {
//         func(arr);
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// func(arr);


// -- Сумма элементов массива при рекурсии
// С помощью рекурсии найдите сумму квадратов элементов этого массива.
// function getSum(arr) {
//     let sum = arr.shift();

//     if (arr.length != 0) {
//         sum += getSum(arr);
//     }
    
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(getSum(arr));
