const tavolovip=[
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'
]


const Segnaposto = tavolovip.map((elemento, index) => ({
    nome: elemento,
    tavolo: 'tavolo ' + (index+1),
    nometavolo: 'Tavolo dei Vip'
}));

console.log(Segnaposto);

const studenti=[
    
    {
        id: 213 ,
        stnome: 'Marco della Rovere',  
        voto: 78,
     },
     {
        id: 110 ,
        stnome: 'Paola Cortellessa',  
        voto: 96,
     },
     {
        id: 250 ,
        stnome: 'Andrea Mantegna ',  
        voto: 48,
     },
     {
        id: 145 ,
        stnome: 'Gaia Borromini',  
        voto: 74,
     },
     {
        id: 196 ,
        stnome: 'Luigi Grimaldello',  
        voto: 68,
     },
     {
        id: 102 ,
        stnome: 'Piero della Francesca',  
        voto: 78,
     },
     {
        id: 120 ,
        stnome: 'Francesca da Polenta',  
        voto: 84,
     },
 
]

const aula = studenti.map((el)=>el.stnome.toUpperCase())
console.log(aula)
const votialti = studenti.filter((votialti)=>votialti.voto > 70)
console.log(votialti)
const votiidalto = votialti.filter((votialti)=> votialti.id > 120)
console.log(votiidalto)

 bici = [
   {
      nomebici: 'pippo',
      peso: 20
   },
   {
      nomebici: 'pluto',
      peso: 24
   },
   {
      nomebici: 'mario',
      peso: 26
   },
   {
      nomebici: 'luigi',
      peso: 27
   },
   {
      nomebici: 'wario',
      peso: 22
   }, 
   {
      nomebici: 'empen',
      peso: 31
   },
   {
      nomebici: 'robina',
      peso: 17
   },

]
let bicileggera = bici[0]
 bici.forEach(({ nomebici, peso }) => {
   console.log(`Bicicletta: ${nomebici}, Peso: ${peso} kg`);
   if(peso < bicileggera.peso){
      bicileggera = {nomebici,peso}
      console.log(bicileggera)
   }
 });