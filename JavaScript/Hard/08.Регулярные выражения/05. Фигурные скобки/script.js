// Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{2,4}a/g, '!'));

// Напишите регулярку, которая найдет строки вида 'aba',
// в которых 'b' встречается менее 3-х раз (включительно).
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{1,3}a/g, '!'));

// Напишите регулярку, которая найдет строки вида 'aba',
// в которых 'b' встречается более 4-х раз (включительно).
let str = 'aa aba abba abbba abbbba abbbbba';
console.log(str.replace(/ab{4,}a/g, '!'));