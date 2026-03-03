<?php

class Documento {

    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}

class CPF extends Documento {

    public function validarCPF() {

        $cpf = $this->getNumero();


        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        // Verifica se tem 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Verifica se todos os números são iguais
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Validação dos dígitos verificadores
        for ($t = 9; $t < 11; $t++) {

            $soma = 0;

            for ($i = 0; $i < $t; $i++) {
                $soma += $cpf[$i] * (($t + 1) - $i);
            }

            $digito = ((10 * $soma) % 11) % 10;

            if ($cpf[$t] != $digito) {
                return false;
            }
        }

        return true;
    }
}

// ---------------- USO ----------------

$cpf = new CPF();
$cpf->setNumero("52998224725");

if ($cpf->validarCPF()) {
    echo "CPF válido!";
} else {
    echo "CPF inválido!";
}

?>