<?
session_start();
require_once 'connect.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
</head>
<body>
    <h1>Авторизация</h1>
    <? 
    if (empty($_POST)) {
    ?>
        <form action="" method="POST">
                <p>Пожалуйста авторизируйтесь на сайте</p>
                <label>Введите ваш логин</label>
                <input type="text" name="login">
                <label>Введите ваш пароль</label>
                <input type="num" name="password">

                <input type="submit">
            </form>
            <p>Или же <a href="register.php">зарегестрируйтесь</a> на сайте</p>
    <?
    }
    ?>
    
    <?
    if (!empty($_POST['login']) and !empty($_POST['password'])) {
        $login = $_POST['login'];

        $query = "SELECT * FROM users WHERE login='$login'";
        $res = mysqli_query($link, $query);
        $user = mysqli_fetch_assoc($res);

        if (!empty($user)) {
            $hash = $user['password']; // соленый пароль из БД

            if (password_verify($_POST['password'], $hash)) {
                $_SESSION['login'] = $login;
                $_SESSION['auth'] = true;
                header('Location: index.php');
            } else {
                echo 'Пароль не верый!';
            }
            
        } else {
            ?>
            <form action="" method="POST">
                <p>Пожалуйста авторизируйтесь на сайте</p>
                <label>Введите ваш логин</label>
                <input type="text" name="login">
                <label>Введите ваш пароль</label>
                <input type="num" name="password">

                <input type="submit">
            </form>
            <p>Или же <a href="register.php">зарегестрируйтесь</a> на сайте</p>
            <?
            echo "Неверный логин или пароль";
        }
    }
    ?>
</body>
</html>