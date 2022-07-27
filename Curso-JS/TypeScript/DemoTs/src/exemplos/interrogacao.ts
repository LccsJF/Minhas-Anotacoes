let buttonTest = document.getElementById('button');

// a "?" diz para o código: se essa função existir, rode o código; se não ignore;
buttonTest?.addEventListener('click', () => {
    console.log('funcionou');
})
