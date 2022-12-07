/* Method */
interface Person {
    name:string,
    age?:number,
    readonly gender:string
    info:()=> void;
}
let person_met:Person = { 
    name:'mick', 
    gender:'male',
    info() {
        console.log(`last data : ${new Date().toLocaleTimeString()}`)
    },
}
person_met.info()