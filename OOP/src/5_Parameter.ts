/* Parameter Property */
class Employee_Param {
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(private name:string, private department:string, private salary:number){} // Property to Parameter
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
const emp_param1 = new Employee_Param('mick','developer', 45000)
emp_param1.Salary = 50000
emp_param1.showDetail()
console.log(emp_param1.Salary);