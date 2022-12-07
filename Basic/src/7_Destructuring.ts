/* Destructuring */
const colors:string[] = ['red', 'green', 'blue']
const [red, green, blue] = colors
const person = {
    fname:'mick',
    age:26,
    address:'bkk'
}
const { fname, age, address } = person
// console.log(green);
console.log(fname);