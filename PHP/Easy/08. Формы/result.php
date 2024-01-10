<?php
$pass = '12345';

if ($_POST['password'] === $pass) {
    echo 'Добро пожаловать!';
} else {
    echo 'Пароль неправильный!';
}