// Дана функция, преобразующая JSON в массив:
function getArr(json) {
	return JSON.parse(json);
}

// В следующем коде из JSON получают массив:
try {
    console.log(getArr('[1,2,3,4,5]'));
} catch (error) {
    console.log('Возникла ошибка');
}

// Оберните вызов функции в конструкцию try-catch.