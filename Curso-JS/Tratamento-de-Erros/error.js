function validaArray(arr, num) {
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("O array precisa ser do tipo number");

    if(arr.lenght !== num) throw new RangeError("Tamanho inválido!");
}

//utilizando try/catch
function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if(arr.lenght !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um Reference Error");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("Este erro é um Type Error");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Este erro é um Range Error");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }              
    }  
}

console.log(validaArray());
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Tratamento-de-Erros (main)
$ node error.js
Este erro é um Reference Error
Envie os parâmetros
undefined*/

console.log(validaArray(5, 5));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Tratamento-de-Erros (main)
$ node error.js
Este erro é um Type Error
O array precisa ser do tipo object
undefined*/

console.log(validaArray([] 'a'));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Tratamento-de-Erros (main)
$ node error.js
Este erro é um Type Error
O Num precisa ser do tipo number
undefined*/

console.log(validaArray([], 5));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Tratamento-de-Erros (main)
$ node error.js
Este erro é um Range Error
Tamanho inválido!
undefined*/



