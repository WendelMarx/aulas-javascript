/*
Classes são definições do que deve ser o objeto;
Instâncias são condições do objeto:
*/

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = anoAtual - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

}

const wendel = new pessoa();
wendel.nome = 'Wendel Marx Valaderes';
wendel.idade = 23;
wendel.altura = 1.75;

const renan = new pessoa();
renan.nome = 'Renan da Silva';
renan.idade = 31 ;
renan.altura = 1.64;

const gentil = new pessoa ('Gentil', 56);

console.log(gentil);
wendel.descrever();
gentil.descrever();