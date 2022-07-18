function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0)
}

const arr = [1, 2];

console.log(somaNumeros(arr));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node reduce.js
{ prev: 0 }
{ current: 1 }
{ prev: 1 }
{ current: 2 }
3
faz a operação de soma 2x: a 1ª quando prev=0 + current=1, retorna 1; acumula o valor de prev e current; a 2ª soma agora prev=1 e current=2 e retorna 3;*/


