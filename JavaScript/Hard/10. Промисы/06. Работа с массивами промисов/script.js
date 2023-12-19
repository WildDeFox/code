// Сделайте функцию, возвращающую промис, внутри которого установлена
// случайная задержка от 1 до 10 секунд. Пусть своим результатом промис
// возвращает эту задержку. С помощью цикла и вашей
// функции заполните массив 10-ю промисами.

// Функция которая генерирует тестовый промис
function randomPromise() {
    let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return new Promise(resolve => setTimeout(() => resolve(random), Number(random + '000')))
}

// Заполняем массив тестовыми промисами
let arrPromise = [];
for (let i = 0; i < 10; i++) {
    arrPromise.push(randomPromise());
}

// Выполнения первого промиса
Promise.race(arrPromise).then(function(result){
    console.log(result);
});

// выполнения всех промисов
Promise.all(arrPromise).then(function(result) {
    console.log(result);
})