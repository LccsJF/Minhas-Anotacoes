//ativade 1
class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; /*sempre que tiver um get/set coloco um "underline" na frente da palavra: "_saldo",
        para que a função get/set tenha o nome saldo, mas a propriedade não terá o nome saldo*/
    }
    //ativade 2
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
    //ativade 3
    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
};
//ativade 4
class ContaCorrente extends ContaBancaria { /*o "super" precisa de uma conta PAI;
    EXTENDS = faz a ligação da conta filha a conta pai; é obrigatório utilizar para que a função não dê erro;*/
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito; /*sempre que tiver um get/set coloco um "underline" na frente da palavra: "_cartaoCredito",
        para que a função get/set tenha o nome cartaoCredito, mas a propriedade não terá o nome cartaoCredito*/
    }
    //atividade 5
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
};
//atividade 6
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';     
    }
};
//atividade 7
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';     
    }
    //atividade 8
    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
};