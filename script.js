// Contagem Regressiva
function contagemRegressiva() {
    let numero = document.getElementById("contador").value;
    let resultado = document.getElementById("resultadoContador");
    resultado.innerHTML = "";

    while (numero >= 0) {
        resultado.innerHTML += numero + "<br>";
        numero--;
    }

    resultado.innerHTML += "Fim da contagem regressiva.";
}

// Tabuada
function calcularTabuada() {
    let numero = document.getElementById("numeroTabuada").value;
    let resultado = document.getElementById("resultadoTabuada");
    resultado.innerHTML = "";

    let i = 1;
    while (i <= 10) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
        i++;
    }

    resultado.innerHTML += "Fim da tabuada.";
}

// Jogo: Adivinhe o Número
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
    let palpite = document.getElementById("palpite").value;
    let resultado = document.getElementById("resultadoJogo");

    if (palpite == numeroSecreto) {
        resultado.innerHTML = "Parabéns! Você acertou o número secreto!";
        numeroSecreto = Math.floor(Math.random() * 10) + 1; // Gera novo número
    } else {
        resultado.innerHTML = "Tente novamente!";
    }
}
