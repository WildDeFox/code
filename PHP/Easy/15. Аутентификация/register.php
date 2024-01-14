<? session_start();
    require_once 'connect.php';
?>
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
    if (!empty($_POST['login']) and !empty($_POST['password'])) {
		$login = $_POST['login'];
		$password = $_POST['password'];
		
		$query = "INSERT INTO users SET login='$login', password='$password'";
		mysqli_query($link, $query);
        $_SESSION['auth'] = true;
        $_SESSION['login'] = $login;

        $id = mysqli_insert_id($link);
        $_SESSION['id'] = $id;

        header('Location: index.php');

    }
    ?>
</body>
</html>