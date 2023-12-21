let paramsString = 'a=1&b=2&c=3';
let searchParams = new URLSearchParams(paramsString);

// Получение значения параметра
let res1 = searchParams.get('a');
console.log(res1);

// Проверка наличия параметра
let res2 = searchParams.has('a');
console.log(res2);

// Преобразование в строку
console.log(searchParams.toString());

// Изменение параметров
searchParams.set('b', 'x');

// Добавление параметров
searchParams.set('d', '4');
searchParams.append('i', '4');

// Удаление параметров
searchParams.delete('i');

// Перебор параметров циклом
for (let param of searchParams) {
    console.log(param);
}