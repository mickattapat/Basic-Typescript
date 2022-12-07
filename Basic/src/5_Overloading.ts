/* Function overloading */
function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown {
    if (!name) {
        return `Hello typscript`
    } else if (typeof name == 'string') {
        return `Hello ${name}`
    }
    throw new Error("Data not match");
}
console.log(sayHi());
console.log(sayHi('mick'));

function total_num(a:number,b:number):number
function total_num(a:string,b:string):string
function total_num(a:unknown,b:unknown):unknown {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    } else if (typeof a == 'string' && typeof b == 'string') {
        return parseInt(a) + parseInt(b)
    }
    throw new Error("Data not match");
}
console.log(total_num("10","10"));