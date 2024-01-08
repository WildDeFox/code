<?
// Напишите регулярку, которая найдет строки по шаблону:
// строка 'ab' повторяется 1 или более раз.
$str = 'ab abab abab abababab abea';
echo preg_replace('#(ab)+#', '!', $str);