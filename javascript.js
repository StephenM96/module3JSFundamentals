// "" + 1 + 0
// "" - 1 + 0
// true + false
// !true
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// " -9 " + 5
// " -9 " - 5
// null + 1
// undefined + 1
// undefined == null
// undefined === null
// " \t \n" - 2

// "" ? consol.log(true) : console.log(false) <----this is a ternary/conditional operation

// const westley = {
//     name: 'Westley',
//     numFingers: 5,
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
// const inigo = {
//     firstName: 'Inigo',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
//         console.log(greeting + this.getCatchPhrase(person))
//     },
//     getCatchPhrase(person) {
//         if(person.numFingers >= 6) {
//             return 'You killed my father. Prepare to die.'
//         }
//         else return 'Nice to meet you.';
//     }
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)


// const basketballGame = {
//     score: 0,
//     freeThrow() {
//         this.score++;
//         return this
//     },
//     basket() {
//         this.score+= 2;
//         return this
//     },
//     threePointer() {
//         this.score +=3;
//         return this
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score);
//         return this
//     }
// }

// basketballGame.basket().freeThrow().basket().threePointer().halfTime();

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const lafayette = {
    name: 'Lafayette',
    population: 121_000,
    state: 'LA',
    founded: '1821 as Vermillionville',
    timezone: 'UTC-6 (CST)'
}

const printProperties = (param) =>{
    for(let property in param){
        console.log(property, ":", param[property])
    }
}

printProperties(sydney)
