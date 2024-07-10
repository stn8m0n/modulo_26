"use strict";
//array de alunos
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];
//PARA ADICIONAR
//alunos.push("Julia") erroR TS2345 Argument of type 'string' is not assignable to parameter of type '{ nome: string; cursos: string[]; idade: number; }'.
//CORRETO
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29,
});
// Ctrl + space (autoComplete) mostra as propriedade que este tipo aceita
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
//
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
