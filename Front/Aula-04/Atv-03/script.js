var contadorId = 0;

function cadastrodoAluno() {
   
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const rm = document.getElementById("rm").value;
    const telefone = document.getElementById("telefone").value;
    const turma = document.getElementById("turma").value;

    if (nome === "" || email === "" || rm === "" || telefone === "" || turma === "") {
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    contadorId++;
    const idAtual = "aluno-" + contadorId;

   
    const lista = document.getElementById("listaAlunos");

   
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", idAtual);
    itemDiv.setAttribute("class", "aluno-item");

   
   
   
    lista.appendChild(itemDiv);

   
    limparCampos();
   
    console.log("Aluno cadastrado! ID:", idAtual);
}


function excluirAluno(idParaRemover) {
   
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
        const elemento = document.getElementById(idParaRemover);
        if (elemento) {
            elemento.remove();
            console.log("Cadastro removido:", idParaRemover);
        }
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rm").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("turma").value = "";
   
   
    document.getElementById("nome").focus();
}

