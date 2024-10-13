const eu = {
    nome: 'Wendel',
    idade: 23,
    sobrenome: 'Oliveira'
};

eu.altura = 1.75;

console.log(eu)


/* Objeto é uma lista dinamica de valores. 
Aonde eu posso deletar e adicionar um novo valor. 

"delete" para deletar
*/

delete eu.altura;

console.log(eu)


/* Posso utilizar funções dentro de objetos, que é denominado de método.
this: Assume o objeto
*/

const pessoa = {
    nome: 'Wendel',
    idade: 23,
    sobrenome: 'Oliveira',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

console.log(pessoa ['nome']);