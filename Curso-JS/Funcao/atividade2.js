function calculaIdade(anos) {
    return `Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} anos de idade.;`
};

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raça: 'Pug'
};

//call: seguido de vírgulas e números não precisam estar entre () ou [];
console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.call(animal, 7));

//aplly: seguido de vírgulas e números estão entre [];
console.log(calculaIdade.apply(animal, [4]));

console.log(calculaIdade.apply(pessoa1, [4]));