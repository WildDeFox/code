// Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
// let str = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str.replace(/a[.+*]a/g, '!'));

// Напишите регулярку, которая найдет строки по шаблону:
//  буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.
let str = 'xaz x.z x3z x@z x$z xrz';
console.log(str.replace(/x[^.@$]z/g, '!'));