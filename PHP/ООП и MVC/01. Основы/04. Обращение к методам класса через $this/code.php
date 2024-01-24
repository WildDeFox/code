<?php
class User {

    public $name;
    public $age;

    public function getAge() {
        return $this->age;
    }

    // Метод для проверки возраста
    public function isAgeCorr($age) {
        if ($age >= 16 and $age <= 60) {
            return true;
        } else {
            return false;
        }
    }

    // Метод для изменения возраста
    public function setAge($age) {
        // Проверим корректность возраса
        if ($this->isAgeCorr($age)) {
            $this->age = $age;
        }
    }

    // Метод для добавление возраса
    public function addAge($year) {
        $newAge = $this->age + $year;

        if ($this->isAgeCorr($newAge)) {
            $this->age = $newAge;
        }
    }
}

$user = new User;
$user->setAge(20);
echo $user->getAge();
$user->addAge(20);
echo $user->getAge();