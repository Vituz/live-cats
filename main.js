/* 
*Milestone 1*
Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, 
ciascuno con il proprio colore e il proprio nome.
*/

const catsList = [{
        nome: 'Piera',
        eta: 2,
        colore: 'orange',
        sesso: 'femmina'
    },
    {
        nome: 'Susina',
        eta: 5,
        colore: 'gray',
        sesso: 'femmina'
    },
    {
        nome: 'Aldo',
        eta: 1,
        colore: 'white',
        sesso: 'maschio'
    },
    {
        nome: 'Palla di Neve',
        eta: 12,
        colore: 'black',
        sesso: 'maschio'
    },
    {
        nome: 'Grattachecca',
        eta: 6,
        colore: 'blue',
        sesso: 'maschio'
    },
    {
        nome: 'Silvestro',
        eta: 5,
        colore: 'black',
        sesso: 'maschio'
    },
    {
        nome: 'Tom',
        eta: 5,
        colore: 'gray',
        sesso: 'maschio'
    },
    {
        nome: 'Nerone',
        eta: 8,
        colore: 'white',
        sesso: 'femmina'
    },

];





/*
*Milestone 2*
Dividere i gatti in due contenitori distinti in base al sesso 
e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, 
se femmina, o di blu, se maschio. 
*/

/*
Il colore del fiocco deve essere più tenue se il gatto è più giovane, 
più scuro se il gatto è più vecchio.
*/

// FILTER

// const maleCats = catsList.filter((cat) => {
//     return cat.sesso === 'maschio';
// });

// console.log(maleCats);

// const femaleCats = catsList.filter((cat) => {
//     return cat.sesso === 'femmina';
// });

// console.log(femaleCats);


// FOREACH

let maleCats = [], femaleCats = [];

catsList.forEach((cat) => {
    cat.ribbon = `fas fa-ribbon `;
    if(cat.sesso === 'maschio'){
        cat.ribbonColor = 'blue';
        maleCats.push(cat)
    } else {
        cat.ribbonColor = 'hotpink';
        femaleCats.push(cat);
    }

});



const newCatsList = catsList.forEach((cat, i) => {
    console.log(cat.nome, cat.colore);
    document.querySelector(".container").insertAdjacentHTML("beforeend", `    
        <div class="gatto">
            <i class="${cat.ribbon}" style="color: ${cat.ribbonColor}; filter: opacity(${cat.eta * 5}%)"></i>
            <i class="fas fa-cat" style="color:${cat.colore}"></i>
            <h3>${cat.nome}</h3>   
        </div>
        
    `);
});






/*
*Milestone 3*
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
inserendo solamente 
- nome e colore gatto 
- colore e opacità del fiocco
*/