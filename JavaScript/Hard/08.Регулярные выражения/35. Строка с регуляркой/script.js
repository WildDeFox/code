// Вынесите названия доменных зон в отдельную переменную:
// let pat = 'ru|by|ua';
// let reg = new RegExp(`/^[a-z]+\.(${pat})$/`);
// let res = reg.test(str);

// Модифицируйте предыдущую задачу с учетом того, что доменные зоны хранятся в виде массива:
let arr = ['ru', 'by', 'ua'];
let pat = arr.join('|');
let reg = new RegExp(`/^[a-z]+\.(${pat})$/`);
let res = reg.test(str);