<?php
// Сделайте класс Employee, в котором будут следующие свойства - name, age, salary.
// Сделайте в классе Employee метод getName, который будет возвращать имя работника.
// Сделайте в классе Employee метод getAge, который будет возвращать возраст работника.
// Сделайте в классе Employee метод getSalary, который будет возвращать зарплату работника.
// 
// Сделайте в классе Employee метод checkAge, который будет проверять то, что работнику
// больше 18 лет и возвращать true, если это так, и false, если это не так.
// 
// Создайте два объекта класса Employee, запишите в их свойства какие-либо значения.
// С помощью метода getSalary найдите сумму зарплат созданных работников.

// Сделайте метод doubleSalary, который текущую зарплату будет увеличивать в 2 раза.

class Employee {

    public $name;
    public $age;
    public $salary;

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function getSalary() {
        return $this->salary;
    }

    public function checkAge() {
        if ($this->age > 18) {
            return true;
        } else {
            return false;
        }
    }

    public function doubleSalary() {
        $this->salary = $this->salary * 2;
    }
}

$user1 = new Employee;
$user1->name = 'john';
$user1->age = 25;
$user1->salary = 1000;

$user2 = new Employee;
$user2->name = 'eric';
$user2->age = 26;
$user2->salary = 2000;

echo $user1->getName() . '<br>';
echo $user1->getAge() . '<br>';
echo $user1->checkAge() . '<br>';
echo $user1->getAge() + $user2->getAge() . '<br>';
echo $user2->getSalary() . '<br>';
$user2->doubleSalary();
echo $user2->getSalary() . '<br>';


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Запись свойств
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Сделайте класс User, в котором будут следующие свойства - name и age.
// Сделайте метод setAge, который параметром будет принимать новый возраст пользователя.
// Модифицируйте метод setAge так, чтобы он вначале проверял, что переданный возраст больше или равен 18. 
// Если это так - пусть метод меняет возраст пользователя, а если не так - то ничего не делает.

class User {

    public $name;
    public $age;

    public function setAge ($age) {
        if ($age > 18) {
            $this->age = $age;
        }
    }
}

// Создайте объект класса User с именем 'john' и возрастом 25.
//  С помощью метода setAge поменяйте возраст на 30. Выведите новое значение возраста на экран.
$us = new User;
$us->name = 'john';
$us->age = 25;
echo $us->age . '<br>';
$us->setAge(30);
echo $us->age . '<br>';