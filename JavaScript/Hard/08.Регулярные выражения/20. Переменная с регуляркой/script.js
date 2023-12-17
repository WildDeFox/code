// Вынесите регулярку в переменную в следующем коде:
// let str = 'a aa aaa aaaa aaaa';
// let res = str.replace(/a+/, '!');
let str = 'a aa aaa aaaa aaaa';
let reg = /a+/;
let res = str.replace(reg, '!');
