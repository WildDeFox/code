<?
session_start();
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
            <input type="text" name="login">
            <input type="num" name="password">

            <input type="submit">
        </form>
    <?
    }
    ?>
    
    <?
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'autentif';
    $link = mysqli_connect($host, $user, $pass, $db);

    if (!empty($_POST['login']) and !empty($_POST['password'])) {
        $login = $_POST['login'];
        $password = $_POST['password'];

        $query = "SELECT * FROM users WHERE login='$login' AND password='$password'";
        $res = mysqli_query($link, $query);
        $user = mysqli_fetch_assoc($res);

        if (!empty($user)) {
            $_SESSION['login'] = $login;
            $_SESSION['auth'] = true;
            header('Location: index.php');
        } else {
            ?>
            <form action="" method="POST">
                <input type="text" name="login">
                <input type="num" name="password">

                <input type="submit">
            </form>
            <?
            echo "Неверный логин или пароль";
        }
    }
    ?>
</body>
</html>