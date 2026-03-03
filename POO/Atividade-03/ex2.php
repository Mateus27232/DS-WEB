<?php
class artista {
    public $nome;
    public $genero;

    function __construct($nome, $genero)
    {
        $this->nome = $nome;
        $this->genero = $genero;
    }
}

class musica {
    public $titulo;
    public artista $artista;
    public $duracao;
    function __construct($titulo, artista $artista, $duracao)
    {
        $this->titulo = $titulo;
        $this->artista = $artista;
        $this->duracao = $duracao;
    }
}

$bohemian_rhapsody = new musica("Bohemian Rhapsody", new artista("Queen", "Rock"), "5:55");
echo "Título: " . $bohemian_rhapsody->titulo . "<br>";
echo "Artista: " . $bohemian_rhapsody->artista->nome . "<br>";
echo "Gênero: " . $bohemian_rhapsody->artista->genero . "<br>";
echo "Duração: " . $bohemian_rhapsody->duracao . "<br>";

?>