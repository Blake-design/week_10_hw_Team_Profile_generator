import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
    function getRole() {
      return `'Manager'`;
    }
  }
}
module.exports = Manager;
