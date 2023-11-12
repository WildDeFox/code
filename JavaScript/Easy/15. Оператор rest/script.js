// -- Функция, находящая сумму чисел с помощью операторов rest и spread
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function argNum (...nums) {
    let sum = 0;
    for (let elem of nums) {
        sum+= elem;
    }
    return Math.round(sum / nums.length);
}
console.log(argNum(1, 2, 4, 5, 6, 7, 8));