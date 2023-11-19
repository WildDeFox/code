// -- Получение атрибутов
// Получите значение его атрибута value.
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value);


// -- Установка атрибутов
// Установите его атрибут value в значение 'text'.
let elme1 = document.querySelector('#elem1');
elme1.setAttribute('value', 'text');

// Установите ему атрибут class в значение 'valid'.
elme1.setAttribute('class', 'valid');


// -- Удаление атрибутов
elme1.removeAttribute('value');


// -- Проверка наличия атрибутов
console.log(elme1.hasAttribute('value'));


// -- Пользовательские атрибуты
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', function () {
    elem2.textContent += elem2.dataset.text;
})

// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
let divs = document.querySelectorAll('#elem3 div');
for (let div of divs) {
    div.addEventListener('click', function () {
        this.textContent += this.dataset.num;
    })
}

// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней,
// записывая их в какой-нибудь пользовательский атрибут.
// Пусть по клику на другую кнопку на экран выводится,
// сколько кликов было сделано по первой кнопке.
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function () {
    button1.dataset.num = +button1.dataset.num + 1;
});

button2.addEventListener('click', function () {
    console.log(button1.dataset.num);
});


// -- Обращение к атрибутам через методы
// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num
// запишите порядковый номер этого абзаца. Используйте метод setAttribute.
let elems = document.querySelectorAll('#elem4 p');
for (let [index, elem] of elems.entries()) {
    elem.setAttribute('data-num', index);
}


// -- Манипулирование массивом CSS классов
// Узнайте количество его классов.
let elem5 = document.querySelector('#elem5');
console.log(elem5.classList.length);

// Переберите в цикле его классы.
for(let className of elem5.classList) {
    console.log(className);
}


// -- Добавление CSS классов
// Добавьте ему класс xxx.
elem5.classList.add('xxx')


// -- Удаление CSS классов
// Удалите у него класс www и класс zzz.
elem5.classList.remove('zzz', 'www');


// -- Проверка CSS классов
// Проверьте наличие у него класса ggg.
console.log(elem5.classList.contains('ggg'));


// -- Чередование CSS классов
// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
elem5.classList.toggle('www');