// Найдите в ней все подстроки с временем и для каждого найденного разложите часы, минуты и секунды по карманам.
let str = '12:37:57 15:48:58 17:59:59';
let reg = /(\d+):(\d+):(\d+)/g;

let res;
while(res = reg.exec(str)) {
    console.log(res);
}