/*

Funções: A semântica de uma função é essa. 

function nome(parâmetros){
} 

Função é um bloco de código para ser executado de uma forma mais simples depois. 
*/

function myName(name) {
    return 'Meu nome é '+ name;
}



function verificarIdade(age) {
    if (age >= 18) {
        console.log(myName('wendel'), 'Maior de idade.');
    } else {
        console.log(myName('wendel'), 'e sou menor de idade.');
    }
}


verificarIdade(17);


function aplicarJuros(valorEtiqueta, juros) {
    const iJuros = valorEtiqueta * (juros / 100);
    return valorEtiqueta + iJuros;
}
function aplicarDesconto(valorEtiqueta, desconto) {
    const descontoApp = valorEtiqueta * (desconto / 100);
    return valorEtiqueta - desconto;
}

function main() {
    if (formaPagamento === '1')
        return aplicarDesconto(preçoEtiqueta, 10);
    else if (formaPagamento === '2')
        return aplicarDesconto(preçoEtiqueta, 15);
    else if (formaPagamento === '3')
        return preçoEtiqueta;
    else if (formaPagamento === '4')
        return aplicarJuros(preçoEtiqueta, 10);
}
const [debito, pix, duasVezes, tresVezes] = ['1', '2', '3', '4']
const formaPagamento = '4';
const preçoEtiqueta = 99;
console.log(main());