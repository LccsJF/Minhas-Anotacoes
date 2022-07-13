//variável criada com objeto array: nome, nota e turma, para ser chamado na função alunosAprovados;
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];
    
    for(let i = 0; i < arr.length; i++) {
        //object destructuring onde crio uma variável com objetos específicos do meu array, validado na condição "if";
        const { nota, nome } = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));