<?
require_once 'City.php';

// Создайте 5 объектов класса City, заполните их данными и запишите в массив.
// Переберите созданный вами массив с городами циклом и выведите города и их население на экран.

$citys = [
    new City('Москва', 1),
    new City('Новосибирск', 2),
    new City('Барнаул', 3),
    new City('Славгород', 4),
    new City('Добровка', 5),
];

foreach($citys as $city) {
    echo $city->name . ' - '. $city->population . '<br>';
}