/* Inheritance */
class Employee_Inheritance {
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(private name:string, private department:string, private salary:number){}
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

class IT_Inheritance extends Employee_Inheritance{

}
class Accounting_Inheritance extends Employee_Inheritance {

}

// object
const emp_Inheritance1 = new IT_Inheritance('mick','IT.', 45000)
const emp_Inheritance2 = new Accounting_Inheritance('jojo','Acc.', 40000)

console.log(emp_Inheritance1);
console.log(emp_Inheritance2);