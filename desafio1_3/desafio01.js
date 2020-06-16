//Usuários e tecnologias:

const users = [
    { name: 'Carlos', techs: ['HTML', 'CSS'] },
    { name: 'Jasmine', techs: ['JavaScript', 'CSS'] },
    { name: 'Tuane', techs: ['HTML', 'Node.js'] }
];

console.table(users);

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name}, trabalha com ${users[i].techs.join(', ')}`);
};