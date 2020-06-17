//Intro

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value;
    } else {
        user.balance = user.balance - transaction.value;
    }

    transaction = { type: 'debit', value: 0 };
}

function getHigherTransactionByType(type) {
    let higher = { value: 0 };
    for (let i = 0; i < user.transactions.length; i++) {

        if (type === user.transactions[i].type && user.transactions[i].value > higher.value) {
            higher = user.transactions[i];
        }
    }
    console.log(higher);
}

function getAverageTransactionValue() {
    let sum = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        sum = sum + user.transactions[i].value;
    }

    let average = sum / user.transactions.length;

    console.log(average);
    return average;
}

function getTransactionCount() {
    let counterCredit = 0;
    let counterDebit = 0;
    let count = {
        credit: 0,
        debit: 0
    };

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === 'credit') {
            counterCredit = counterCredit + 1;
        } else {
            counterDebit = counterDebit + 1;
        }

        count = { credit: counterCredit, debit: counterDebit };
    }
    console.log(count);

}


createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });


console.log(user.balance);

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

getAverageTransactionValue();

getTransactionCount();