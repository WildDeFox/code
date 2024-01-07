<?
function show ($parametr) {
    if(is_array($parametr)) {
        if(array_is_list($parametr)) {
            foreach ($parametr as $elem) {
                echo $elem . ' ';
            }
            echo '<br>';
        } else {
            foreach($parametr as $key => $value) {
                echo $key . ' - ' . $value . ' ';
            }
            echo '<br>';
        }
    } else {
        echo $parametr . '<br>';
    }
    
}
// Проверьте, что в нем есть элемент со значением 3.
// $arr = [1, 2, 3, 4, 5];
// var_dump(in_array(3, $arr)); 


// Работа с array_sum и array_product
// Найдите сумму элементов данного массива.
// $arr = [1, 2, 3, 4, 5];
// echo array_sum($arr) . '<br>';
// Найдите произведение (умножение) элементов данного массива.
// echo array_product($arr);
// show(array_product($arr));


// Работа с range
// Создайте массив, заполненный числами от 1 до 100.
// $arr = range(1, 100, 1);
// show('Hello World');

// Создайте массив, заполненный буквами от 'a' до 'z'.
// show(range('a', 'z'));

// Создайте строку '1-2-3-4-5-6-7-8-9' не используя цикл.
// $arr = range(1, 9);
// show(implode('-', $arr));

// Найдите сумму чисел от 1 до 100 не используя цикл.
// show(array_sum(range(1, 100)));

// Найдите произведение чисел от 1 до 10 не используя цикл.
// show(array_product(range(1, 10)));


// Работа с array_merge
// $arr1 = [1, 2, 3];
// $arr2 = ['a', 'b', 'c'];
// $result = array_merge($arr1, $arr2);
// show($result);

// Работа с array_slice
// $arr = [1, 2, 3, 4, 5];
// show(array_slice($arr, 0, 3));

// Работа с array_keys, array_values, array_combine
// Запишите в массив $keys ключи из этого массива, а в $values – значения.
// $arr = ['a' => 1, 'b' => 2, 'c' => 3];
// $keys = array_keys($arr);
// $values = array_values($arr);
// show($keys);
// show($values);

// $arr1 = ['a', 'b', 'c'];
// $arr2 = [1, 2, 3];
// $result = array_combine($arr1, $arr2);
// show($result);


// Работа с array_flip, array_reverse
// Поменяйте в нем местами ключи и значения.
// $arr = ['a' => 1, 'b' => 2, 'c' => 3];
// show(array_flip($arr));

// $arr = [1, 2, 3, 4, 5];
// show(array_reverse($arr));