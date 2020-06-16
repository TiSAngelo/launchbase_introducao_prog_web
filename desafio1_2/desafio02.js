//Vetores e objetos

const techs = [{
        name: 'C++',
        type: 'Desktop'
    },
    {
        name: 'Python',
        type: 'Data Science'
    },
    {
        name: 'JavaScript',
        type: 'Web/Mobile'
    }
];

const developer = {
    name: 'Carlos',
    age: '32',
    techs: techs[0]
};


console.log(`O usuário ${developer.name} tem ${developer.age} anos e usa a tecnologia ${techs[0].nome}, com especialidade em ${techs[0].type}.`);