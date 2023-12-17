// Перепишите регулярное выражение в виде строки:
let str = '123 456 789';
let reg = new RegExp('[0-9]+', 'g');
let res = str.replace(reg, '!');