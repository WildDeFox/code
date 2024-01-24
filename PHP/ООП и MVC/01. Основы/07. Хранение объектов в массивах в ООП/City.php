<?
// Сделайте класс City, в котором будут следующие свойства: name, population (количество населения).

class City {
    public $name;
    public $population;
    
    public function __construct($name, $population)
    {
        $this->name = $name;
        $this->population = $population;
    }
}