let image = document.createElement('img');
image.src = 'img.png';

image.addEventListener('load', function() {
    document.appendChild(image);
});

image.addEventListener('error', function() {
    console.log('image loading error');
})


function loadImage (path) {
    return new Promise(function(resolve, reject){
        let image = document.createElement('img');
        image.src = path;

        image.addEventListener('load', function(){
            resolve(image);
        });

        image.addEventListener('error', function(){
            reject(new Error(`image ${path} load error`));
        });
    });
}

loadImage('img.png').then(function(result){
    document.appendChild(result);
}).catch(function(error) {
    console.log(error);
})