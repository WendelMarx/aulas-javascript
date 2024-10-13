/* Faça um programa para calcular o valor de uma viagem.

   Tenha 5 variáveis. Sendo elas: 
    1 - Preço do álcool; ( Valor usado 3,42 por litro )
    2 - Preço da gasolina; ( Valor usado 6,02 por litro )
    3 - Gasto médio de combustível do carro por KM; ( A moto é uma Duke KTM 390 e ela faz por média 22km/l )
    4 - Distância em KM da viagem; ( A viagem é de Santa Luzia até Piedade dos Gerais, que é 138 km)
    5 - O tipo do combustível que está no seu carro;
    */

let gasolinePrice = 6.02;
let alcoholPrice = 3.42;
let averageSpend = 22;
let distance = 138;
let fuel = 'Álcool';

if (fuel === 'Gasolina') {
    const expense = (gasolinePrice / averageSpend) * distance; 
    console.log(gasto.toFixed(2));
} else {
   const gasto = (alcoholPrice / averageSpend) * distance;
    console.log(expense.toFixed(2));
}

