document.getElementById('formulario').addEventListener('submit', function (e) {e.preventDefault();
    let valido = true;

    valido = 
        validarNome() &&
        validarEmail() &&
        validarCPF() &&
        validarSenha() &&
        validarConfirmarSenha() &&
        validarTelefone() &&
        validarCEP() &&
        validarDataNascimento() &&
        validarValor() &&
        validarURL() &&
        validarCartao();

    if (valido) {
        document.getElementById('resultado').innerHTML = 'Formulário enviado com sucesso!';
    }
});


// Validação Nome
function validarNome() {
    const campo = document.getElementById('nome');
    const erroElement = document.getElementById('erro-nome');
    const valor = campo.value.trim();

    if (valor.length < 3) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Nome deve ter pelo menos 3 caracteres';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Email
function validarEmail() {
    const campo = document.getElementById('email');
    const erroElement = document.getElementById('erro-email');
    const valor = campo.value.trim();

    if (valor.length < 3) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Email deve ter pelo menos 3 caracteres';
        return false;
    }

    const posArroba = valor.indexOf('@');
    const posPonto = valor.indexOf('.', posArroba + 1);

    if (posArroba === -1 || posPonto === -1) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Deve conter @ seguido de um ponto';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Senha
function validarSenha() {
    const campo = document.getElementById('senha');
    const erroElement = document.getElementById('erro-senha');
    const valor = campo.value.trim();

    if (valor.length < 8) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Senha deve ter pelo menos 8 caracteres';
        return false;
    }

    if (!/[A-Z]/.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'A senha precisa ter pelo menos 1 letra maiúscula';
        return false;
    }

    if (!/[0-9]/.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'A senha precisa ter pelo menos 1 número';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Confirmar Senha
function validarConfirmarSenha() {
    const campoSenha = document.getElementById('senha');
    const campoConfirmar = document.getElementById('confirma-senha');
    const erroElement = document.getElementById('erro-senha');

    if (campoSenha.value !== campoConfirmar.value) {
        campoConfirmar.style.borderColor = 'red';
        erroElement.textContent = 'As senhas não coincidem';
        return false;
    }

    campoConfirmar.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação CPF
function validarCPF() {
    const campo = document.getElementById('cpf');
    const erroElement = document.getElementById('erro-cpf');
    let cpf = campo.value.trim();

    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'CPF deve ter 11 números';
        return false;
    }
// Verifica se os numeros nao são iguais 
    if (/^(\d)\1+$/.test(cpf)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'CPF inválido';
        return false;
    }


    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto >= 10) resto = 0;

    if (resto != cpf[9]) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'CPF inválido';
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto >= 10) resto = 0;

    if (resto != cpf[10]) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'CPF inválido';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Telefone
function validarTelefone() {
    const campo = document.getElementById('telefone');
    const erroElement = document.getElementById('erro-telefone');
    const valor = campo.value.trim();
    // \d{2} - 2 dígitos, \s - espaço
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    if (!regex.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Formato inválido. Use ex: (11) 99999-9999';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação CEP
function validarCEP() {
    const campo = document.getElementById('cep');
    const erroElement = document.getElementById('erro-cep');
    const valor = campo.value.trim();

    const regex = /^\d{5}-\d{3}$/;

    if (!regex.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'CEP deve estar no formato 00000-000';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Data Nascimento
function validarDataNascimento() {
    const campo = document.getElementById('data-nascimento');
    const erroElement = document.getElementById('erro-data-nascimento');
    const valor = campo.value;

    const nascimento = new Date(valor);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    if (idade < 14) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Você deve ter pelo menos 14 anos';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Valor
function validarValor() {
    const campo = document.getElementById('valor');
    const erroElement = document.getElementById('erro-valor');
    const valor = campo.value.trim();

    const regex = /^\d{1,3}(\.\d{3})*,\d{2}$/;

    if (!regex.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Formato inválido. Use ex: 1.299,90';
        return false;
    }

    let numero = valor.replace(/\./g, '').replace(',', '.');
    numero = parseFloat(numero);

    const min = 10;
    const max = 5000;

    if (numero < min || numero > max) {
        campo.style.borderColor = 'red';
        erroElement.textContent = `Valor deve estar entre ${min} e ${max}`;
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação URL
function validarURL() {
    const campo = document.getElementById('url');
    const erroElement = document.getElementById('erro-url');
    const valor = campo.value.trim();

    const regex = /^https?:\/\/.+\..+/;

    if (!regex.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'URL inválida. Ex: https://site.com';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}


// Validação Cartão
function validarCartao() {
    const campo = document.getElementById('cartao');
    const erroElement = document.getElementById('erro-cartao');
    const valor = campo.value.trim();

    const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;

    if (!regex.test(valor)) {
        campo.style.borderColor = 'red';
        erroElement.textContent = 'Use formato: 1111 2222 3333 4444';
        return false;
    }

    campo.style.borderColor = 'green';
    erroElement.textContent = '';
    return true;
}