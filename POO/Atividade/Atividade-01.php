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
echo $meutenis->calcar();
echo "<br>";

$seutenis = new tenis();
$seutenis->marca = "Puma";
$seutenis->modelo = "RS-X";
$seutenis->tamanho = 40;
$seutenis->cor = "Branco";
$seutenis->preco = 300.00;
echo $seutenis->amarrar();
echo "<br>";

$nossostenis = new tenis();
$nossostenis->marca = "Adidas";
$nossostenis->modelo = "Ultraboost";
$nossostenis->tamanho = 41;
$nossostenis->cor = "Cinza";
$nossostenis->preco = 400.00;
echo $nossostenis->lavar();
echo "<br>";

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
echo $minhaCamisa->vestir();
echo "<br>";

$suaCamisa = new camisa();
$suaCamisa->marca = "Nike";
$suaCamisa->tamanho = "G";
$suaCamisa->cor = "Preta";
$suaCamisa->preco = 150.00;
$suaCamisa->gola = "Redonda";
echo $suaCamisa->lavar();
echo "<br>";

$nossacamisa = new camisa();
$nossacamisa->marca = "Puma";
$nossacamisa->tamanho = "GG";
$nossacamisa->cor = "Azul";
$nossacamisa->preco = 130.00;
$nossacamisa->gola = "V";
echo $nossacamisa->dobrar();
echo "<br>";

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
echo $minhaCaneta->escrever();
echo "<br>";

$suacaneta = new caneta();
$suacaneta->marca = "Pilot";
$suacaneta->cor = "Preta";
$suacaneta->tipo = "Gel";
$suacaneta->ponta = "Fina";
$suacaneta->preco = 5.00;
echo $suacaneta->tampar();
echo "<br>";

$nossacaneta = new caneta();
$nossacaneta->marca = "Faber-Castell";
$nossacaneta->cor = "Vermelha";
$nossacaneta->tipo = "Tinteiro";
$nossacaneta->ponta = "Grossa";
$nossacaneta->preco = 15.00;
echo $nossacaneta->destampar();
echo "<br>";

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

$minhaextensao = new extensao();
$minhaextensao->tipo = "Elétrica";
$minhaextensao->comprimento = "3 metros";
$minhaextensao->cor = "Branca";
$minhaextensao->potencia = "10v";
$minhaextensao->preco = 45.00;
echo $minhaextensao->ligar();
echo "<br>";

$suaextensao = new extensao();
$suaextensao->tipo = "Eletrônica";
$suaextensao->comprimento = "5 metros";
$suaextensao->cor = "Preta";
$suaextensao->potencia = "15v";
$suaextensao->preco = 60.00;
echo $suaextensao->desligar();
echo "<br>";

$nossosextensao = new extensao();
$nossosextensao->tipo = "Industrial";
$nossosextensao->comprimento = "10 metros";
$nossosextensao->cor = "Amarela";
$nossosextensao->potencia = "20v";
$nossosextensao->preco = 80.00; 
echo $nossosextensao->conectar();
echo "<br>";

class livro {
    public $titulo;
    public $autor;
    public $genero;
    public $editora;
    public $preco;

    public function abrir() {
        return "Abrindo o livro  {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
    public function ler() {
        return "Lendo o livro {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
    public function fechar() {
        return "Fechando o livro {$this->titulo}, autor {$this->autor}, gênero {$this->genero}, editora {$this->editora} e preço R$ {$this->preco}.";
    }
}

$meuLivro = new livro();
$meuLivro->titulo = "O Alquimista";
$meuLivro->autor = "Paulo Coelho";
$meuLivro->genero = "Ficção";
$meuLivro->editora = "HarperCollins";
$meuLivro->preco = 30.00;
echo $meuLivro->abrir();
echo "<br>";

$seuLivro = new livro();
$seuLivro->titulo = "1984";
$seuLivro->autor = "George Orwell";
$seuLivro->genero = "Distopia";
$seuLivro->editora = "Companhia das Letras";
$seuLivro->preco = 25.00;
echo $seuLivro->ler();
echo "<br>";

$nossoLivro = new livro();
$nossoLivro->titulo = "Dom Casmurro";
$nossoLivro->autor = "Machado de Assis";
$nossoLivro->genero = "Romance";
$nossoLivro->editora = "Penguin Classics";
echo $nossoLivro->fechar();
echo "<br>";



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
echo $pessoa1->andar();
echo "<br>";

$pessoa2 = new pessoa();
$pessoa2->nome = "João Ferreira";
$pessoa2->idade = 12;
$pessoa2->altura = 1.40;
$pessoa2->peso = 95.0;
$pessoa2->genero = "Não binario";
echo $pessoa2->falar();
echo "<br>";

$pessoa3 = new pessoa();
$pessoa3->nome = "Arthur amorim";
$pessoa3->idade = 18;
$pessoa3->altura = 1.75;
$pessoa3->peso = 75.0;
$pessoa3->genero = "Masculino";
Echo $pessoa3->dormir();
echo "<br>";

?>