let ativo = false;
let audio = document.getElementById("meuAudio");

function mudar() {
    ativo = !ativo;

    if (ativo === true) {
        document.getElementById("gif1").innerHTML =
            '<img src="memphis depay.gif" alt="gif">';
        document.getElementById("gif2").innerHTML =
            '<img src="mundial.gif" alt="gif">';
        document.getElementById("gif3").innerHTML =
            '<img src="golnoweverton.gif" alt="gif">';
        document.getElementById("gif4").innerHTML =
            '<img src="cabecaporco.gif" alt="gif">';
        document.getElementById("gif5").innerHTML =
            '<img src="breno-bidon-drible-corinthians.gif" alt="gif">';
        document.getElementById("gif6").innerHTML =
            '<img src="corinthians.gif" alt="gif">';
      
        audio.play();  // toca o áudio
    } else {
        document.getElementById("gif1").innerHTML = "";
        document.getElementById("gif2").innerHTML = "";
        document.getElementById("gif3").innerHTML = "";
        document.getElementById("gif4").innerHTML = "";
        document.getElementById("gif5").innerHTML = "";
        document.getElementById("gif6").innerHTML = "";

        audio.currentTime = 0; // volta pro começo do áudio
        audio.pause(); // pausa o áudio
    }
}