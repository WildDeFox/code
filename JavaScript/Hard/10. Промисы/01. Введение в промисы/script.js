let promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('test string');
    }, 3000);
});

promise.then(function(result) {
    console.log(result);
});