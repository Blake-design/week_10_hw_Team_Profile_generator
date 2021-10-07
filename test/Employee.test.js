///this is to test the functionality of the employee thingy
const Employee = require("../lib/Employee.js");

///this will test get roles
describe(Employee, () => {
  describe("getRole", () => {
    it("will return 'employee'.", () => {
      let employee = new Employee();
      expect(employee.getRole()).toBe("employee");
    });
  });
});

/////this will test get name
describe(Employee, () => {
  describe("getName", () => {
    it("will return 'name of employee'.", () => {
      let employee = new Employee("john", 97, "email");
      expect(employee.getName()).toBe("john");
    });
  });
});

///this will test get id
describe(Employee, () => {
  describe("getID", () => {
    it("will return 'id of employee'.", () => {
      let employee = new Employee("john", 97, "email");
      expect(employee.getId()).toBe(97);
    });
  });
});
///this will test get email
describe(Employee, () => {
  describe("getID", () => {
    it("will return 'Email of employee'.", () => {
      let employee = new Employee("john", 97, "email");
      expect(employee.getEmail()).toBe("email");
    });
  });
});
