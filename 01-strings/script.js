/**
 * length - Quantidade de caracter
 * 
 * indeOf(parametro) - Posição do caracter | quando não encontra retorna -1
 * 
 * slice(primeiro, segundo) - Recebe dois parâmetro, o primeiro será a pocição para começar extrair informações o segundo será a posição final que deseja.
 * 
 * replace(primeiro, segundo) - Recebe dois a parãmetros  primeiro será buscado e substituído pelo segundo;
 * 
 * trim() - Remove os espaços;
 * 
 * split(parametro) - Recebe um parãmetro marcador  seperando os elementos e arrays 
*/

let nome = 'Tiago Nascimento Hilario';

let posicaoCaracter = nome.indexOf('Silva');

let qntCaracter = nome.length;

let extrairCaracter = nome.slice(0,3);

let substituíCaracter = nome.replace('Tiago', 'Arthur');

let removeEspacos = nome.trim();

let separadorCaracter = nome.split(' ')


