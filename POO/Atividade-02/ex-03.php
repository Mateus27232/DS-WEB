<?php
class veiculo {
    public $marca = "Toyota";
    protected $modelo = "Corolla";
    private $velocidade = 200;

    public function mostrarInformacoes() {
        echo "Marca: " . $this->marca . "<br>";
        echo "Modelo: " . $this->modelo . "<br>";
        echo "Velocidade: " . $this->velocidade . " km/h<br>";
    }
    class Carro extends veiculo {
        public function acelerar() {
            echo "O carro está acelerando a " . $this->velocidade . " km/h<br>";
        }
    }

    class Moto extends veiculo {
        public function acelerarManete() {
            echo "A moto está acelerando a " . $this->velocidade . " km/h<br>";
        }
    }
}

$carro = new Carro();
$carro->mostrarInformacoes();

Echo "modelo: " . $carro->modelo . "<br>"; // Acessando a propriedade protegida
echo "marca: " . $carro->marca . "<br>"; // Acessando a propriedade pública
// echo "velocidade: " . $carro->velocidade . "<br

echo "<br>";
$moto = new Moto();
$moto->mostrarInformacoes();
echo $moto->modelo . "<br>"; // Acessando a propriedade protegida
echo $moto->marca . "<br>"; // Acessando a propriedade pública
echo $moto->velocidade . "<br>"; // Acessando a propriedade privada (não é possível acessar diretamente)
?>