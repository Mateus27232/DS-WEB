<?php
class tenis {
    public $marca;
    public $modelo;
    public $tamanho;
    public $cor;
    public $preco;

    public function calcar() {
        return "Calçando o tênis de marca {$this->marca}, modelo {$this->modelo}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
    public function amarrar() {
        return "Amarrando os cadarços do tênis de marca {$this->marca}, modelo {$this->modelo}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
    public function lavar () {
        return "Lavando o tênis de marca {$this->marca}, modelo {$this->modelo}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
}
$meutenis = new tenis();
$meutenis->marca = "Nike";
$meutenis->modelo = "Air Max";
$meutenis->tamanho = 42;
$meutenis->cor = "Preto";
$meutenis->preco = 350.00;

class camisa {
    public $marca;
    public $tamanho;
    public $cor;
    public $preco;
    public $gola;

    public function vestir() {
        return "Vestindo a camisa de marca {$this->marca}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
    public function lavar() {
        return "Lavando a camisa de marca {$this->marca}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
   
    public function dobrar() {
        return "Dobrando a camisa de marca {$this->marca}, tamanho {$this->tamanho}, cor {$this->cor} e preço R$ {$this->preco}.";
    }
}

$minhaCamisa = new camisa();
$minhaCamisa->marca = "Adidas";
$minhaCamisa->tamanho = "M";
$minhaCamisa->cor = "Branca";
$minhaCamisa->preco = 120.00;
$minhaCamisa->gola = "Polo";

class caneta
{
    public $marca;
    public $cor;
    public $tipo;
    public $ponta;
    public $preco;

    public function escrever() {
        return "Escrevendo com a caneta de marca {$this->marca}, cor {$this->cor}, tipo {$this->tipo}, ponta {$this->ponta} e preço R$ {$this->preco}.";
    }
    public function tampar() {
        return "Tampando a caneta de marca {$this->marca}, cor {$this->cor}, tipo {$this->tipo}, ponta {$this->ponta} e preço R$ {$this->preco}.";
    }
    public function destampar() {
        return "Destampando a caneta. de marca {$this->marca}, cor {$this->cor}, tipo {$this->tipo}, ponta {$this->ponta} e preço R$ {$this->preco}.";
    }
}
$minhaCaneta = new caneta();
$minhaCaneta->marca = "Bic";
$minhaCaneta->cor = "Azul";
$minhaCaneta->tipo = "Esferográfica";
$minhaCaneta->ponta = "Média";
$minhaCaneta->preco = 2.50;

class extensao {
    public $tipo;
    public $comprimento;
    public $cor;
    public $potencia;
    public $preco;

    public function ligar() {
        return "Ligando a extensão de tipo {$this->tipo}, comprimento {$this->comprimento}, cor {$this->cor}, potência {$this->potencia} e preço R$ {$this->preco}.";
    }
    public function desligar() {
        return "Desligando a extensão de tipo {$this->tipo}, comprimento {$this->comprimento}, cor {$this->cor}, potência {$this->potencia} e preço R$ {$this->preco}.";
    }
    public function conectar() {
        return "Conectando um aparelho na extensão de tipo {$this->tipo}, comprimento {$this->comprimento}, cor {$this->cor}, potência {$this->potencia} e preço R$ {$this->preco}.";
    }
} 
class livro {
    public $titulo;
    public $autor;
    public $genero;
    public $editora;
    public $preco;

    public function abrir() {
        return "Abrindo o livro de título {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
    public function ler() {
        return "Lendo o livro de título {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
    public function fechar() {
        return "Fechando o livro de título {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
}
$minhaextensao = new extensao();
$minhaextensao->tipo = "Elétrica";
$minhaextensao->comprimento = "3 metros";
$minhaextensao->cor = "Branca";
$minhaextensao->potencia = "10v";
$minhaextensao->preco = 45.00;

class pessoa {
    
    public $nome;
    public $idade;
    public $altura;
    public $peso;
    public $genero;

    public function falar() {
        return "Seu nome é " . $this->nome . " e vc tem " . $this->idade . " anos.";
    }
    public function andar() {
        return $this->nome . " está andando.";
    }
    public function dormir() {
        return $this->nome . " está dormindo.";
    }
    public function comer() {
        return $this->nome . " está comendo.";
    }
}
$pessoa1 = new pessoa();
$pessoa1->nome = "João Ferreira";
$pessoa1->idade = 16;
$pessoa1->altura = 1.60;
$pessoa1->peso = 98.5;
$pessoa1->genero = "Masculino";

?>