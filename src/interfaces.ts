//sempre ao iniciar dar start no compilador com npx tsc --watch
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number){
        this.saldo += valor;
    }
}

//A interface começa sempre com um I maiusculo indicando que é uma interface, não pode esccrever o cód. pronto. 06:52
interface ITransacional  {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
    //transferir é um método, transfere um VALOR | Usar uma classe para fazer a tipagem de um argumento
    // transferir(valor, destinatario) {//FUNCAO que vai receber um valor e o destinário
    //     destinatario.saldo += valor
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

//uma classe pode herdar apenas de um classe mas pode ter quantas interfaces quisermmos
class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;

}

