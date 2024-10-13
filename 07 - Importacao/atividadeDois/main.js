const { gets, print } = require('./funcoesAuxiliares');

// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1



const n = gets();

/* Primeiro codigo

let maiorNumeroPar = null;
let menorNumeroImpar = null;
for (let i = 0; i <= n; i++) {

    const numero = gets();

    if (numero % 2 !== 0) {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    } print(menorNumeroImpar);
}
*/



// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

let valorAtual = null;
let listaValores = [];

if (!valorAtual) {
    valorAtual = gets();
    listaValores.push(valorAtual);

    while (valorAtual != undefined || valorAtual != null) {
        valorAtual = gets();

        if (valorAtual)
            listaValores.push(valorAtual);
    }

    let maiorNumeroPar = Math.max.apply(Math, listaValores.filter(elemento => elemento > 1)); 
    let maiorNumeroImpar = Math.max.apply(Math, listaValores.filter(x => x % 2 != 0));

    print(maiorNumeroPar);
    print(maiorNumeroImpar);
}