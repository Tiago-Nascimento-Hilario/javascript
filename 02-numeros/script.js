/*
    -toString - Todas a variáveis possuem esse método , mas com números a variável passar ser uma string;
    
    -tiFixed(parametro) - Recebe um parametro que será a quantidade  de caracter depois do ponto ou virgula;

    -parseInt(parametro) - Recebe um parametro numero(string) e transforma em numero;
    
    -parseFloat(parametro) - Preserva o número decimal;
*/

let numero = 36;
let numeroDecimal = 36.12452

let transformaNumeParaString = numero.toString();

let transformCasaDecimal = numeroDecimal.toFixed(1);

console.log(transformCasaDecimal);