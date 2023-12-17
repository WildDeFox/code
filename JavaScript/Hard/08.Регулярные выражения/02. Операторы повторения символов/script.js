// Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону:
// буква 'a', буква 'b' любое количество раз, буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab+a/g, '!'));

// Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' по шаблону:
// буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab*a/g, '!'));

// Напишите регулярку, которая найдет строки 'aa', 'aba' по шаблону:
// буква 'a', буква 'b' один раз или ниодного, буква 'a'.
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab?a/g, '!'));