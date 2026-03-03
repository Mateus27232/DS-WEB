<?php
class Pessoa {
    public $nome = "miguel";
    protected $idade = 18;

}

class Funcionario extends Pessoa {
    public $salario = "500";
}

class Gerente extends Funcionario {
    public $departamento = "TI";

    public function mostrarInformacoes() {
        echo "Nome: " . $this->nome . "<br>";
        echo "Idade: " . $this->idade . "<br>";
        echo "Salário: " . $this->salario . "<br>";
        echo "Departamento: " . $this->departamento . "<br>";
    }
}
class desenvolvedor extends funcionario {
    public $linguagem = "PHP";

    public function mostrarInformacoes() {
      echo "salário: " . $this->salario . "<br>";
      echo "bonus: " . ($this->salario * 0.20) . "<br>";
    }
}
?>