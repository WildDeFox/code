<?
require_once 'Student.php';

$student = new Student('Никита');
echo $student->getCourse();
$student->transferToNextCourse();
$student->transferToNextCourse();
$student->transferToNextCourse();
echo $student->getCourse();