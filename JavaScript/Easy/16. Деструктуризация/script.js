// -- Деструктуризация массивов
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(name);


// -- Деструктуризация массива из функции
// В следующем коде части массива записываются в соответствующие переменные:
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let arr = func();
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию.
// let [name, surname, department, position, salary] = func();
// console.log(salary);


// -- Пропуск элементов массива при деструктуризации
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию.
// let [, , department, position, ] = arr;
// console.log(department + ' ' + position);


// -- Остаток массива при деструктуризации
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let name    = arr[0];
// let surname = arr[1];
// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.
// let [name, surname, ...info] = arr;


// -- Значения по умолчанию при деструктуризации массива
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }
// Переделайте этот код через деструктуризацию.
// let [name, surname, department, position = 'traiinee'] = arr;


// -- Деструктуризация объектов
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию.
// let {color, width, height} = options;
// console.log(color);


// -- Имена переменных при деструктуризации объектов
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию.
// let {color : c, width : w, height : h} = options;
// console.log(w);


// -- Значения по умолчанию при деструктуризации объектов
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию.
// let {color = 'black', width, height} = options;
// console.log(color + " " + width);


