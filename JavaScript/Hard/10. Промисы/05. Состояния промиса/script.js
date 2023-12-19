let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let isError = false;

        if (!isError) {
            resolve([1, 2, 3, 4, 5]);
        } else {
            reject(new Error('Неизвестная ошибка'));
        }
    });
});

setInterval(function() {
    console.log(promise);
}, 1000);