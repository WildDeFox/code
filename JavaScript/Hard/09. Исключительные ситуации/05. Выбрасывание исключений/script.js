// В JavaScript попытка извлечь корень из отрицательного числа не приводит к выбрасыванию исключения:
// let result = Math.sqrt(-1);
// console.log(result); // выведет NaN
// Напишите свою функцию, которая будет извлекать корень из числа
// и при этом выбрасывать исключение, если корень извлекается из отрицательного числа.
function getSqrt (num) {
    if (num >= 0 ) {
        return Math.sqrt(-1);
    } else {
        throw new Error ('Нельзя извлечь корень из отрицательного числа.');
    }
}

try {
    let result = getSqrt(-1);
    console.log(result);
} catch (error) {
    console.log(error.message);
}