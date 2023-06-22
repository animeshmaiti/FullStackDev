<?php
$colors=["red","green","blue","orange"];
// echo "$colors";
print_r($colors);
for($i=0;$i<count($colors);$i++){
echo "<h1 style='color: $colors[$i];'>$colors[$i]</h1>";
}

$person=["name"=>"animesh","age"=>21,"gender"=>"male"];
print_r($person);
echo "<br>";
echo $person["name"];
echo "<br> isset output is: ";
echo isset($person["address"]);// it is empty because person as no key like address
echo isset($person["age"]);// return 1
echo isset($person["gender"]);//return 1
?>