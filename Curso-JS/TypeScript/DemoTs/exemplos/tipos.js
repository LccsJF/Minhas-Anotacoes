/* posso utilizar mais de um tipo para definir uma função; no "if" aplico a validação para ambos como 'string';
no return reforço para converter para 'string' = .toString(), caso haja algum tipo number ou boolean; */
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
/* dessa forma podemos trabalhar com as duas variáveis e retornar o valor correto, uma string */
console.log(somarValores(1, 5));
console.log(somarValores('Olá,', ' tudo bem?'));
console.log(somarValores('1', 5));
console.log(somarValores('Que dia é hoje? ', 5));
//# sourceMappingURL=tipos.js.map