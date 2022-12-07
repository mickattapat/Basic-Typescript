/* Property */
// class Employee_Prop {
//     // property
//     name:string
//     department:string
//     // constructor จะทำงานครั้งแรกครั้งเดียว
//     constructor(name:string, department:string){
//         this.name = name
//         this.department = department
//     }
// }
// // object
// const emp_prop1 = new Employee_Prop('mick','developer')
// const emp_prop2 = new Employee_Prop('smile','developer')


/* Readonly Property ==================================================================================== */
// class Employee_Prop {
//     // property
//     name:string
//     readonly department:string // readonly property
//     // constructor จะทำงานครั้งแรกครั้งเดียว
//     constructor(name:string, department:string){
//         this.name = name
//         this.department = department
//     }
// }
// // object
// const emp_prop1 = new Employee_Prop('mick','developer')
// emp_prop1.name = 'poom'
// emp_prop1.department = '40000'

// console.log(emp_prop1);
// const emp_prop2 = new Employee_Prop('smile','developer')


/* Access Modifier ==================================================================================== */
class Employee_Prop {
    // property
    public name:string
    private department:string
    private salary:string
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(name:string, department:string, salary?:string){
        this.name = name
        this.department = department
        this.salary =  salary ? salary : "50000"
        this.department = "sale"
    }
}
// object
const emp_prop1 = new Employee_Prop('mick','developer')
emp_prop1.name = 'poom'
// emp_prop1.department = 'sale'
// emp_prop1.salary = '40000'

console.log(emp_prop1);
const emp_prop2 = new Employee_Prop('smile','developer')