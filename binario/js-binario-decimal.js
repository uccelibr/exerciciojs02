
 function binarioDecimal(binario){  //função argumento binario
    let decimal = 0, i = 0, resto;
   
    while (binario != 0) {  //condição
      resto = binario % 10; //  % resto da divisão por base 10 
      binario = parseInt(binario / 10);
      decimal = decimal + resto * Math.pow(2, i); //  decimal + resto da divisao elevado a 2 (base binaria)
      ++i; // pre-incremento
    }
   
    return decimal; //retorno
  }
  alert('lembre-se que o sistema binario é um sistema numerico de base 2. representados por 0 e 1')
  let binario = parseFloat(prompt('Informe um numero binario converter para decimal: ')) 

  let decimal = binarioDecimal(binario); //execucao da função
  document.write(`O numero ${binario} binário, convertido para decimal é : ${decimal}`);


  /*Para converter um número binário para o número decimal equivalente basta multiplicar 
  cada dígito pela potência de 2 relativa à posição por ele ocupada e somar os resultados. 
  ex: 0101
      0X2*3 1X2*2 0X2*1 1x2*0 
      0+4+0+1=5 */