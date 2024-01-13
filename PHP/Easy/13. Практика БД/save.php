<?php
$id = $_GET['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$salary = $_POST['salary'];

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'pr_db';
    
$link = mysqli_connect($host, $user, $pass, $db);

$query = "UPDATE users SET name='$name', age='$age', salary='$salary' WHERE id=$id";

mysqli_query($link, $query) or die(mysqli_error($link));

echo 'Данные пользователи изменены';
?>

<a href="index.php">Вернуться на главную</a>