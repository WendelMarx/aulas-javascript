/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const { gets, print } = require('./funcoesAuxiliares');

const number = gets();

// for para pegar os número de entrada e descobrir se são pares, caso sejam imprime a mensagem
for (let i = 0; i < number; i++) {
    const numero = gets();
    if ((numero % 2) === 0) {
        print(`${numero} é par.`);
    }
}