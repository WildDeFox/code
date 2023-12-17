function saveData(json) {
	let arr = JSON.parse(json);
	
	for (let i = 0; i < arr.length; i++) {
		localStorage.setItem(i, arr[i]);
	}
}

try {
    saveData('{1, 2, 3, 4, 5}')
} catch (error) {
    if (error.name == 'QuotaExceededError') {
        console.log('Ошибка переполнения хранилища!');
    }

    if (error.name == 'SyntaxError') {
        console.log('Некорректный JSON');
    }
}