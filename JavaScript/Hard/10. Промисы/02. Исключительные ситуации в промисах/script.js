// Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5.
// Оберните все это в промис. Пусть промис своим результатом возвращает результат
// деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой,
// если произошло деление на ноль, и с успехом во всех остальных случаях.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

let promise = new Promise(function(resolve, reject) {
    setInterval(function() {
        let num = getRandomInt(0, 5);
        if (num !== 0) {
            resolve(1 / num);
        } else {
            reject('Нельзя делить на ноль!');
        }
    }, 1000);
});

promise.then(function(result) {
    console.log(result);;
}, function(error) {
    console.log(error);
});
