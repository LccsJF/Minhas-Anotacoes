const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        //aqui retorna a multiplicação do item (value) pela constante "nums"; "this" sempre se refere ao argumento "thisArg";
        return item * this.value;
    }, thisArg);
};

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));
/*retorna o valor de this em um array com o resultado da multiplicação pedida na função;

sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node map.js
this -> maçã [ 2, 4 ]
this -> laranja [ 3, 6 ]*/
