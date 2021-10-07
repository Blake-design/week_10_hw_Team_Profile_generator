const Manager = require("../lib/Manager.js");

///this will test get role
describe(Manager, () => {
  describe("getRole", () => {
    it("will return 'Manager'.", () => {
      let manager = new Manager("john", 97, "email", "officeNumber");
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
///this will test get name
describe(Manager, () => {
  describe("getName", () => {
    it("will return 'name of Manager'.", () => {
      let manager = new Manager("john", 97, "email", "officeNumber");
      expect(manager.getName()).toBe("john");
    });
  });
});
///this will test get id
describe(Manager, () => {
  describe("getID", () => {
    it("will return 'id of Manager'.", () => {
      let manager = new Manager("john", 97, "email", "officeNumber");
      expect(manager.getId()).toBe(97);
    });
  });
});
///this will test get id
describe(Manager, () => {
  describe("getOfficeNumber", () => {
    it("will return 'office number'.", () => {
      let manager = new Manager("john", 97, "email", "officeNumber");
      expect(manager.getOfficeNumber()).toBe("officeNumber");
    });
  });
});
