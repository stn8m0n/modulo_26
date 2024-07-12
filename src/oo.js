"use strict";
//em JavaScript temos que declarar a propriedade antes
class Pessoa {
    //o argumento opcional tem que ser posterior ao argumento opcional.
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    disOla() {
        return `${this.nome} disse oi`;
    }
}
//pode ser alterado pora da classe que herdam por ele
//Modificadores
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; //private não é acessado fora da classe / protect é acessado por herança
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo = valor;
    }
    //depositar
    depositar(valor) {
        this.saldo += valor;
    }
}
//extends herda de conta bancária
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
//contaDoPedro.
ContaBancariaPessoaFisica.retornaNumeroDoBanco();
