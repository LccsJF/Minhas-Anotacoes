//Callback

function printValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1: number, numero2: number, Callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return Callback(resultado);
}

//callback
function aoQuadrado(numero: number): number {
    return numero * numero;
}

//callback
function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

/* a função "aoQuadrado" e "dividirPorEleMesmo" são o callback que foi definido como parâmetro,
na função "somarValoresNumericosETratar"; */
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
