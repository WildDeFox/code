// Поменяйте местами цифры во всех двухзначных числах.
// let str = '12 34 56 78';
// let res = str.replace(/(\d)(\d)/g, '$2$1');
// console.log(res);

// Преобразуйте эту дату в '2025.12.31'.
let str = '31.12.2025';
let res = str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3.$2.$1');
console.log(res);