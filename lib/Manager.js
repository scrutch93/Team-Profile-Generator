const Employee = require("./Employee");

class Manager extends Employee {
    constructor(nameVal, idVal, emailVal, officeNumberVal){
        super(nameVal, idVal, emailVal);
        this.officeNumber = officeNumberVal
    }

    getRole () {
        return "Manager"
    }
}

module.exports = Manager;