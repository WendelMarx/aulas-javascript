const alunos = ['wendel', 'Gentil', 'Daniel'];
console.log(alunos);

/* Posso adicionar mais elementos as listas usando 
alunos.push ( adiciona um novo elemento, sendo ele o ultimo da fila )

ou com alunos[num] = `texto`;
( Adicionando o num para coloca-lo em uma posição específica, e caso haja um elemento em nessa posição será realoacado, tendo o valor original apagado.)

*/

alunos.push(`Diego`);

alunos[2] = `Renato`;

console.log(alunos);

//pop retira o último da lista e shift o primeiro

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);

const tabuadaDez = 3;

for (let i = 1; i < 11; i++) {
    let tabuada = i * tabuadaDez;
    console.log(tabuada)
}


// cálculo de média

const notas = [];

notas.push(6);
notas.push(4);
notas.push(7);
notas.push(4);
notas.push(6);

let [nots] = notas;
let [, ...rest] = notas;
let media = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    media = nota + media;

}


const total = media / notas.length;
console.log(rest)
