// Пусть даны 3 массива. Создайте коллекцию Map,
// сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];
let map = new Map;
map.set(arr1, 'arrow_1');
map.set(arr2, 'arrow_2');
map.set(arr3, 'arrow_3');


// Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.
let keys = map.keys();
let values = map.values();
let entries = map.entries();

for (let key of keys) {
    console.log(key);
}

for (let value of values) {
    console.log(value);
}

for (let entrie of entries) {
    console.log(entrie);
}