/* default paarameter */
function showEmployee(name:string,age:number,address:string="bangkok") {
    console.log(`name : ${name} , age : ${age} , address : ${address}`);
}

showEmployee('mick',26,'songkhla')
showEmployee('jojo',26)
showEmployee('neeya',26,'krabi')

/* Objetc */
const person1 = {
    name:'attapat kayasa',
    age:26
}

const person2: {
    name:string,
    age:number,
} = {
    name:'chalobon',
    age:26
}

const position : { lat:number, long:number} = { lat:10.999, long:20.333 }

function showDetail(data:{name:string,age:number}) {
    console.log(`name: ${data.name}, age: ${data.age}`);
}

function randomPosition():{lat:number, long:number} {
    return {
        lat: Math.random(),
        long: Math.random()
    }
}
showDetail(person1)
console.log(randomPosition());