// Положите часы, минуты и секунды в отдельные именованные карманы.
let str = '12:59:59';
let reg = /(?<hour>\d{2}):(?<minut>\d{2}):(?<secund>\d{2})/;
let res = str.match(reg);
console.log(res.groups);