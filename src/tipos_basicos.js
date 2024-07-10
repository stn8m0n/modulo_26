"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 27;
let altura = 1.75;
const nacionalidade = 'brasileira';
//Com typescript não pode ter um array com mais de um tipo (string e number) por exemplo
const colegas = ['lucas', 'fernanda'];
const tecnologias = ['html', 'css', 'js'];
//array de apenas leitura
const notas = [7, 9, 5, 8];
//tecnologias.push(); É de um array de apenas leitura"A propriedade 'push' não existe no tipo 'readonly number[]'."
//Tupla utulizar no ts + de um tipo de dado
const lista = ['gian', true, 27];
// Union Type, nome do simbolo -> | = pipe
let idadeDaAna = 25;
idadeDaAna = '25 anos';
//Any variavel do tipo any aceita qualquer valor
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
