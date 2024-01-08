<?
// Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
// $str = 'aa aba abba abbba abbbba abbbbba';
// echo preg_replace('#ab{2,4}a#', '!', $str);

// Напишите регулярку, которая найдет строки вида 'aba',
// в которых 'b' встречается более четырех раз (включительно).
$str = 'aa aba abba abbba abbbba abbbbba';
echo preg_replace('#ab{4,}a#', '!', $str);