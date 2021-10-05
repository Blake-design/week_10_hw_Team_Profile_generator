import Employee from "./Employee.js";

class Intern extends Employee {
  constructor(school) {
    this.school = school;
    function getSchool() {
      return school;
    }

    function getRole() {
      return `'Intern'`;
    }
  }
}
module.exports = Intern;
