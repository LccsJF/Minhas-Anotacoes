function comparaNumeros(num1, num2) {
    //validação da operação utilizando o operador "!num1 não existe" caso os valores não existam e retornar uma mensagem de erro, forçando o usuário a citar números diferentes de 0
    if(!num1 || !num2) return "Defina 2 números!"

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    //retorna o resultado da concatenação das duas constantes
    return `${primeiraFrase} ${segundaFrase}`
}

//função que compara se os números diferentes
function criaPrimeiraFrase(num1, num2) {
    //variável '' retorna uma valor vazio
    let saoIguais = '';

    //utilizando o operador "!== diferente" para fazer a comparação
    if(num1 !== num2) {
        saoIguais = 'Não';
    }

    //utlizar "``crase" como operador para criar uma string (é uma frase contém caracteres, números e operadores)
    return `Os números ${num1} e ${num2} ${saoIguais} São iguais;`
}

//função que verifica a soma e compara se são "menor que" 10 ou "menor que 20"
function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    //variável que retorna o resultado e exibe a string "menor"
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    //retorna o resultado da soma e as comparações em uma string*
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20;`
}

//chamar a função para ver o resultado utilizando valores aleatórios de teste
console.log(comparaNumeros(65, 36));

//*string (frase que contém caracteres, números e operadores)

