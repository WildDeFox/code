<?php

class Arr
{
    private $numbers = [];

    public function add($arr)
    {
        $this->numbers[] = array_push($arr);
    }

    public function getSum()
    {
        return array_sum($this->numbers);
    }
}