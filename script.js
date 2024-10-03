let valor = 0;
const botoes = document.querySelectorAll("button");
const display = document.querySelector("p");
let valorNoDisplay = "";
let valorAnterior = 0;
let resultado = 0;
let operador = "";
const operadores = ['+', '-', 'x', '÷'];
display.textContent = "0";

botoes.forEach(botao => { 
    botao.addEventListener("click", function() {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        valor = botao.textContent;
        mostrarNumero();
    });
});

function mostrarNumero() {
    valorNoDisplay = display.textContent;

    if ((parseInt(valor) >= 0 && parseInt(valor) <= 9)) {
        valorNoDisplay += valor;
        display.textContent = valorNoDisplay;
    } else if (valor === ".") {
        if (valorNoDisplay.includes(".")) {
            return;
        }
        valorNoDisplay === "" ? valorNoDisplay = "0" + valor : valorNoDisplay += valor;
        display.textContent = valorNoDisplay;
    } else if (valor === "+/-") {
        if (valorNoDisplay === "") {
            display.textContent = "0";
        } else {
            valorNoDisplay.includes("-") ? valorNoDisplay = valorNoDisplay.replace(/-/, "") : valorNoDisplay = "-" + valorNoDisplay;
            display.textContent = valorNoDisplay;
        }
    } else if (valor === "=") {
        if (display.textContent === "") {
            display.textContent = 0;
        }
        resultado = display.textContent;
        calcular();
        display.textContent = resultado;
    } else if (valor === "C") {
        limpar();
    } else if (operadores.includes(valor)) {
        if (valorNoDisplay === "") {
            valorNoDisplay = 0;
        }
        valorAnterior = parseFloat(resultado);
        operador = valor;
        display.textContent = "0";
    }
}

function calcular() {
    let valorAtual = valorNoDisplay;
    valorAnterior = parseFloat(resultado);

    if (valorAtual === "") {
        valorAtual = 0;
    } else {
        valorAtual = parseFloat(valorAtual);
    }

    if (operador === "+") {
        resultado = valorAnterior + valorAtual;
    } else if (operador === "-") {
        resultado = valorAnterior - valorAtual;
    } else if (operador === "x") {
        resultado = valorAnterior * valorAtual;
    } else if (operador === "÷") {
        if (valorAtual <= 0) {
            limpar();
            resultado = "ERROR";
        } else {
            resultado = valorAnterior / valorAtual;
        }    
    }
}

function limpar() {
    display.textContent = "0";
    valorAnterior = 0;
    valorAtual = 0;
    resultado =  0;
    operador = "";  
}


