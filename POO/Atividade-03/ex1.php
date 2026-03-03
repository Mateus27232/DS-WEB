<?php
class dono{
    public $nome;
    public $telefone;

    function __construct($nome, $telefone)
    {
        $this->nome = $nome;
        $this->telefone = $telefone;
    }
    
}

class animal{
    public $nome;
    public $especie;
    public dono $dono;

    function __construct($nome, $especie, dono $dono)
    {
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }
    
    
    public function exibirdadosdono(){
        return $this->dono->nome . " - Telefone: " . $this->dono->telefone;
    }

    public function exibirdados(){
        return "Nome: " . $this->nome . " - Especie: " . $this->especie;
    }



}

$luis = new dono("Luis", "123456789");
$rex = new animal("Rex", "Cachorro", $luis);

echo $rex->exibirdadosdono();
echo "<br>";
echo $rex->exibirdados();



?>