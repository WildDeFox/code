<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавление пользователя</title>
</head>
<body>
    <?php
    $name = $_POST['name'];
    $age = $_POST['age'];
    $salary = $_POST['salary'];

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'pr_db';
    
    $link = mysqli_connect($host, $user, $pass, $db);
    $query = "INSERT INTO users SET name='$name', age='$age', salary='$salary'";

    mysqli_query($link, $query);

    ?>
    <p>Пользователь <? echo $_POST['name']?> добавлен.</p>
    <a href="index.php">Вернуться на главную</a>
</body>
</html>