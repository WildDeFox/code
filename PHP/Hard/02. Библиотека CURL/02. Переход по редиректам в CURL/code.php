<?php
$url = 'https://code.mu/ru/php/book/supreme/curl/browser-imitation/';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
// Подключение для сайтов на протоколе https
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
// Имитация браузера
curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)');
$res = curl_exec($curl);

if ($res === false) {
    echo curl_error($curl);
} else {
    echo $res;
}