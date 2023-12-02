let listaDeContas = ['seguro', 'luz', 'escola', 'aluguel', 'gás'];
let novaLista = [];

/**
 * map()
 */

novaLista = listaDeContas.map(function(item){
    return item.toUpperCase();
})

/**
 * filter() - Retorna true ou false, o true ele pega e exibi ou false descarta
 */

novaLista = listaDeContas.filter(function(item){
    return (item.length <= 5) ? true : false;
})

/**
 * find() - Procura um elemento no array, recebe no parãmetro o item, index e o array
 */

novaLista = listaDeContas.find(function(item){
    return (item === "televisão") ? true : false;
})










