//Callback
function printValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, Callback) {
    var resultado = numero1 + numero2;
    return Callback(resultado);
}
//callback
function aoQuadrado(numero) {
    return numero * numero;
}
//callback
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
/* a função "aoQuadrado" e "dividirPorEleMesmo" são o callback que foi definido como parâmetro,
na função "somarValoresNumericosETratar"; */
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
//# sourceMappingURL=callback.js.map