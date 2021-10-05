class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    function getName() {
      return name;
    }
    function getId() {
      return id;
    }
    function getRole() {
      return `'Employee'`;
    }
  }
}
module.exports = Employee;
