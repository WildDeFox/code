let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve('success');
		} else {
			reject(new Error('error'));
		}
	}, 3000);
});

promise.then(
	res => console.log(res),
	err => console.log(err.message),
);

// Первый способ
promise.then(
    null,
    function(error) {
        console.log(error);
    }
);

// Второй способ
promise.catch(
    function(error) {
        console.log(error);
    }
);