<? session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сайт</title>
</head>
<body>
    <? if (!empty($_SESSION['auth'])) { ?>
        
        <h1>Главная страница</h1>
        <a href="test1.php">Страница 1</a>
        <a href="test2.php">Страница 2</a>
        <a href="logout.php">Выйти из аккаунта</a>

        <? } else { ?>
        <p>Чтобы увидеть весть контент, пожалуйста,<a href="login.php">авторизируйтесь</a> на сайте.</p>
        <?
    }
    ?>
    
</body>
</html>

