alert(' Efetuar a soma, média, potência de 2, raiz quadrada e raiz cubica')

let numero = parseFloat(prompt('Para quantos numeros deseja solicitar as operacões?'))


let arrayNumeros = [] //armazenar os numeros

for (let i = 1; i <= numero; i++ ) {

    let valores = parseFloat(prompt(`Digite o ${i} º número`))

    arrayNumeros.push(valores)  //arryNumeros recebe a variavel valores

}
let soma = 0

for ( let valorSoma of arrayNumeros ){   //soma dos valores do arryNumeros
    

    soma += valorSoma     
}

 document.write(`<p>A soma dos valores é de: ${soma.toFixed(2)}</p>`)//toFixed arredonda (2) casas apos a virgula

const MEDIA = soma / arrayNumeros.length //length argumentos que  afunção ta esperando

document.write(`<p>A media dos valores é: ${MEDIA.toFixed(2)}</p>`)

total = 0

for (let atribuicao of arrayNumeros){

    total += atribuicao

    let resultPot = Math.pow(total, 2)
    document.write(`<p>potências do N° ${total} :  ${resultPot.toFixed(3)}</p>`) 

    let resultRa2 = Math.sqrt(total)
    document.write(`<p>raiz quadrada do N° ${total} :  ${resultRa2.toFixed(3)}</p>`)

    let resultRa3 = Math.cbrt(total)
    document.write(`<p>raiz cúbica do N° ${total} :  ${resultRa3.toFixed(3)}</p>`)
   

}