<?php
// Сделайте класс Student со свойствами $name и $course (курс студента, от 1-го до 5-го).
// В классе Student сделайте public метод transferToNextCourse,
// который будет переводить студента на следующий курс.
// Выполните в методе transferToNextCourse проверку на то, что следующий курс не больше 5.
// Вынесите проверку курса в отдельный private метод isCourseCorrect.

class Student {
    private $name;
    private $course;

    public function getName() {
        return $this->name;
    }

    public function getCourse() {
        return $this->course;
    }

    private function isCourseCorrect($course) {
        if ($course < 5) {
            return true;
        } else {
            return false;
        }
    }

    public function setCourse($course) {
        if ($this->isCourseCorrect($course)) {
            $this->course = $course;
        } else {
            echo 'Курс не должен быть больше 5';
        }
    }

    public function transferToNextCourse() {
        if ($this->isCourseCorrect($this->course)) {
            $this->course = $this->course + 1;
        } else {
            echo "Вы достигли последнего курса";
        }
    }
}

$student1 = new Student;
$student1->setCourse(3);
$student1->transferToNextCourse();
$student1->transferToNextCourse();
$student1->transferToNextCourse();
echo $student1->getCourse();
