<?
// Работа с регистром символов
// Дана строка 'php'. Сделайте из нее строку 'PHP'.
// echo mb_strtoupper('php');

// Дана строка 'PHP'. Сделайте из нее строку 'php'.
// echo mb_strtolower('PHP');

// Дана строка 'london'. Сделайте из нее строку 'London'.
// echo ucfirst('london');

// Дана строка 'London'. Сделайте из нее строку 'london'.
// echo lcfirst('London');

// Дана строка 'london is the capital of great britain'. 
// Сделайте из нее строку 'London Is The Capital Of Great Britain'.
// $str = 'london is the capital of great britain';
// echo ucwords($str);

// Дана строка 'LONDON'. Сделайте из нее строку 'London'.
// echo ucfirst(mb_strtolower('LONDON'));


// Работа с strlen
// Дана строка 'html css php'. Найдите количество символов в этой строке.
// echo strlen('html css php');

// Дана переменная $password, в которой хранится пароль пользователя.
// Если количество символов пароля больше 5-ти и меньше 10-ти,
// то выведите пользователю сообщение о том, что пароль подходит,
// иначе сообщение о том, что нужно придумать другой пароль.
// $password = '3f3';
// if (strlen($password) > 5 and strlen($password) < 10) {
//     echo 'Все подходит, хорошо!';
// } else {
//     echo 'Нужно придумать новый пароль';
// }


// Работа с substr
// Дана строка 'html css php'. Вырежьте из нее и выведите на экран слово 'html', слово 'css' и слово 'php'.
// $str = 'html css php';
// echo mb_substr($str, 0, 4) . '<br>';
// echo mb_substr($str, 5, 3) . '<br>';
// echo mb_substr($str, 9, 3) . '<br>';

// Дана строка. Вырежьте и выведите на экран последние 3 символа этой строки.
// $str = 'html css php';
// echo mb_substr($str, -3, 3);

// Дана строка. Проверьте, что она начинается на 'http://'.
// $str = 'http://itechnoform.ru';
// if (substr($str, 0, 7) == 'http://') {
//     echo 'Все гуд';
// } else {
//     echo 'Все не гуд!';
// }

// Дана строка. Проверьте, что она начинается на 'http://' или на 'https://'.
// $str = 'https://itechnoform.ru';
// if (substr($str, 0, 7) == 'http://' or substr($str, 0, 8) == 'https://') {
//     echo 'Все гуд';
// } else {
//     echo 'Все не гуд!';
// }

// Дана строка. Проверьте, что она заканчивается на '.png'.
// $str = 'img.png';
// if (substr($str, -4, 4) == '.png') {
//     echo 'Все гуд!';
// } else {
//     echo 'Все не гуд...';
// }

// Дана строка. Проверьте, что она заканчивается на '.png' или на '.jpg'.
// $str = 'img.jpg';
// if (substr($str, -4, 4) == '.png' or substr($str, -4, 4) == '.jpg') {
//     echo 'Все гуд!';
// } else {
//     echo 'Все не гуд...';
// }

// Дана строка. Если в этой строке более 5-ти символов - вырежьте из нее первые 5 символов,
// добавьте троеточие в конец и выведите на экран. Если же в этой строке 5 и менее символов
// - просто выведите эту строку на экран.
// $str = 'Hello World!';
// if (strlen($str) > 5) {
//     echo substr($str, 0, 5) . '...';
// } else {
//     echo $str;
// }


// Работа с str_replace
// Дана строка '31.12.2013'. Замените все точки на дефисы.
// $str = '31.12.2023';
// echo str_replace('.', '-', $str);

// Дана строка. Замените в ней все буквы 'a' на цифру 1, буквы 'b' - на 2, а буквы 'c' - на 3.
// $str = 'adwesaadfdewdvxzfddsfgrxzcvbfhlcmvkewatwe';
// echo str_replace(['a', 'b', 'c'], [1, 2, 3], $str);

// Дана строка с буквами и цифрами, например, '1a2b3c4b5d6e7f8g9h0'.
//  Удалите из нее все цифры. То есть в нашем случае должна получится строка 'abcbdefgh'.
// $str = '1a2b3c4b5d6e7f8g9h0';
// echo str_replace([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '', $str);

// Работа с strtr
// Дана строка $str. Замените в ней все 'a' на цифру 1, буквы 'b' - на 2, а буквы 'c' - на 3.
// Решите задачу двумя способами работы с функцией strtr (массив замен и две строки замен).
// $str = 'adwesaadfdewdvxzfddsfgrxzcvbfhlcmvkewatwe';
// echo strtr($str, ['a' => 1, 'b' => 2, 'c' => 3]) . '<br>';
// echo strtr($str, 'abc', '123');


// Работа с substr_replace
// Дана строка $str. Вырежьте из нее подстроку с 3-го символа (отсчет с нуля),
// 5 штук и вместо нее вставьте '!!!'.
// $str = 'adwesaadfdewdvxzfddsfgrxzcvbfhlcmvkewatwe';
// echo substr_replace($str, '!!!', 2, 5);


// Работа с explode, implode
// Дана строка 'html css php'. Запишите каждое слово этой строки в отдельный элемент массива.
// $str = 'html css php';
// $arr = explode(' ', $str);

// Дан массив с элементами 'html', 'css', 'php'.
// С помощью implode создайте строку из этих элементов, разделенных запятыми.
// $arr = ['html', 'css', 'php'];
// echo implode(', ', $arr);


// Работа с str_split
// Дана строка '1234567890'. Разбейте ее на массив с элементами '12', '34', '56', '78', '90'.
// $str = '1234567890';
// var_dump(str_split($str, 2));

// Дана строка '1234567890'. Сделайте из нее строку '12-34-56-78-90' не используя цикл.
// $str = '1234567890';
// $arr = str_split($str, 2);
// $new_str = implode('-', $arr);
// echo $new_str;


// Работа с trim, ltrim, rtrim
// Дана строка. Очистите ее от концевых пробелов.
// $str = ' dfsd ';
// echo trim($str);

// Дана строка '/php/'. Сделайте из нее строку 'php', удалив концевые слеши.
// $str = '/php/';
// echo trim($str, '/');


// Работа с strrev
// Дана строка '12345'. Сделайте из нее строку '54321'.
// $str = '12345';
// echo strrev($str);

// Проверьте, является ли слово палиндромом (одинаково читается во всех направлениях,
// примеры таких слов: madam, otto, kayak, nun, level).
// $str = 'madam';
// if ($str === strrev($str)) {
//     echo 'Слово палиндром';
// }


// Работа с strip_tags и htmlspecialchars
// Дана строка 'html, <b>php</b>, js'. Удалите теги из этой строки.
// $str = 'html, <b>php</b>, js';
// echo strip_tags($str);

// Дана строка 'html, <b>php</b>, js'. Выведите ее на экран 'как есть':
// то есть браузер не должен преобразовать <b> в жирный.
// $str = 'html, <b>php</b>, js';
// echo htmlspecialchars($str);