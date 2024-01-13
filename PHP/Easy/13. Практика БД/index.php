<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пользователи</title>
</head>
<body>
    <h1>Работа с пользователями</h1>
    <hr>
    <h2>Просмотр информации пользователя</h2>
    <form action="show.php" method="POST">
        <label>Введите ID пользователя:</label>
        <input type="num" name="id">
        <input type="submit">
    </form>
    <hr>
    <h2>Добавить нового пользователя</h2>
    <form action="new.php" method="POST">
        <label>Введите имя пользователя</label>
        <input type="text" name="name"><br>
        <label>Введите возраст пользователя</label>
        <input type="num" name="age"><br>
        <label>Введите зарплату пользователя</label>
        <input type="text" name="salary"><br>

        <input type="submit">
    </form>

    <h2>Редактировать данные о пользователе</h2>
    <form action="edit.php" method="GET">
        <label>Введите ID пользователя которого хотите изменить.</label>
        <input type="num" name='id'>
        
        <input type="submit">
    </form>
</body>
</html>