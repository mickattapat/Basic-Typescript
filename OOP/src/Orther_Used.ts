



/* Static property, method ==================================================================================== */
// class Company {
//     public static cName:string = 'Control C inc.'
//     public static employeeList: Employee[] = []
//     static showData() {
//         for (const person of this.employeeList) {
//             person.showDetail()
//         }
//     }
// }

// class Employee {
//     // constructor จะทำงานครั้งแรกครั้งเดียว
//     constructor(private name:string, private department:string, private salary:number){}
//     public showDetail() {
//         console.log(`name: ${this.name} , department: ${this.department}, salary: ${this.salary}`);
//     }
//     // getter
//     get Salary():number {
//         return this.salary
//     }
//     // setter , getter
//     set Salary(newSalary:number) {
//         this.salary = newSalary
//     }
// }

// class IT extends Employee{
//     constructor(name:string, salary:number){
//         super(name,'IT',salary)
//     }
// }
// class Accounting extends Employee {
//     constructor(name:string, salary:number){
//         super(name,'Accounting',salary)
//     }
// }

// // object
// const emp1 = new IT('mick', 45000)
// const emp2 = new IT('amp', 45000)
// const emp3 = new Accounting('smile', 40000)

// Company.employeeList.push(emp1)
// Company.employeeList.push(emp2)
// Company.employeeList.push(emp3)

// // console.log(Company.employeeList);
// Company.showData()



/* Abstract property, method ==================================================================================== */
// abstract class Employee {
//     // constructor จะทำงานครั้งแรกครั้งเดียว
//     constructor(private name:string, private department:string, private salary:number){}
//     public showDetail() {
//         console.log(`name: ${this.name} , department: ${this.department}, salary: ${this.salary}`);
//     }
//     // getter
//     get Salary():number {
//         return this.salary
//     }
//     // setter
//     set Salary(newSalary:number) {
//         this.salary = newSalary
//     }
//     abstract info():void
// }

// class IT extends Employee{
//     constructor(name:string, salary:number){
//         super(name,'IT',salary)
//     }
//     info(): void {
//         console.log('optimize web');
//     }
// }
// class Accounting extends Employee {
//     constructor(name:string, salary:number){
//         super(name,'Accounting',salary)
//     }
//     info(): void {
//         console.log('update account');
//     }
// }

// // object
// const emp1 = new IT('mick', 45000)
// const emp3 = new Accounting('smile', 40000)
// emp1.info()
// emp3.info()



/* Interface Abstract class property, method ==================================================================================== */
interface IReport {
    income:number
    reportIncome():void
}

abstract class Employee {
    // constructor จะทำงานครั้งแรกครั้งเดียว
    constructor(private name:string, private department:string, private salary:number){}
    public showDetail() {
        console.log(`name: ${this.name} , department: ${this.department}, salary: ${this.salary}`);
    }
    // getter
    get Salary():number {
        return this.salary
    }
    // setter
    set Salary(newSalary:number) {
        this.salary = newSalary
    }
    abstract info():void
}

class IT extends Employee implements IReport {
    income: number;
    constructor(name:string, salary:number){
        super(name,'IT',salary)
        this.income = salary
    }
    reportIncome(): void {
        console.log(`salary year : ${this.income*12}`);
    }
    info(): void {
        console.log('optimize web');
    }
}
class Accounting extends Employee implements IReport{
    income: number;
    constructor(name:string, salary:number){
        super(name,'Accounting',salary)
        this.income = salary
    }
    reportIncome(): void {
        console.log(`salary year : ${this.income*12}`);
    }
    info(): void {
        console.log('update account');
    }
}

// object
const emp1 = new IT('mick', 45000)
const emp3 = new Accounting('smile', 40000)
emp1.reportIncome()
emp3.reportIncome()