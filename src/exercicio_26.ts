// Função de multiplicação
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Testando as funções
const resultadoMultiplicar = multiplicacao(6, 7); // Exemplo de teste para multiplicação
const resultadoSaudacao = saudacao("João"); // Exemplo de teste para saudação

console.log(resultadoMultiplicar); // Deve imprimir 42
console.log(resultadoSaudacao); // Deve imprimir "Olá João"
