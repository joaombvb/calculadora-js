export function calcular(valorAnterior, valorAtual, operador) {
    let resultado = 0;

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
                return "ERROR";
            } else {
                resultado = valorAnterior / valorAtual;
            }
            break;
        default:
            resultado = valorAtual;
            break;    
    }

    return resultado;
}
