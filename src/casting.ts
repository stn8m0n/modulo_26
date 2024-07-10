//Em type script não podemos ter duas variaveis em 2 arquivos com o mesmo nome, utilizar name space. 'as' para tratar p any como 'number'  a exemplo do exercicio abaixo.
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
}
