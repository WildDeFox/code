// Получите массив имен функций из строки.
// let str = 'func1() func2() func3()';
// let reg = /func[1-9](?=\(\))/g;
// let res = str.match(reg);
// console.log(res);

// Получите массив имен атрибутов этого тега.
// let str = '<a href="" class="eee" id="zzz">';
// let reg = /[a-z]+(?==)/g;
// let res = str.match(reg);
// console.log(res);

// Получите подстроки, перед которыми стоит символ доллара.
let str = '$aaa $bbb $ccc xxxx';
let reg = /(?<=\$)[a-z]+/g;
let res = str.match(reg);
console.log(res);