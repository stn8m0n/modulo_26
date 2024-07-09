let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nacionalidade: string = 'brasileira'

//Com typescript não pode ter um array com mais de um tipo (string e number) por exemplo
const colegas: string[] = ['lucas', 'fernanda']

const tecnologias: Array<string> = ['html', 'css', 'js']

//array de apenas leitura
const notas: ReadonlyArray<number> = [7, 9, 5, 8];
//tecnologias.push(); É de um array de apenas leitura"A propriedade 'push' não existe no tipo 'readonly number[]'."

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

// Union type, nome do simbolo -> | = pipe
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

//any variavel do tipo any aceita qualquer valor
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string';


