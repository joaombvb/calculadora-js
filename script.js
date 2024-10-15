let valor = 0;
const botoes = document.querySelectorAll("button");
const display = document.querySelector("p");
let valorNoDisplay = "";
let valorAnterior = 0;
let resultado = 0;
let operador = "";
let operadorEmAndamento = false;
const operadores = ['+', '-', 'x', '÷'];
display.textContent = "0";

botoes.forEach(botao => { 
    botao.addEventListener("click", function() {
        if (display.textContent === "0" && !operadores.includes(botao.textContent)) {
            display.textContent = "";
        }
        valor = botao.textContent;
        mostrarNumero();
    });
});

function mostrarNumero() {
    valorNoDisplay = display.textContent;

    if ((parseInt(valor) >= 0 && parseInt(valor) <= 9)) {
        if (operadorEmAndamento) {
            valorNoDisplay = valor;
            operadorEmAndamento = false;
        } else {
            valorNoDisplay += valor;
        }
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
        calcular();
        display.textContent = resultado;
        operador = "";
    } else if (valor === "C") {
        limpar();
    } else if (valor === "%") {
        porcentagem();
    } else if (operadores.includes(valor)) {
        if (operador) {
            calcular();
        }
        valorAnterior = parseFloat(display.textContent);
        operador = valor;
        operadorEmAndamento = true;
    }
}

function calcular() {
    let valorAtual = display.textContent;

    valorAtual === "" ? valorAtual = 0 : valorAtual = parseFloat(valorAtual);

    switch (operador) {
        case "+":
            resultado = valorAnterior + valorAtual;
            break;
        case "-":
            resultado = valorAnterior - valorAtual;
            break;
        case "x":
            resultado = valorAnterior * valorAtual;
            break;
        case "÷":
            if (valorAtual === 0) {
                limpar();
                resultado = "ERROR";
            } else {
                resultado = valorAnterior / valorAtual;
            }
            break;
        case "":
            resultado = valorAtual;
            break;    
    }
    display.textContent = resultado;
    valorAnterior = resultado;
}

function porcentagem() {
    let valorAtual = parseFloat(display.textContent);

    if (isNaN(valorAtual) || valorAtual === 0) {
        display.textContent = "0";
        return;
    }

    if (valorAnterior !== 0) {
        switch (operador) {
            case "+":
                resultado = valorAnterior + (valorAnterior * (valorAtual / 100));
                break;
            case "-":
                resultado = valorAnterior - (valorAnterior * (valorAtual / 100));
                break;
            case "x":
                resultado = valorAnterior * (valorAtual / 100);
                break;
            case "÷":
                if (valorAtual === 0) {
                    limpar();
                    resultado = "ERROR";
                } else {
                    resultado = valorAnterior / (valorAtual / 100);
                }
                break;
            default:
                resultado = valorAtual / 100; // Se o usuário apenas pressionar '%' sem operador
                break;
        }
    } else {
        resultado = valorAtual / 100; // Caso não haja valor anterior, considera apenas a porcentagem do valor atual.
    }

    resultado = 
    display.textContent = resultado;
    valorAnterior = resultado;
    operador = ""; // Reseta o operador após calcular a porcentagem
}

function limpar() {
    display.textContent = "0";
    valorAnterior = 0;
    resultado = 0;
    operador = "";
    operadorEmAndamento = false;
}
