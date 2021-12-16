const consertos = require ('./consertos');
const progresso = (consertos) => {
       console.log('Produtos sinalizados como True:');
for(item of consertos) {
    if(item.pronto == true) {
       console.log(item.produto);
    }
}
console.log('Produtos sinalizados como False:');
for(item of consertos) {
   if(item.pronto == false) {
       console.log(item.produto); 
    }
}

}
function finalizados(consertos) {
    consertos.forEach(item => {
        console.log(`Produto: ${item.produto}`);
        item.itensConsertados.forEach(pronto => {
            console.log(`tela,camera,bateria,carcaca,botoes laterais ${pronto}`);
        });
        console.log(`valores: R$ ${
            item.valores.reduce((valor, total) => {
                return valor + total
            },0)
        },00`)
    })
}
progresso(consertos);
finalizados(consertos);