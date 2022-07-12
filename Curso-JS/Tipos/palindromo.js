//1ª solução

//o palavra do palindromo é ATABATA
//utilizo o sinal "!" para comparar se é diferente

function verificaPalindromo(string) {
    //verificando se a variável existe, se é nula, vazia ou indefinida; se diferente de "true", retorna e encerra a função
    if (!string) return "string inexistente!";

    //se existe: utilizando método encadeado da string: split (separa todas as letras); reverse (reverter a sequência dentro índice, escrever ao contrário); join (junta todas a letras sem espaço); quando uso o método "split" a minha string retorna um array
    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("atabata"));

console.log(verificaPalindromo(""));

//a primeira opção é verdadeira e retorna "true", a palavra "atabata" é um palíndromo
//a segunda opção é falsa, declarei uma variável vazia e retorna "string inexistente!"

//------------------------------------------------------------------------------------

//2ª Solução

