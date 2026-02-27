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
        document.getElementById("gif7").innerHTML =
            '<img src="fiel-fiel-torcida.gif" alt="gif">';
        
      
        audio.play();  // toca o áudio
    } else {
        document.getElementById("gif1").innerHTML = "";
        document.getElementById("gif2").innerHTML = "";
        document.getElementById("gif3").innerHTML = "";
        document.getElementById("gif4").innerHTML = "";
        document.getElementById("gif5").innerHTML = "";
        document.getElementById("gif6").innerHTML = "";
        document.getElementById("gif7").innerHTML = "";
       

        audio.currentTime = 0; // volta pro começo do áudio
        audio.pause(); // pausa o áudio
    }
}

const imagem = document.querySelector(".imagem");

    let mouseX = 0;
    let mouseY = 0;
    let rotacao = 0;

    document.addEventListener("mousemove", function(event){
        mouseX = event.clientX - 30;
        mouseY = event.clientY - 30;

        // cria rastro
        let clone = imagem.cloneNode(true);
        clone.classList.remove("imagem");
        clone.classList.add("rastro");
        clone.style.left = mouseX + "px";
        clone.style.top = mouseY + "px";
        clone.style.transform = "rotate(" + rotacao + "deg)";
        document.body.appendChild(clone);

        setTimeout(() => clone.remove(), 500);
    });

    function animar(){
        rotacao += 5; // velocidade da rotação

        imagem.style.left = mouseX + "px";
        imagem.style.top = mouseY + "px";
        imagem.style.transform = "rotate(" + rotacao + "deg)";

        requestAnimationFrame(animar);
    }

    animar();

    // cria cópia ao clicar
    document.addEventListener("click", function(event){

        let clone = imagem.cloneNode(true);

        clone.classList.remove("imagem");
        clone.classList.add("fixo");

        clone.style.left = (event.clientX - 30) + "px";
        clone.style.top = (event.clientY - 30) + "px";

        document.body.appendChild(clone);
    });

function animarTrofeu(){

    x += velocidadeX;
    y += velocidadeY;

    let larguraTela = window.innerWidth;
    let alturaTela = window.innerHeight;

    let larguraImg = trofeu.offsetWidth;
    let alturaImg = trofeu.offsetHeight;

    if(x + larguraImg >= larguraTela || x <= 0){
        velocidadeX *= -1;
    }

    if(y + alturaImg >= alturaTela || y <= 0){
        velocidadeY *= -1;
    }

    trofeu.style.left = x + "px";
    trofeu.style.top = y + "px";

    requestAnimationFrame(animarTrofeu);
}

animarTrofeu();