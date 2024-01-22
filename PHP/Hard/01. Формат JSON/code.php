<?php
// Переделайте следующую структуру PHP в строку JSON:
// $data = '[1, 2, 3]';
// $data = '["x", "y", "z",]';
// $data = '[
//     "x" => "a",
//     "y" => "b",
//     "z" => "c",
// ]';


// Преобразование данных в JSON
// $data = [
//     'x' => 1,
//     'y' => 2,
//     'z' => 3,
// ];
// $json = json_encode($data);
// var_dump($json);


// Преобразование данных из JSON
// $json = '[1, 2, 3]';
// $data = json_decode($json);


// Преобразование объектов из JSON
// $json = '{
//     "a": 1,
//     "b": 2,
//     "c": 3
// }';
// $data = json_decode($json);
// echo $data->a; // выведет 1
// echo $data->b; // выведет 2
// echo $data->c; // выведет 3


// Объекты из JSON в ассоциативные массивы
// $json = '{
//     "a": 1,
//     "b": 2,
//     "c": 3
// }';
// $data = json_decode($json, true);