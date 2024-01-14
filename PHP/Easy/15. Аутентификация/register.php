<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
</head>
<body>
    <h1>Регистрация</h1>
    <form action="" method="POST">
        <label>Введите ваш логин</label>
        <input type="text" name="login"><br>
        <label>Введите ваш пароль</label>
        <input type="num" name="password"><br>

        <input type="submit">
    </form>

    <? 
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'autentif';
    $link = mysqli_connect($host, $user, $pass, $db);

    if (!empty($_POST['login']) and !empty($_POST['password'])) {
		$login = $_POST['login'];
		$password = $_POST['password'];
		
		$query = "INSERT INTO users SET login='$login', password='$password'";
		mysqli_query($link, $query);
        header('Location: login.php');
    }
    ?>
</body>
</html>