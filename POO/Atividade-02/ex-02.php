<?php
abstract class Animal {
public function fazerSom(){
    echo "O animal faz um som.";
    return "Som";
}
public function mover(){
return "Anda";
}
}
class sapo extends Animal {
public function fazerSom(){
return "coacha";
}
}
class Cavalo extends Animal {
public function fazerSom(){
return "Relincha";
}
}
class tartaruga extends Animal {
public function fazerSom(){
return "grunhe";
}
public function mover(){
return "rasteja e " . parent::mover();
}
}
$spirit = new Cavalo();
echo $spirit->fazerSom() . "<br/>";
echo $spirit->mover() . "<br/>";
echo "-------------------------<br/>";
$shrek = new sapo();
echo $shrek->fazerSom() . "<br/>";
echo $shrek->mover() . "<br/>";
echo "-------------------------<br/>";
$donnatelo = new tartaruga();
echo $donnatelo->fazerSom() . "<br/>";
echo $donnatelo->mover() . "<br/>";

?>