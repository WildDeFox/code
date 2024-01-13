<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Информация о пользователе</title>
</head>
<body>
    <?php 
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'pr_db';
    
    $link = mysqli_connect($host, $user, $pass, $db);

    $query = "SELECT * FROM users WHERE id=$_POST[id]";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    $user = mysqli_fetch_assoc($result);
    ?>
    <h1>Информация о пользователе</h1>
    <hr>
    <div>
        <p>Имя пользователя: <? echo $user['name'] ?></p>
        <p>Возраст рользователя: <? echo $user['age'] ?></p>
        <p>Зарплата пользователя: <? echo $user['salary']?></p>
    </div>
    <div>
        <a href="index.php">Вернуться на главную</a>
    </div>
</body>
</html>