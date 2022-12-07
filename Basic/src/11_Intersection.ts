/* Intersection type */
interface Job {
    title:string,
    income:number, 
}

interface Contract {
    address:string,
    phone?:string
}

interface Person_Intersection {
    name:string,
    age?:number,
    readonly gender:string,
    info:()=> void,
}

type People = Person_Intersection & Contract & Job

let person_intersection:People = { 
    name:'mick', 
    gender:'male',
    info() {
        console.log(`last data : ${new Date().toLocaleTimeString()}`)
    },
    title:'dev',
    income: 45000,
    address:'bkk'
}

console.log(person_intersection);