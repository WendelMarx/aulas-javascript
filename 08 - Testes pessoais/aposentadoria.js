/*

Codigo para calcular aposentadoria de uma pessoa.

*/

// Valor do ano atual
const today = new Date();
const year = today.getFullYear();

//valores para começar
const pontosInicialMasculino = 101;
const pontosInicialFeminino = 91;
let PontosNecessarios = null;

//classe para definir pessoas e adquirir os dados necessarios
class pessoa {
    constructor(nome, sexo, nascimento, tempoDeContribuicao) {
        this.nome = nome;
        this.sexo = sexo;
        this.nascimento = nascimento;
        this.idade = (year - nascimento);
        this.tempoDeContribuicao = tempoDeContribuicao;
    }

}

const caio = new pessoa("Caio", "masculino", 2000, 4);

if (year === 2024 || year === 2028) {
    PontosNecessarios = pontosInicialMasculino + (2024 - year);
}


console.log(caio);

