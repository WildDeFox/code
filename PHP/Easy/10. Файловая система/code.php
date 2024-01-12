<?
// Заметки:
// * file_get_contents() - прочитать содержимое файла
// * file_put_contents() - записать что-то в файл
// * rename() - переименовать файл(папку) | переместить файл(папку)
// * copy() - копировать файл
// * unlink() - удаление файла
// * filesize() - возвращает размер файла в байтах
// * file_exists() - проверяет, существует ли файл
// * mkdir() - создает директорию
// * rmdir() - удаляет директорию
// * scandir() - прочитать содержимое директории
// * is_file() - проверяет файл ли это
// * is_dir() - проверяет директория ли это

$sum = file_get_contents('1.txt') + file_get_contents('2.txt');
file_put_contents('res.txt', $sum);
// rename('result.txt', 'res.txt');
// copy('res.txt', 'dir/copy.txt');
// echo filesize('res.txt');

// if (file_exists('res.txt')) {
//     echo "Файл существует!";
// } else {
//     echo "Файл не существует";
// }

// mkdir('dir2');
// rmdir('dir2');
var_dump(scandir('dir'));