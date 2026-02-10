document.getElementById("conteudo").innerHTML = "<p> Olá, mundo! </p>";

document.getElementById("conteudo").innerHTML += "<p> Vai Corinthians! </p>"; 

//USANDO SET ATRIBUTTE e getAttribute 
document.getElementById("foto").setAttribute("src", "images.jpg"); //define o atributo src da imagem
document.getElementById("foto2").setAttribute("src", "imagem.png"); //define o atributo src da imagem
document.getElementById("foto3").setAttribute("src", "image.jpg"); //define o atributo src da imagem

console.log(document.getElementById("foto").getAttribute("alt", "images.jpg")); //exibe o valor do atributo alt da imagem no console

//botao de aumentar as fotos
function mudaTamanho() {
    document.getElementById("foto").style.width = "1000px"; //altera a largura da imagem para 400px
    document.getElementById("foto").style.height = "300px"; //altera a altura da imagem para 300px

    document.getElementById("foto3").style.width = "1000px"; //altera a largura da imagem para 400px
    document.getElementById("foto3").style.height = "300px"; //altera a altura da imagem para 300px


    document.getElementById("foto2").style.width = "1000px"; //altera a largura da imagem para 400px
    document.getElementById("foto").style.height = "300px"; //altera a altura da imagem para 300px
}
 function diminuirFotos() {
    document.getElementById("foto").style.width = "500px"; //altera a largura da imagem para 200px
    document.getElementById("foto").style.height = "150px"; //altera a altura da imagem para 200px
    document.getElementById("foto2").style.width = "500px"; //altera a largura da imagem para 200px
    document.getElementById("foto2").style.height = "150px"; //altera a altura da imagem para 200px
    document.getElementById("foto3").style.width = "500px"; //altera a largura da imagem para 200px
    document.getElementById("foto3").style.height = "150px"; //altera a altura da imagem para 200px
}

//alterando propriedade css
document.getElementById("conteudo").style.color = "black"; //altera a cor do texto para azul
document.getElementById("conteudo").style.fontSize = "20px"; //altera o tamanho da fonte para 20px

document.getElementById("foto").style.width = "800px"; //altera a largura da imagem para 200px
document.getElementById("foto").style.height = "150px"; //altera a altura da imagem para 200px

//hino do corinthians
document.getElementById("conteudo").innerHTML += "<p> Salve o Corinthians, o campeão dos campeões, eternamente dentro dos nossos corações. Salve o Corinthians de tradições e glórias mil, tu és orgulho do Brasil. Teu passado é uma bandeira, teu presente é uma lição, e o teu futuro é uma grande nação. Salve o Corinthians, o campeão dos campeões, eternamente dentro dos nossos corações. Salve o Corinthians de tradições e glórias mil, tu és orgulho do Brasil. </p>";
/*

function somarnumeros(num1, num2) {
    return num1 + num2;
}

let resultado = somarnumeros(5, 10);//chama a funcao e armazena o resultado em uma variavel
console.log(resultado); //exibe resultado no console

//trabalhando com data e hora
let dataAtual = new Date(); //cria um objeto de data com a data e hora atual
console.log(dataAtual.toISOString()); //exibe a data atual no console

let ano = dataAtual.getFullYear(); //obtem o ano atual
let mes = dataAtual.getMonth() + 1; //obtem o mes atual (0-11, por isso soma 1)
let dia = dataAtual.getDate(); //obtem o dia do mes atual
let hora = dataAtual.getHours(); //obtem a hora atual
let minutos = dataAtual.getMinutes(); //obtem os minutos atuais
let segundos = dataAtual.getSeconds(); //obtem os segundos atuais

console.log(`Data atual: ${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`); //exibe a data formatada no console

//outro exemplo de data
let hoje = new Date();//cria um objeto de data com a data atual
let diasoaraadicionar = 99999; //quantidade de dias a adicionar

//cria uma nova data a partir da data atual e adiciona os dias
let novaData = new Date(hoje);
novaData.setDate(hoje.getDate() + diasoaraadicionar); //adiciona os dias à data

console.log(`Data atual: ${hoje.toLocaleDateString()}`); //exibe a data atual no console
console.log(`Nova data: ${novaData.toLocaleDateString()}`); //exibe a nova data no console

//tolocaldatestring exibe a data no formato local do usuario.
console.log(`Data atual: ${hoje.toLocaleDateString('pt-BR')}`); //exibe a data atual no formato brasileiro
console.log(`Data atual: ${hoje.toLocaleDateString('en-US')}`); //exibe a data atual no formato americano

//diferenca em milisegundos entre duas datas
let diferencaMs = novaData - hoje; //subtrai as duas datas para obter a diferenca em milisegundos

//converte a diferenca para dias
let diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24)); //converte milisegundos para dias
console.log(`Diferenca em dias: ${diferencaDias} dias`); //exibe a diferenca em dias no console
*/ 