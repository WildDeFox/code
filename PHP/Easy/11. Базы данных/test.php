<?
$host = 'localhost'; // имя хоста
$user = 'root'; // имя пользователя
$pass = ''; // пароль
$name = 'mydb'; // имя базы данных

$link = mysqli_connect($host, $user, $pass, $name);


// $query = 'SELECT * FROM users';
// $res = mysqli_query($link, $query) or die(mysqli_error($link));

// for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
// var_dump($data);

// $query1 = "INSERT INTO users (name, age, salary) VALUE ('user', '24', '5000')"; // добавление новой заприси
// $query2 = "UPDATE users SET salary=500 WHERE id=10"; // изменения записи
// $query3 = "DELETE FROM users WHERE id=10"; // удаление записи
// $query4 = "SELECT * FROM users ORDER BY age, salary"; // сортировка записи 
// $query5 = "SELECT * FROM users LIMIT 2"; // ограничение колличества записи

$res = mysqli_query($link, $query5) or die(mysqli_error($link));
for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
var_dump($data);