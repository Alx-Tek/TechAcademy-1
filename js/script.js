function mostrarmenu() {
    document.querySelector("header nav").classList.toggle("mostrar");
}

function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == ""){
        alert("Nome é obrigatório");
        nome.focus();
    }

    if (email.value == ""){
        alert("Email é obrigatório");
        email.focus();
    }

    if (mensagem.value == ""){
        alert("Mensagem é obrigatória");
        mensagem.focus()
    }
}

