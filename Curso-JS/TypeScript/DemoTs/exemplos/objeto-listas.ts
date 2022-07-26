const pessoa = {
    nome: 'Cláudio',
    idade: 54,
    profissao: 'desenvolvedor'
}

const eduardo: {nome: string, idade: number, profissao: string} = {
    nome: 'Eduardo',
    idade: 41,
    profissao: 'funcionário público'
}

const adriana: {nome: string, idade: number, profissao: string} = {
    nome: 'Adriana',
    idade: 44,
    profissao: 'desenvolvedora'
}

/* palavra reservada do TS para criar um grupo de constantes de tipos a serem chamados depois,
para evitar erros de sintaxe e facilitar a busca; */
enum Profissao {
    Professora,
    FuncionárioPúblico,
    Desenvolvedora,
    Atriz,
}

// nessa interface em "profissão" já chamo a propriedade "profissão" criada em "enum Profissão"
interface Pessoa {
    nome: string,
    idade: number,
    profissão?: Profissao
}

/* listas=array em TS = insere o tipo e depois o símbolo de lista: string[] 
extends = herda todas as propriedades do pai: interface Pessoa */
interface Estudante extends Pessoa {
    materias: string[]
}

const renata: Pessoa = {
    nome: 'Renata',
    idade: 42,
    profissão: Profissao.FuncionárioPúblico
}

const paula: Pessoa = {
    nome: 'Paula',
    idade: 25,
    profissão: Profissao.Desenvolvedora
}

const mariana: Estudante = {
    nome: 'Mariana',
    idade: 30,
    profissão: Profissao.Desenvolvedora,
    materias: ['Ciências', 'Português']
}

/* como coloquei a "?"="ignora" depois da palavra "profissão" na "interface Pessoa",
ela deixou de ser item obrigatório em minhas constantes */
const marcela: Estudante = {
    nome: 'Marcela',
    idade: 30,
    materias: ['Ciências', 'Português']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(mariana.materias);


