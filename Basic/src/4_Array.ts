/* Array */
const users:string[]=['mick', 'smile', 'amp', 'poom']
users.push('mic2')
users.push('mick3')
console.log(users);
console.log('len : ', users.length);
console.log(users[3],users[2]);

const age_arr:number[]=[]
age_arr.push(1)
age_arr.push(2)
age_arr.push(3)
console.log(age_arr);


/* Array & type Aliases */
type Employee_arr = {
  name: string
  salary: number
  department?: string
}
const employee: Employee_arr[] = []
employee.push(
    { name: "mick", salary: 45000, department: "dev" },
    { name: "smile", salary: 45000 },
    { name: "nee", salary: 45000, department: "dev" }
)

employee.forEach((element) => {
    console.log(element);
})

for (const person of employee) {
    console.log(person);
}