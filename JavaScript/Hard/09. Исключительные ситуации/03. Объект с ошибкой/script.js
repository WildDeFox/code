// Специально создайте исключительную ситуацию,
// связанную с попыткой разбора некорректного JSON.
// Выведите в консоль имя и текст этой ошибки.
function getArr(json) {
	return JSON.parse(json);
}

try {
    console.log(getArr('{1, 2, 3, 4, 5}'));
} catch (error) {
    console.log(error.name); // имя ошибки
    console.log(error.message); // текст ошибки
}