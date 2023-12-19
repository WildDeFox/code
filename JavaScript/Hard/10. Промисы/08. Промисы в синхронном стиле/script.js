// Перепишите следующий код через синхронный синтаксис:
// function func() {
// 	getSmth(2).then(res1 => {
// 		getSmth(3).then(res2 => {
// 			getSmth(4).then(res3 => {
// 				console.log(res1 + res2 + res3);
// 			});
// 		});
// 	});
// }
// func();

async function func() {
    let arr = [1, 2, 3];
    let sum = 0;

    for (let elem of arr) {
        sum += await getSmth(elem);
    }

    console.log(sum);
}