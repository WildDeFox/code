let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve('success');
		} else {
			reject(new Error('error is promise'));
            // или
            // throw new Error('error is promise');
		}
	}, 3000);
});