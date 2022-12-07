/* Super */
class Employee_Super {
    protected companyName:string = 'ABC republic inc.'
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(private name:string, private department:string, private salary:number){}
    public showDetail() {
        console.log(`name: ${this.name} , department: ${this.department}, salary: ${this.salary}`);
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

class IT_Super extends Employee_Super{
    constructor(name:string, salary:number){
        super(name,'IT',salary)
        console.log(`job position : ${this.companyName}`);
    }
}

class Accounting_Super extends Employee_Super {
    constructor(name:string, salary:number){
        super(name,'Accounting',salary)
        console.log(`job position : ${this.companyName}`);
    }
}

// object
const emp_Super1 = new IT('mick', 45000)
emp1.showDetail()