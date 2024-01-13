<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Редактирование данных пользователя</title>
</head>
<body>
    <? 
    $id = $_GET['id'];

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'pr_db';
    
    $link = mysqli_connect($host, $user, $pass, $db);
    $query = "SELECT * FROM users WHERE id=$id";

    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    $user = mysqli_fetch_assoc($result);

    ?>
    <form action="save.php?id=<?= $_GET['id'] ?>" method="POST">
        <input name="name" value="<?= $user['name'] ?>">
        <input name="age" value="<?= $user['age'] ?>">
        <input name="salary" value="<?= $user['salary'] ?>">
        <input type="submit">
    </form>
</body>
</html>