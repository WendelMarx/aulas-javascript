/* 
Primeira solução:

const numero = 11;
const eNumeroPar = (numero % 2) === 0;

if (eNumeroPar) {
    console.log('É par.');
} else {
    console.log('Não é par.')
}
*/


/*O símbolo de porcentagem "%" atribui ao valor de resto de divisão, ou seja, após usá-lo, terá que definir qual número será o divisor e o resultado após definir um número que será divido é o resto da divisão. \\
O símbolo de igual três vezes "===" defini a proposta de igualdade. 
*/

const number = 11;

if ((number % 2) === 0) {
    console.log('É par.');
} else {
    console.log('Não é par.')
}