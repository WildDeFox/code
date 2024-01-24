<?php
// Сделайте класс Employee (работник),
// в котором будут следующие свойства - name (имя),
// age (возраст), salary (зарплата).

class Employee {
    public $name;
    public $age;
    public $salary;
}


// Создайте объект класса Employee, затем установите его свойства в следующие значения
// - имя 'john', возраст 25, зарплата 1000.
$user1 = new Employee;
$user1 ->name = 'john';
$user1->age = 25;
$user1->salary = 1000;


// Создайте второй объект класса Employee, установите его свойства в следующие значения
// - имя 'eric', возраст 26, зарплата 2000.
$user2 = new Employee;
$user2->name = 'eric';
$user2->age = 26;
$user2->salary = 2000;

// Выведите на экран сумму зарплат созданных юзеров.
echo $user1->salary + $user2->salary . '<br>';

// Выведите на экран сумму возрастов созданных юзеров.
echo $user1->age + $user2->age;