// Напишите регулярку, которая найдет строки по шаблону:
// шляпка или собака, а затем две латинских буквы.
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[\^@]a-z{1,2}/g, '!'));

// Напишите регулярку, которая найдет строки по шаблону:
// НЕ шляпка и не собака, а затем две латинских буквы.
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[^\^\@][a-z]{1,2}/g, '!'));

// Напишите регулярку, которая найдет строки по шаблону: не шляпка и не пробел, а затем две латинских буквы.
// let str = '^xx axx ^zz bkk';
// console.log(str.replace(/[^\^\s][a-z]{2}/g, '!'));