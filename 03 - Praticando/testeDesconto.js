/* 
 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


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