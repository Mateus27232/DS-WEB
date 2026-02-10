function trocarImagem() {
    var imagem = document.getElementById("foto");
    if (imagem.src.match("images.jpg")) {
        imagem.src = "imagem.png";
    } else {
        imagem.src = "images.jpg";
    }
}