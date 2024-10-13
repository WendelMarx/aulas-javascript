/* 
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo. 

Média = (nota 1 + nota 2 + nota 3) / 3; 

Classificação:

-Média menor que 5, reprovado;
-Média entre 5 e 7, recuperação; 
-Média maior que 7, aprovado;

*/

let noteOne = 4;
let noteTwo = 3;
let noteThree = 5;

const media = (noteOne + noteTwo + noteThree) / 3;

if (media < 5) {
    console.log('Reprovado');

} else if (media > 7) {
    console.log('Aprovado');
} else { console.log('Você está de recuperação'); }