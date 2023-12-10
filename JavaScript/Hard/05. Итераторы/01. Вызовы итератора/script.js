// Получите итератор коллекции Map.
// Последовательно вызывайте его, пока элементы коллекции не закончатся.
let map = new Map;
map.set('123', '123');
map.set('132', '132');
map.set('321', '321');

let iter = map[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());