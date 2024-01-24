<?
class Student {
    
    private $name;
    private $course;

    public function __construct($name)
    {
        $this->name = $name;
        $this->course = 1;
    }

    public function getCourse() {
        return $this->course;
    }

    public function transferToNextCourse() {
        if($this->isCorrectCoures($this->course)) {
            $this->course = $this->course + 1;
        } else {
            echo "Вы достигли максимального курса";
        }
    }

    private function isCorrectCoures($course) {
        if($course < 5) {
            return true;
        } else {
            return false;
        }
    }
}