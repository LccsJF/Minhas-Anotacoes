//Never e o comando Throw

//never é um código que nunca é finalizado; foi encerrado abruptamente; é muito raro ser utilizado;
//throw interrompe a função e lança o erro e acaba a função;
function jogaErro(erro: string, codigo: number): never {
    throw{Error: erro, code: codigo};
}

jogaErro('deu erro,', 500);