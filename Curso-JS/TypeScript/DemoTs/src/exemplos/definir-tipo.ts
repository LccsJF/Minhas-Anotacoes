/* para proteger uma função e impedir que alguém interfira nela, podemos definir o valor de um parâmetro:
numero1: "number" e também definir o tipo: "number";
dessa forma reforçamos que a variável é do tipo "number",
caso cometa algum erro em converter para "string": ."toString()"; */

function somarValoresNumericos(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(somarValoresNumericos(5, 5));