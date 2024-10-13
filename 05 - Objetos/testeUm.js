/* 
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class cars {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
}

function gastoViagem(carro, distancia) {
    let gasto;
    gasto = (gasolinePrice / carro.gastoMedio) * distancia;
    return gasto.toFixed(2);
}


const civic = new cars('Honda', 'Prata', 22);
const gasolinePrice = 5.82;

const result = gastoViagem(civic, 400);
console.log(`O valor da viagem é de R$${result}.`);

