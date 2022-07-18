function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node mapSemThis.js
[ 4, 8, 12, 16, 20 ] - novo array; o array original não foi alterado;*/

console.log(nums);
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node mapSemThis.js
[ 4, 8, 12, 16, 20 ] - novo array com o resultado da função;
[ 2, 4, 6, 8, 10 ] - o array original;*/