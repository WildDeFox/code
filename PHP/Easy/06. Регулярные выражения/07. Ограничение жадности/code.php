<?
// Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a',
// и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').
$str = 'aba accca azzza wwwwa';
echo preg_replace('#a.+?a#', '!', $str);