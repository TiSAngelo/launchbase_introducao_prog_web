// IMC

const name = 'Tiago';
const weight = 70;
const high = 1.75;


//const imc = peso / (altura * altura);

const imc = weight / (Math.pow(high, 2));

if (imc >= 30) {
    console.log(`${name}, você está acima do peso`);
} else {
    console.log(`${name}, você não está acima do peso`);
}