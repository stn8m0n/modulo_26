// Multiplicação
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

// Saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Execução funções
const resultadoMultiplicar = multiplicacao(6, 7); 
const resultadoSaudacao = saudacao("Maicon");

console.log(resultadoMultiplicar);
console.log(resultadoSaudacao);
