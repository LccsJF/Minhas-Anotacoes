"use strict";
var buttonTest = document.getElementById('button');
// a "?" diz para o código: se essa função existir, rode o código; se não ignore;
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener('click', function () {
    console.log('funcionou');
});
