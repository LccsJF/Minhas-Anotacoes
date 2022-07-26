//any é um "tipo" que pode receber qualquer "tipo" de objeto: number, string, boolean;
let valorAny: any;

valorAny = 3;
valorAny = 'Olá!';
valorAny = true;

/* quando declaro que a variável é igual a "valorAny", a tipagem passa a ser genérica,
aceitando tudo, ainda que tenha definido tipo como "string"; */
let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testão';
valorString2 = valorAny;

const somarString (string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('Olá, ', ' como vai?');