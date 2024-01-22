<?php
// Адрес страницы для обращения:
$url = 'http://test.loc';

// Инициализируес сеанс:
$curl = curl_init();

// Указываем адрес страницы: 
curl_setopt($curl, CURLOPT_URL, $url);

// Ответ сервера сохранять в переменную:
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

// Выполняем запрос, сохранив ответ в переменную:
$res = curl_exec($curl);

// Проверка на ошибку
if ($res === false) {
    echo curl_error($curl);
} else {
    var_dump($res);
}