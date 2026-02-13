document.getElementById("lista").style.color = "red";

var contadoritens = 0

function adicionar(){
    contadoritens ++
    let novoitem = document.createElement("li");
    novoitem.textContent = contadoritens + "-" +prompt("Digite o item a ser adicionado");
    novoitem.setAttribute("id", contadoritens);

    let botaoremover = document.createElement("button")
    botaoremover.textContent = "remover"
    botaoremover.setAttribute("onclick", `remover(${contadoritens})`)

    novoitem.appendChild(botaoremover)

    document.getElementById("lista").appendChild(novoitem);
}


//criando funcao para remover item da lista
function remover(itemlista){
    //var item = document.getElementById(prompt("id do item a ser removido"));
    var item= document.getElementById(itemlista)
    document.getElementById("lista").removeChild(item);
}


