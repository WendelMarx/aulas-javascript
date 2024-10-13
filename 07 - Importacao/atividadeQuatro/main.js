
/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        5, 3, 4, 1, 10, 8

    Saída:
        Maior número: 10
        Menor número: 1
*/
const { gets, print } = require('./funcoesAuxiliares');

//crio uma const para pegar a quantidade de entradas usando o for.
const n = gets();

// crio varíaveis para subistir pelo número da entrada se estiver de acordo com as condições
let maiorNumero = -Infinity;
let menorNumero = Infinity;

for (let i = 0; i < n; i++) {
    const numero = gets();

    //if para descobrir maior número
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
    //else if para descobrir menor número
    else if (numero < menorNumero) {
        menorNumero = numero;
    }
}

print(maiorNumero);
print(menorNumero)