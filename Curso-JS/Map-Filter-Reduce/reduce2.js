const lista = [
    {
        name: 'arroz',
        preco: 20
    },
    {
        name: 'macarrao',
        preco: 15
    },
    {
        name: 'toalha',
        preco: 25
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel, lista));
/*sleep@DESKTOP-CEBHBM6 MINGW64 /f/Minhas-Anotacoes/Curso-JS/Map-Filter-Reduce (main)
$ node reduce2.js
rodada  1
{ prev: 100 }
{ current: { name: 'arroz', preco: 20 } }
rodada  2
{ prev: 80 } = acumulador
{ current: { name: 'macarrao', preco: 15 } }
rodada  3
{ prev: 65 } = acumulador
{ current: { name: 'toalha', preco: 25 } }
40

retorna o valor de cada rodada, subtraindo o valor de "preco" do "saldoDisponivel" e no final da operação, o saldo atual em "saldoDisponivel";*/