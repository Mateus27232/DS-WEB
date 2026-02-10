function trocarCor() {
    var elemento = document.getElementById("conteudo");
    elemento.innerHTML = "A cor do fundo foi alterada para azul claro!";
    elemento.style.backgroundColor = "lightblue";
    var texto = elemento.innerHTML;
    console.log(texto);
}
