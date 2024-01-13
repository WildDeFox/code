<?
$host = 'localhost';
$user = 'root';
$pass = '';
$name = 'mydb';

$link = mysqli_connect($host, $user, $pass, $name);

$query = 'SELECT users.name,
                 cities.name as city_name,
                 countries.name as country_name
                 FROM users 
                 LEFT JOIN cities ON cities.id=users.city_id
                 LEFT JOIN countries ON countries.id=cities.countries_id';
$res = mysqli_query($link, $query) or die(mysqli_error($link));

for ($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);
var_dump($data);