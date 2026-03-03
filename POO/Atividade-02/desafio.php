<?php
class produto {
    public $nome
    public $preco;
    public $estoque

    public function desconto(){}
}
class eletronico extends produto {
    public function desconto() {
        if ($this->estoque < 6) {
            return $this->preco * 0.10; // Desconto de 10% para estoque baixo
        } else {
            return $this->preco * 0.05; // Desconto de 5% para estoque normal
        }
    }
class roupa extends produto {
    public function desconto() {
        if ($this->estoque < 10) {
            return $this->preco * 0.15; // Desconto de 15% para estoque baixo
        } else {
            return $this->preco * 0.10; // Desconto de 10% para estoque normal
        }
    }
}

$eletronico = new eletronico();
$eletronico->nome = "Smartphone";
$eletronico->preco = 1000;
$eletronico->estoque = 5;
echo "Produto: " . $eletronico->nome . "<br>";
echo "Preço: R$ " . $eletronico->preco . "<br>";
echo "Desconto: R$ " . $eletronico->desconto() . "<br>";
echo "<br>";

$roupa = new roupa();
$roupa->nome = "Camiseta";
$roupa->preco = 50;
$roupa->estoque = 15;
echo "Produto: " . $roupa->nome . "<br>";
echo "Preço: R$ " . $roupa->preco . "<br>";
echo "Desconto: R$ " . $roupa->desconto() . "<br>";



?>