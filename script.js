import { calcular } from './js/calcular.js';
import { porcentagem } from './js/porcentagem.js';
import { limpar } from './js/limpar.js';
import { colorMode } from './js/colorMode.js';

let valor = 0;
const botoes = document.querySelectorAll(".botao");
const display = document.querySelector(".display-txt");
let valorNoDisplay = "";
let valorAnterior = 0;
let resultado = 0;
let operador = "";
let operadorEmAndamento = false;
const operadores = ['+', '-', 'x', '÷'];

if (display) {
    display.textContent = "0";
}


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
        resultado = calcular(valorAnterior, parseFloat(display.textContent), operador);
        display.textContent = resultado;
        operador = "";
    } else if (valor === "C") {
        limpar(valorAnterior, resultado, operador, operadorEmAndamento);
    } else if (valor === "%") {
        resultado = porcentagem(valorAnterior, parseFloat(display.textContent), operador);
        display.textContent = resultado;
        operador = "";
    } else if (operadores.includes(valor)) {
        if (operador) {
            resultado = calcular(valorAnterior, parseFloat(display.textContent), operador);
            display.textContent = resultado;
        }
        valorAnterior = parseFloat(display.textContent);
        operador = valor;
        operadorEmAndamento = true;
    }
}

document.getElementById("color-mode").addEventListener("click", function () {
    colorMode();
});