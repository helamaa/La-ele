document.getElementById("verificarNomeBtn").addEventListener("click", VerificarNome)

function VerificarNome(){
    var nomeDigitado = document.getElementById("nomeInput").value;
    var mensagem = document.getElementById("mensagem")

    if (nomeDigitado.toLowerCase() === "lucas") {
        mensagem.textContent = "Lucas, você é Gay "

    } else {
        mensagem.textContent = "Olá, " + nomeDigitado + " Você não é Gay"
    }
}