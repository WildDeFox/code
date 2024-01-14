<? session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сайт</title>
</head>
<body>
    <?php
    if (!empty($_SESSION['auth'])) {
        ?>
        <a href="test1.php">Страница 1</a>
        <a href="test2.php">Страница 2</a>
        <?
    } else {
        ?>
        <p>Чтобы увидеть весть контент, пожалуйста,<a href="login.php">авторизируйтесь</a> на сайте.</p>
        <?
    }
    ?>
    
</body>
</html>

