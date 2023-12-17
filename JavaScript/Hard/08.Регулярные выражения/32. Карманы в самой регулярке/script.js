// Найдите все подстроки, в которых есть три одинаковые буквы подряд.
// let str = 'aaa bbb ccc xyz';
// console.log(str.replace(/([a-z])\1\1/g, '!'));

// Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
let str = 'a aa aaa aaaa aaaaa';
console.log(str.replace(/([a-z])\1+/g, '!'));