/* Interface */
// interface Person_Interface {
//     name:string,
//     age?:number,
//     readonly gender:string
// }

// let person_inter:Person_Interface = { name:'mick', gender:'male'}
// person_inter.gender = 'female' // readonly
// person_inter.name = 'smile' // not readonly

// console.log(person_inter);


/* Extend interface */
interface Job {
    title:string,
    income:number, 
}

interface Contract {
    address:string,
    phone?:string
}

interface Person_Interface extends Job,Contract {
    name:string,
    age?:number,
    readonly gender:string,
    info:()=> void,
}
let person_inter2:Person_Interface = { 
    name:'mick', 
    gender:'male',
    info() {
        console.log(`last data : ${new Date().toLocaleTimeString()}`)
    },
    title:'dev',
    income: 45000,
    address:'bkk'
}

console.log(person_inter2);