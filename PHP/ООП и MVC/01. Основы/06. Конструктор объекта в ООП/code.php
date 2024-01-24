<?php
// Сделайте класс Employee, в котором будут следующие публичные свойства - name, age, salary.
// Сделайте так, чтобы эти свойства заполнялись в конструкторе при создании объекта.
// Создайте объект класса Employee с именем 'eric', возрастом 25, зарплатой 1000.
// Создайте объект класса Employee с именем 'kyle', возрастом 30, зарплатой 2000.
// Выведите на экран сумму зарплат созданных вами юзеров.

// Сделайте класс Employee, в котором будут следующие приватные свойства: name, age и salary.
// Сделайте геттеры и сеттеры для всех свойств класса Employee.
// Дополните класс Employee приватным методом isAgeCorrect, который будет проверять
// возраст на корректность (от 1 до 100 лет). Этот метод должен использоваться в сеттере setAge
// перед установкой нового возраста (если возраст не корректный - он не должен меняться).
// Пусть зарплата наших работников хранится в долларах.
// Сделайте так, чтобы геттер getSalary добавлял в конец числа с зарплатой значок доллара
class Employee {

    private $name;
    private $age;
    private $salary;

    public function __construct($name, $age, $salary)
    {
        $this->name = $name;
        $this->age = $age;
        $this->salary = $salary;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function getSalary() {
        return $this->salary . '$';
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setAge($age) {
        if($this->isAgeCorrect($age)) {
            $this->age = $age;
        }
    }

    public function setSalary($salary) {
        $this->salary = $salary;
    }

    private function isAgeCorrect($age) {
        if($age > 1 and $age < 100) {
            return true;
        } else {
            return false;
        }
    }
}

$emp1 = new Employee('eric', 25, 1000);
$emp2 = new Employee('kyle', 30, 2000);

echo $emp1->getSalary();