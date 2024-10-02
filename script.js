let valor = 0;
let botoes = document.querySelectorAll("button");
let display = document.querySelector("p");
display.textContent = valor;

botoes.forEach(botao => { 
    botao.addEventListener("click", 
        function() {
            valor = botao.textContent;
            mostrarNumero();
        }
    );
});

function mostrarNumero() {
    valor = parseInt(valor);

    if (valor >= 0 && valor < 10) {

        if (valor == 0) {
            display.textContent = valor;
        } else {
            let valorNoDisplay = display.textContent;
            valorNoDisplay = valorNoDisplay + valor;
            display.textContent = valorNoDisplay;
        }
    } else {
        console.log("erro");
    }
}

