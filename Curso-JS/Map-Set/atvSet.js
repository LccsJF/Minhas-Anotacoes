const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    
    /*(1) retorna um set(6) com o número de elementos que não se repetem;
    return [mySet];*/
    
    /*(2) para que os elementos um set se tornem um novo array:
    utilizo o argumento "spread(...)" para retornar um novo array,
    que cria um array vazio e para cada elemento do Set, e adiciona a um novo array,
    no caso o elemento "rest = mySet" junto com o spread;*/
    return [...mySet];
}

/*console.log(valoresUnicos(meuArray));
(1) retorna um set(6) com o número de elementos que não se repetem; estou colocando um "set" dentro de um array;

sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Set (main)
$ node atvSet.js
[ Set(6) { 30, 40, 5, 223, 2049, 3034 } ]*/

console.log(valoresUnicos(meuArray));
/*(2) retorna um novo array com um set de números que não se repetem;

sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Set (main)
$ node atvSet.js
[ 30, 40, 5, 223, 2049, 3034 ]*/

