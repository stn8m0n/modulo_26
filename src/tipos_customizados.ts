//ter possibilidade de ter propriedades opcional '?' depois do atributo, onde nos colocamos os type (tipos)
type aluno = {
        nome: string;
        cursos?: string[];
        idade:number;
}

//array de alunos
const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade:27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade:23,
    },
]

//PARA ADICIONAR
//alunos.push("Julia") erroR TS2345 Argument of type 'string' is not assignable to parameter of type '{ nome: string; cursos: string[]; idade: number; }'.
//CORRETO

alunos.push(
    {
        nome: "Julia",
        cursos: ["Arquitetura"],
        idade: 29,
    })

    // Ctrl + space (autoComplete) mostra as propriedade que este tipo aceita
    const novoAluno: aluno = {
        nome: "Lucas",
        idade: 32,
    }

    //
    function exibeAluno(aluno: aluno){
        console.log(aluno.nome)
    }