
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

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

}

const wendel = new pessoa('Wendel',23);
const renan = new pessoa('Renan da Silva',31);
const gentil = new pessoa('Gentil', 56);
const vitor = new pessoa ('Vitor',42)

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a).`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a).`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} são da mesma idade.`);
    }
}

compararIdade(gentil,wendel);
compararIdade(gentil,vitor);