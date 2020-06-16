//Soma de despesas e receitas

const users = [{
        name: 'Salvio',
        entries: [115.3, 48.7, 98.3, 14.5],
        exits: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        entries: [24.6, 214.3, 45.3],
        exits: [185.3, 12.1, 120]
    },
    {
        name: 'Lucia',
        entries: [9.8, 120.3, 340.2, 45.3],
        exits: [450.2, 29.9]
    }
];

function balanceCalc(entries, exits) {
    return numberSum(entries) - numberSum(exits);
}

function numberSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}

for (let i = 0; i < users.length; i++) {
    let balance = balanceCalc(users[i].entries, users[i].exits);
    if (balance >= 0) {
        console.log(`${users[i].name} possui saldo POSITIVO de R$${balance.toFixed(2)}`);
    } else {
        console.log(`${users[i].name} possui saldo NEGATIVO de R$${balance.toFixed(2)}`);
    }
}