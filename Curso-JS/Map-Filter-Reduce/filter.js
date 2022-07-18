function fitraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
    //retorna somente os números que divididos por 2 resultam 0;
}

const meuArray = [3, 50, 65, 76, 90, 6, 20];

console.log(fitraPares(meuArray));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node filter.js
[ 50, 76, 90, 6, 20 ] - retorna um novo array somente os números pares(divisíveis por 2 e sem resto) da variável meuArray;*/
