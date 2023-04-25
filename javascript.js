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

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }

// const lafayette = {
//     name: 'Lafayette',
//     population: 121_000,
//     state: 'LA',
//     founded: '1821 as Vermillionville',
//     timezone: 'UTC-6 (CST)'
// }

// const printProperties = (param) =>{
//     for(let property in param){
//         console.log(property, ":", param[property])
//     }
// }

// printProperties(sydney)

// function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
//     return function(title) { //unnamed closure function, can access value of hTag when created
//     return `<${hTag}>${title}</${hTag}>`
//     }
//     }
//     const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
//     const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2
//     console.log( getH1('Heading 1') ) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
//     console.log( getH2('Heading 2') ) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

// function slow(x) {
//     let random = 0
//     let goal = Math.floor(Math.random() * x *1000000)
//     console.log(`slow(${x}): randomly generated goal for ${x * 1000000} is ${goal}`)
//     //loop to simulate long calculation
//     for (let i=0; i< goal; i++){
//         random++
//     }
//     return random
// }

// function cachingDecorator(originalFunction){
//     const cache = new Map()

//     return function(x){
//         if(cache.has(x)){
//             console.log('returned cached calue for ' + x)
//             return cache.get(x)
//         }
//         //esle:
//         let result = originalFunction(x)
//         cache.set(x) //store in cache
//         return result
//     }
// }

// const fast = cachingDecorator(slow)

// const bigCalculationWithCache = cachingDecorator(bigCalculation)
// fast(9)
// fast(9)

// bigCalculationWithCache(100)

// bigCalculationWithCache(100)

// const user = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }
// setTimeout ( () => user.sayHi(), 1000 )

// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true,
// }

// let rabbit1 = {jumps: true};
// Object.setPrototypeOf(rabbit1, animal);

// console.log(rabbit1.legs, animal)

// let rabbit2 = Object.create(animal, {
//     jumps: {
//         value: true,
//         enumerable: true
//     }
// });
// console.log(rabbit1.legs, rabbit2.legs)
// for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`)
// for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`)