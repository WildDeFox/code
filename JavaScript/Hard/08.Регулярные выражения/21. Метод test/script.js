let str = 'http://itechonform.ru';
// Определите, начинается ли переданная строка с 'http://'.
// let reg = /^http:\/\//;
// console.log(reg.test(str));

// Определите, начинается ли переданная строка с 'http://' или с 'https://'.
// let reg = /^(http:\/\/|https:\/\/)/;
// console.log(reg.test(str));

// Определите, заканчивается ли переданная строка расширением 'txt', 'html' или 'php'.
// let reg = /(txt|html|php)$/;
// console.log(reg.test(str));

// Определите, заканчивается ли переданная строка расширением 'jpg' или 'jpeg'.
// let reg = /(jpg|jpeg)$/;
// console.log(reg.test(str));

// Определите, заканчивается ли переданная строка расширением 'jpg', 'jpeg' или 'png'.
// let reg = /(jpg|jpeg|png)$/;
// console.log(reg.test(str));

// Определите, является ли строка 'числом, длиной от 1 до 12 цифр'.
let reg = /[1-9]{1,12}/;
console.log(reg.test(str));