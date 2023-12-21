let path = 'http://site.ru:3000/dir/eee/page.html#show?a=1&b=2&c=3';
let url = new URL(path);

// Протокол
console.log(url.protocol);

// Хост
console.log(url.host);

// Имя хоста
console.log(url.hostname);

// Порт
console.log(url.port);

// Путь
console.log(url.pathname);

// Хеш
console.log(url.hash);

// GET параметры
console.log(url.search);