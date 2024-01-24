<?php
require_once 'Arr.php';

$newArr = new Arr;
$newArr->add([1, 2, 3, 4]);
var_dump($newArr->getSum());