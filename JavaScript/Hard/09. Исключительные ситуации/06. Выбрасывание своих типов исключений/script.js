// Переделайте эту функцию так, чтобы она выбрасывала исключение
// с каким-нибудь придуманными нами типом, например, DivisionByZeroError.
function div(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		throw {name: 'DivisionByZeroError', message: 'Ошибка деления на ноль!'} ;
	}
}

try {
    console.log(div(5, 0))
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}