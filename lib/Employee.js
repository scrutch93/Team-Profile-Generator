class Employee {
    constructor(nameVal, idVal, emailVal){
        this.name = nameVal;
        this.id = idVal;
        this.email = emailVal;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee'
    }
}

module.exports = Employee
// function test (numOne, numTwo) {
//     return numOne + numTwo;
// }

// test(1, 2)

// let employeeObj = new Employee("Steven", 123, "email");
// console.log(employeeObj)