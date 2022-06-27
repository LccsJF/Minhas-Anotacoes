// COMO COMENTAR VARIÁVEIS E CONSTANTES

// - para comentar uma linha utilizamos barras duplas 
var y = 0;

/* - para comentarmos um bloco iniciamos com /* e até onde quisermos, então fechamos com */
var x = 1;
var z = 2;

var preco = 2;
var desconto = 0.2; // uma variável é sempre escrita com letras minúsculas para melhor identificação e leitura do código. Seu valor pode ser alterado, mudado.
const PRECO = 2; // uma constante é sempre escrita com LETRAS MAIÚSCULAS para melhor identificação e leitura do código. Seu valor não pode ser alterado, mudado.

//preco = preco - desconto;

var total = PRECO - desconto

// COMO DECLARAR E CHAMAR UMA FUNÇÃO

function soma(a, b) {
    return a + b; // 8 - aqui você declara uma função, cria.
}

soma(3, 5); // aqui você chama uma função. Importante: você pode chamar uma função sem valor: soma();

// UTILIZANDO O TERMINAL CONSOLE DO VSCODE

/* Antes de iniciar o console precisamos instalar a extensão no VSCode: code ruuner extension;
- para começar temos que entrar no arquivo em uso no console: F:>Minhas-Anotacoes>Curso-JS>teste.js;
- utilizando o comando "ls" no console "git bash" veremos a árvore onde estamos com suas ramificações;
- utilizamos o comando "node+nome do arquivo" para visuzalizar o resultado do foi declarado no arquivo JS;
- Ex: console log("Hello World!"); no console basta digitar "node teste.js" e ele retornará: Hello World! */

console.log("Hello World!");

/* Podemos utilizar o console da página na internet pressionando o botão direito do mouse "inspecionar" e selecionar o menu "console";
e também o console do programa NODE instalado em nossa máquina.

MODIFICAR ELEMENTOS DENTRO DO HTML UTILIZANDO JAVASCRIPT

/* Sempre que formos chamar um determinado elemento dentro do JS, é preciso lembrar que o índice da lista começará sempre em "0";

Ex: document.getElementsByTagName('h1');
ele retornará o elemento dentro da tag h1 dentro do meu HTML, mostrando o índice da lista começando em "0", no caso: Olá mundo!;
para chamar o conteúdo da tag h1, vamos criar, declarar uma variável;
Ex: var heading1 = document.getElementsByTagName('h1')[0], onde falo que o valor que está no índice "0" da minha lista;
Vamos chamar a variável heading1:
heading1
<h1>Olá mundo!</h1>

MUDANDO COR DENTRO DO CONSOLE

basta pegar a varíavel, citar o estilo CSS e mudar a cor;
Ex: heading1.style.color = 'red'
o texto Olá mundo! ficará vermelho;
