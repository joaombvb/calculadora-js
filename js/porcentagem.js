export function porcentagem(valorAnterior, valorAtual, operador) {
    let resultado = 0;

    if (isNaN(valorAtual) || valorAtual === 0) {
        return 0;
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
                    return "ERROR";
                } else {
                    resultado = valorAnterior / (valorAtual / 100);
                }
                break;
            default:
                resultado = valorAtual / 100;
                break;
        }
    } else {
        resultado = valorAtual / 100;
    }

    return resultado;
}
