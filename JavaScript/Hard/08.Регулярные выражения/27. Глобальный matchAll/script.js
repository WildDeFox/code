// Найдите в ней все подстроки с временем и для каждого найденного разложите часы и минуты по карманам.
// let str = '12:37 15:48 17:59';
// let res = str.matchAll(/(\d+)\:(\d+)/g);
// for (let result of res) {
//     console.log(result);
// }

// Получите массив доменных имен из этой строки, положив в этом массиве имя домена и его зону в разные карманы.
let str = 'site.ru sss site.com zzz site.net';
let res = str.matchAll(/(\w+)\.(\w+)/g);
for (let result of res) {
    console.log(result);
}