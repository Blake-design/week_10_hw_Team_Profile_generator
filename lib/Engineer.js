import Employee from "./Employee.js";

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    function getGithub() {
      return github;
    }

    function getRole() {
      return `'Engineer'`;
    }
  }
}
module.exports = Engineer;
