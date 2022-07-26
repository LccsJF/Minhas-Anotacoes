let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

 /*no typescript é preciso "tipar" as variáveis,
identificar o tipo para os parâmetros: number, string / Ex: numero1: number, numero2: number */
function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2;
    if(devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2
}

//typescript define tipo por inferência: sempre lembrará o tipo que foi determinado para a variável;
let devePrintar = true
let frase = 'O valor é: '

if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }     
    })
}
