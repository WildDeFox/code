<?php
class User {
    
    public $name;
    public $age;

    public function show($text) {
        return $text;
    }
}

$user = new User;
echo $user->show('Как дела?');