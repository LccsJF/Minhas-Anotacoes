"use strict";
var pessoa = {
    nome: 'Cláudio',
    idade: 54,
    profissao: 'desenvolvedor'
};
var eduardo = {
    nome: 'Eduardo',
    idade: 41,
    profissao: 'funcionário público'
};
var adriana = {
    nome: 'Adriana',
    idade: 44,
    profissao: 'desenvolvedora'
};
/* palavra reservada do TS para criar um grupo de constantes de tipos a serem chamados depois,
para evitar erros de sintaxe e facilitar a busca; */
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Funcion\u00E1rioP\u00FAblico"] = 1] = "Funcion\u00E1rioP\u00FAblico";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Atriz"] = 3] = "Atriz";
})(Profissao || (Profissao = {}));
var renata = {
    nome: 'Renata',
    idade: 42,
    profissão: Profissao.FuncionárioPúblico
};
var paula = {
    nome: 'Paula',
    idade: 25,
    profissão: Profissao.Desenvolvedora
};
var mariana = {
    nome: 'Mariana',
    idade: 30,
    profissão: Profissao.Desenvolvedora,
    materias: ['Ciências', 'Português']
};
/* como coloquei a "?"="ignora" depois da palavra "profissão" na "interface Pessoa",
ela deixou de ser item obrigatório em minhas constantes */
var marcela = {
    nome: 'Marcela',
    idade: 30,
    materias: ['Ciências', 'Português']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(mariana.materias);
