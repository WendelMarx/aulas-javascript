/*

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;

    }

    classificarImc() {
        let imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Indivíduo magro.');
        } else if (imc > 18.5 && imc < 24.9) {
            return ('Indivíduo regular.');
        } else if (imc > 24.9 && imc < 29.9) {
            return ('Indivíduo sobrepeso.');
        } else if (imc > 30 && imc < 34.9) {
            return ('Indivíduo obesidade grau I');
        } else if (imc > 35 && imc < 39.9) {
            return ('Indivíduo obesidade grau II');
        } else {
            return ('Indivíduo obesidade grau III');
        }
    }
}

const jose = new pessoa(`José`, 70, 1.75);

console.log(jose.calcularImc().toFixed(0));
console.log(jose.classificarImc());
console.log(jose.peso);
