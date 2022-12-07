"use strict";
/*  InstanceOf  */
class User {
    constructor(username) {
        this.username = username;
    }
}
class Employee2 {
    constructor(name) {
        this.name = name;
    }
}
function printObject(obj) {
    if (obj instanceof Employee2) {
        console.log('Object from Employee2');
    }
    else {
        console.log('Object from User');
    }
}
printObject(new Employee2('mick'));
