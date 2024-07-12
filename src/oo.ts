//em JavaScript temos que declarar a propriedade antes
class Pessoa {
    nome: string;
    renda?: number; //? opcional

    //o argumento opcional tem que ser posterior ao argumento opcional.
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    disOla(): string {
        return `${this.nome} disse oi`;
    }
}

//pode ser alterado pora da classe que herdam por ele
//Modificadores
class ContaBancaria{
    protected saldo: number = 0; //private não é acessado fora da classe / protect é acessado por herança
    public numeroConta: number;

    constructor(numeroDaConta: number){
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco(){
        return 125;
    }
    
    private getSaldo(){
        return this.saldo;
    }

    setSaldo(valor: number){
        this.saldo = valor;
    }
//depositar
    depositar(valor: number){
        this.saldo += valor;
    }

}
//extends herda de conta bancária
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor*2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica (123456)
//contaDoPedro.
ContaBancariaPessoaFisica.retornaNumeroDoBanco()