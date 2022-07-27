"use strict";
//any é um "tipo" que pode receber qualquer "tipo" de objeto: number, string, boolean;
var valorAny;
valorAny = 3;
valorAny = 'Olá!';
valorAny = true;
/* quando declaro que a variável é igual a "valorAny", a tipagem passa a ser genérica,
aceitando tudo, ainda que tenha definido tipo como "string"; */
var valorString = 'teste';
valorString = valorAny;
var valorString2 = 'testão';
valorString2 = valorAny;
var somarString;
(function (string1, string2) {
    return string1 + string2;
});
somarString(valorString, valorString2);
somarString('Olá, ', ' como vai?');
