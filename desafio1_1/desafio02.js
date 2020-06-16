//Cálculo de aposentadoria:

const name = "Paulo";
const gender = "M"
const age = 50;
const contribution = 45;

const sum = age + contribution;

if (gender === "M") {
    if (sum >= 95) {
        console.log(`${name}, você pode se aposentar`);
    } else {
        console.log(`${name}, você ainda não pode se aposentar`);
    }
} else if (gender === "F") {
    if (sum >= 85) {
        console.log(`${name}, você pode se aposentar`);
    } else {
        console.log(`${name}, você ainda não pode se aposentar`);
    }
}