"use strict";
//Em type script não podemos ter duas variaveis em 2 arquivos com o mesmo nome, utilizar name space. 'as' para tratar p any como 'number'  a exemplo do exercicio abaixo.
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
})(casting || (casting = {}));
