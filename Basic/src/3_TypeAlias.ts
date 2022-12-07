/* Type Aliases */
type Employee_Aliases = {
    readonly id:number // readonly
    name:string,
    readonly salary:number,
    phone?:string
}
let emp_aliases1: Employee_Aliases = { id:1, name:'attapat', salary:45000, phone:"0881877188" }
let emp_aliases2: Employee_Aliases = { id:2, name:'chalobon', salary:45000}

console.log(emp_aliases1);
console.log(emp_aliases2);