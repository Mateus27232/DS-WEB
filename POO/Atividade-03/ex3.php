<?php
 class fabricante {
    public $nome;
    public $paisdeorigem;

    function __construct($nome, $paisdeorigem)
    {
        $this->nome = $nome;
        $this->paisdeorigem = $paisdeorigem;
    }
 }

class motor {
    public $potencia;
    public $combustivel;

    function __construct($potencia, $combustivel)
    {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class carro {
    public $modelo;
    public fabricante $fabricante;
    public motor $motor;
    function __construct($modelo, fabricante $fabricante, motor $motor)
    {
        $this->modelo = $modelo;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }


}

$motor1 = new motor("150cv", "Gasolina");
$fabricante1 = new fabricante("honda", "Japão");
$carro1 = new carro("Civic", $fabricante1, $motor1);

echo "Modelo: " . $carro1->modelo . "<br>";
echo "Fabricante: " . $carro1->fabricante->nome . "<br>";
echo "País de Origem: " . $carro1->fabricante->paisdeorigem . "<br>";
echo "Potência: " . $carro1->motor->potencia . "<br>";
echo "Combustível: " . $carro1->motor->combustivel . "<br>";


?>