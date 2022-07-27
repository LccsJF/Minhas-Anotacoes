//Any e Unknown

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

//any assume o tipo de qualquer tipo pré-determinado; "stringTest" aceita qualquer tipo;
let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

//----------------------------------------------------------------------------

//tipo "unknown" não pode ser atribuído ao tipo "string";
let stringTest2: string = 'agora vai';
stringTest2 = unknownValor;

/* para utilizar o "unknown" é preciso fazer validações "if" para uma alocação correta;
no caso, confirmar se "unknown" é realmente uma "string"; */

if(typeof unknownValor === 'string') {
    return stringTest2 = unknownValor;
}
