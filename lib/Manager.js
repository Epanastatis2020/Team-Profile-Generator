// Class for Manager

//Must use the Employee class as this will extend it
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;