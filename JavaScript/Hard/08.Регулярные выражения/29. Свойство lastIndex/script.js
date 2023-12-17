// Найдите в ней все подстроки с временем, начиная с пятого символа.
let str = '12:37 15:48 17:59';
let reg = /(\d+):(\d+)/g;
reg.lastIndex = 5;
let res = reg.exec(str);
console.log(res);