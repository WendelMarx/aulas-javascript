let altura = 1.50;
let peso = 200;

const imc = peso / (altura * altura);

console.log(imc);

if (imc < 18.5) {
    console.log('Indivíduo magro.');
} else if (imc > 18.5 && imc < 24.9) {
    console.log('Indivíduo regular.');
} else if (imc > 24.9 && imc <29.9) {
    console.log('Indivíduo sobrepeso.');
} else if (imc > 30 && imc <34.9) {
    console.log('Indivíduo obesidade grau I');
} else if (imc > 35 && imc <39.9) {
    console.log('Indivíduo obesidade grau II');
} else {
    console.log('Indivíduo obesidade grau III');
}