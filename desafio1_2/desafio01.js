//Construção e impressão de objetos

const company = {
    name: 'Rocketseat',
    color: 'Roxo',
    focous: 'Programação',
    adress: {
        street: 'Rua Guilherme Gembala',
        number: '260'
    }
};

console.log(`A empresa ${company.name} está localizada em ${company.adress.street}, ${company.adress.number}`);