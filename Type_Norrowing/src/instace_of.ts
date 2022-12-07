/*  InstanceOf  */
class User {
    constructor(public username:string){}
}

class Employee2 {
    constructor(public name:string){}
}

function printObject(obj:Employee2 | User) {
    if (obj instanceof Employee2) {
        console.log('Object from Employee2');
    } else {
        console.log('Object from User');
    }
    
}

printObject(new Employee2('mick'))