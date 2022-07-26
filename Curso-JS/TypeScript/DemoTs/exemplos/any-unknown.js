//Any e Unknown
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
//any assume o tipo de qualquer tipo pré-determinado; "stringTest" aceita qualquer tipo;
var stringTest = 'verificar';
stringTest = anyEstaDeVolta;
var unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
//----------------------------------------------------------------------------
//tipo "unknown" não pode ser atribuído ao tipo "string";
var stringTest2 = 'agora vai';
stringTest2 = unknownValor;
/* para utilizar o "unknown" é preciso fazer validações "if" para uma alocação correta;
no caso, confirmar se "unknown" é realmente uma "string"; */
if (typeof unknownValor === 'string') {
    return stringTest2 = unknownValor;
}
//# sourceMappingURL=any-unknown.js.map