/* Method */
// class Employee_Method {
//     // property
//     private name:string
//     private department:string // private property
//     private salary:number // private property
//     // constructor จะทำงานครั้งแรกครั้งเดียว
//     constructor(name:string, department:string, salary:number){
//         this.name = name
//         this.department = department
//         this.salary =  salary
//     }
//     public showDetail() {
//         console.log(`name :${this.name} , department: ${this.department}, salary: ${this.salary}`);
//     }
// }
// // object
// const emp_method1 = new Employee_Method('mick','developer', 45000)
// emp_method1.showDetail()



/* Getter / Setter Method ==================================================================================== */
class Employee_Method {
    // property
    private name:string
    private department:string // private property
    private salary:number // private property
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(name:string, department:string, salary:number){
        this.name = name
        this.department = department
        this.salary =  salary
    }
    public showDetail() {
        console.log(`name :${this.name} , department: ${this.department}, salary: ${this.salary}`);
    }
    // getter
    get Salary():number {
        return this.salary
    }
    // setter , getter
    set Salary(newSalary:number) {
        this.salary = newSalary
    }
}
// object
const emp_method1 = new Employee_Method('mick','developer', 45000)
emp_method1.Salary = 50000
emp_method1.showDetail()
console.log(emp_method1.Salary);