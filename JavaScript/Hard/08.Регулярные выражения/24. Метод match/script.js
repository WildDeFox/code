// Найдите подстроку, содержащую цифры.
let str = 'aaa 123 bbb';
let res = str.match(/\d{3}/);
console.log(res);

// Найдите позицию первой цифры.
console.log(res.index);