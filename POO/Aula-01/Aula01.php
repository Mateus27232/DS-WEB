<?php
class pessoa {
    // Atributos
    public $nome;

    // Método
    public function falar() {
        return "Seu nome é " . $this->nome . " e vc tem " . $this->idade . " anos.";
    }
}

?>