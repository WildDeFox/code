<?php
session_start();
if (!empty($_SESSION['auth'])): ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестовая страница №1</title>
</head>
<body>
    <h1>Привет, <? echo $_SESSION['login']?></h1>
    <p><? echo $_SESSION['id'] ?></p>
    <p>Вернуться на <a href="index.php">главную</a></p>
</body>
</html>
<? else: ?>
<p>Пожалуйста, <a href="login.php">авторизируйтесь.</a></p>
<? endif; ?>