<?
// Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону:
// буква 'a', любой символ, буква 'b'.
// $str = 'ahb acb aeb aeeb adcb axeb';
// echo preg_replace('#a.b#', '!', $str);

// Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону:
// буква 'a', два любых символа, буква 'b'.
// $str = 'ahb acb aeb aeeb adcb axeb';
// echo preg_replace('#a..b#', '!', $str);