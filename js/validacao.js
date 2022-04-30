const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
];

const inputs = document.querySelectorAll("input, textarea");
const btnSubmit = document.getElementById("btnSubmit");

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo nome não pode estar vazio.",
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "O email digitado não é válido.",
    },
    assunto: {
        valueMissing: "O campo de assunto não pode estar vazio.",
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
    },
};

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = "";

    tiposDeErro.forEach((erro) => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    });

    return mensagem;
}

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    btnSubmit.disabled = input.validity.valid;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalido");
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";

    } else {
        input.parentElement.classList.add("input-container--invalido");
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
            mostraMensagemDeErro(tipoDeInput, input);
    }
    btnSubmit.disabled = false;
    validaCampos();
}

function validaCampos() {

    inputs.forEach(input => {
        if (!input.validity.valid) {
            btnSubmit.disabled = true;
        }
    });

}

