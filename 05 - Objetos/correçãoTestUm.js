// Correção

class cars {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularPrecoViagem(distanciaKm, gasolinePrice) {
        let gasto;
        gasto = (gasolinePrice / this.gastoMedioKm) * distanciaKm;
        return gasto.toFixed(2);

    }
}

const civic = new cars('Honda', 'Prata', 22);

console.log(civic.calcularPrecoViagem(400, 5.82));