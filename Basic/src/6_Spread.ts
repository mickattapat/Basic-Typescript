/* Spread Operator */
// const section:string[] = ['accounting', 'sale']
// const department:string[] = ['web development','dev ops']
// department.push(...section)

// console.log(department);


/* Rest parameter */
function total1(a:number,b:number):number {
    return a+b    
}
function total2(a:number,b:number,c:number):number {
    return a+b+c    
}
function total3(a:number,b:number,c:number,d:number):number {
    return a+b+c+d   
}

const total_rest = (...numbers:number[]) => {
    return numbers.reduce((result,value) => {
        return result+value
    },0)
}

console.log(total_rest(100,100));
console.log(total_rest(100,100,100));
console.log(total_rest(100,100,100,100));