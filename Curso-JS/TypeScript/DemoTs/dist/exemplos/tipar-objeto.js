"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
/*no typescript é preciso "tipar" as variáveis,
identificar o tipo para os parâmetros: number, string / Ex: numero1: number, numero2: number */
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
//typescript define tipo por inferência: sempre lembrará o tipo que foi determinado para a variável;
var devePrintar = true;
var frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
