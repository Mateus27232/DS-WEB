//===============================================Eventos de mouse==============================================
var area = document.getElementById("area");

var mensagem = document.getElementById("mensagem");

var posicao = document.getElementById("posicao");

area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples detectado!";
});

area.addEventListener("dblclick", function () {
    mensagem.textContent = "Clique duplo detectado!";
    if (area.style.background === "lightblue") {
        area.style.background = "white";
        area.style.webkitTextFillColor = "black";
    } else {
        area.style.background = "lightblue";
        area.style.webkitTextFillColor = "black";
    }
});

area.addEventListener("mouseenter", function () {
    mensagem.textContent = "O mouse entrou na área!";
    area.style.background = "blue";
    area.style.webkitTextFillColor = "white";
});

area.addEventListener("mouseleave", function () {
    mensagem.textContent = "O mouse saiu da área!";
    if (area.style.background === "lightblue") {
        area.style.background = "yellow";
        area.style.webkitTextFillColor = "black";
    } else {
        area.style.background = "gray";
        area.style.webkitTextFillColor = "white";
    }
});

area.addEventListener("mousemove", function (event) {
    posicao.textContent = "X:" + event.clientX + " Y:" + event.clientY;
});

area.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Botão direito clicado!");
});
//================================================eventos do teclado============================================


document.addEventListener("keydown", function (event) {
    // Exibe a tecla pressionada
    var campo = document.getElementById("resultado");
    campo.textContent = "Tecla pressionada: " + event.key;
    // Também mostra no console
    console.log("Tecla pressionada: " + event.key);
});





//================================================eventos de formulário============================================
var form = document.getElementById("meuFormulario");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //Impede o comportamento padrão
    console.log("Formulário enviado!");
});

var nome = document.getElementById("nome");

nome.addEventListener("input", function () {
    console.log("Digitando: " + nome.value);
});

nome.addEventListener("focus", function () {
    nome.style.background = "#e0f7ff";
});

nome.addEventListener("blur", function () {
    nome.style.background = "white";
});



//================================================eventos de janela============================================