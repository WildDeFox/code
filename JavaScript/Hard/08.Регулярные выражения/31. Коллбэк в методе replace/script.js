// Найдите числа, стоящие в скобках и увеличьте их в два раза.
// То есть из нашей строки должна получится следующая:
// 'aaa [4] bbb [6] ccc [24] ddd'
let str = 'aaa [2] bbb [3] ccc [12] ddd';
let result = str.replace(/\d+/g, function (match) {
    return match * 2;
})
console.log(result);