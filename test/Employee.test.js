///this is to test the functionality of the employee thingy
const Employee = require("../lib/Employee.js");

describe(Employee, () => {
  describe("getRole", () => {
    it("will return 'employee'.", () => {
      expect(getRole("john").toBe("employee"));
    });
  });
});

