// Скрипт для теста переполнения хранилища
// let str = '';
// for (let i = 1; i <= 6 * 10 ** 6; i++) { // формируем строку более 5 мб
// 	str += '+';
// }
// localStorage.setItem('key', str); // пытаемся записать в хранилище

// Оберните этот код в конструкцию try-catch.
// В блоке catch выведите сообщение о переполнении хранилища.
// Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.
// try {
//     localStorage.setItem('key', str);
// } catch (error) {
//     alert('Невозможно выполнить операцию');
// }


// Дан JSON, внутри которого хранится массив.
// Если этот JSON корректный, то выведите элементы массива в виде списка ul.
// Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.
let json = '[1,2,3,4,5]';
let list = document.querySelector('.list');

try {
    let arr = JSON.parse(json);
    for (let elem of arr) {
        let li = document.createElement('li');
        li.textContent = elem;
        list.appendChild(li);
    }
 } catch (error) {
    alert('Ошибка преобразования JSON');
}
