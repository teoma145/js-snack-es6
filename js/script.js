const tavolovip=[
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
]


const Segnaposto = tavolovip.map((elemento, index) => ({
    nome: elemento,
    tavolo: 'tavolo ' + (index + 1),
    nometavolo: 'Tavolo dei Vip'
}));

console.log(Segnaposto);

