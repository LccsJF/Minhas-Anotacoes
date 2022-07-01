//DIFERENÇA ENTRE "VAR", "LET", "CONST" E A EXPRESSÃO "HOISTING"

//__________________________________________________________________________________________________________________________

//EXEMPLO 1 - VAR E LET

//hoisting let e const - é uma atribuição a uma variável antes de declarar no caso "numberOne", automaticamente reconhece declaração: "var numberOne" e lê primeiro no escopo
numberOne = 1; // é uma atribuição da variável

console.log(numberOne + 2);

var numberOne; // é uma declaração de escopo global, válido pra todo código, da atribuição da "numberOne"

let numberOne; // é preciso declarar antes, o JS não reconhece como "let"; é preciso ser declarada antes da atribuição: "1º let = numberOne;" "2º numberOne = 1;" - primeiro eu declaro, depois atribuo; no caso "console.log(numberOne);" retornará o erro abaixo

console.log(numberOne); //retornará esse erro mostrando que é apenas uma atribuição e que não pode ser lida, acessada
sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Variaveis (main)
$ node index.js
F:\Minhas-Anotacoes\Curso-JS\Variaveis\index.js:4
numberOne = 1; // é uma atribuição da variável
          ^

ReferenceError: Cannot access 'numberOne' before initialization

//__________________________________________________________________________________________________________________________

// EXEMPLO 2 - VAR E LET

var firstName = 'João';
var lastName = 'Souza'; // variável de escopo global

if(firstName === 'João') {
    var firstName = 'Pedro'; // redeclarado para Pedro
    let lastName = 'Silva'; // variável de escopo de bloco; está declarado mas nunca foi lido por isso aparece na cor "cinza"
}

console.log(firstName, lastName); // retornará: Pedro Souza; 
// a variável "lastName"foi redeclarada dentro do escopo de bloco "if" para Silva, mas não foi declarada fora dele fora do escopo "if" 
sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Variaveis (main)
$ node index.js
F:\Minhas-Anotacoes\Curso-JS\Variaveis\index.js:51
Pedro Souza

//__________________________________________________________________________________________________________________________

// EXEMPLO 3 - CONSTANTE

const FIRST_NAME = "Eduardo";

FIRST_NAME = "André";

// pelo fato de constante não poder ser redeclarada ou reatribuída, ou seja, não pode ser mudada, retorna o seguinte erro:

sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Variaveis (main)
$ node index.js
F:\Minhas-Anotacoes\Curso-JS\Variaveis\index.js:51
FIRST_NAME = "André";
           ^

TypeError: Assignment to constant variable. 

/* - a variável declarada "FIRST_NAME = "André" é do tipo "hoisting: var", então ela será lida no início do escopo global, enquanto na mensagem de erro, é uma variável do tipo constante, ou seja, sempre será "Eduardo", não pode ser mudada. */


const LAST_NAME = "Sampaio";

console.log(LAST_NAME); // a constante foi declarada no inicio do escopo e sempre será "Sampaio" até o código parar de rodar.

sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Variaveis (main)
$ node index.js
F:\Minhas-Anotacoes\Curso-JS\Variaveis\index.js:51
Sampaio

//__________________________________________________________________________________________________________________________








