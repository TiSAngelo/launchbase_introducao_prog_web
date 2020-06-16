//Busca por tecnologia

const users = [
    { name: 'Carlos', techs: ['HTML', 'CSS'] },
    { name: 'Jasmine', techs: ['JavaScript', 'CSS'] },
    { name: 'Tuane', techs: ['HTML', 'Node.js'] }
];

function checkUserUsesCSS(user) {
    if (user.techs.includes('CSS')) {
        return true;
    }
    return false;
}

for (let i = 0; i < users.length; i++) {
    const userWorksCSS = checkUserUsesCSS(users[i]);

    if (userWorksCSS) {
        console.log(`O usuário ${users[i].name} trabalha com CSS`);
    }
}