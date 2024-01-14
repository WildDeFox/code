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
        <input type="password" name="password"><br>
        <label>Подтвердите ваш пароль</label>
        <input type="password" name="confirm">

        <input type="submit">
    </form>

    <? 
    if (!empty($_POST['login']) and !empty($_POST['password']) and !empty($_POST['confirm'])) {
        if($_POST['password'] === $_POST['confirm']) {
            $login = $_POST['login'];
            $password = md5($_POST['password']);

            $query = "SELECT * FROM users WHERE login='$login'";
            $user = mysqli_fetch_assoc(mysqli_query($link, $query));

            if (empty($user)) {
                $query = "INSERT INTO users SET login='$login', password='$password'";
                mysqli_query($link, $query);
    
                $_SESSION['auth'] = true;
                $_SESSION['login'] = $login;
        
                $id = mysqli_insert_id($link);
                $_SESSION['id'] = $id;
        
                header('Location: index.php');
            } else {
                echo "Данный логин уже занят";
            }   
        } else {
            echo "Не совпадают пароли.";
        }
    }
    ?>
</body>
</html>