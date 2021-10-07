const Engineer = require("../lib/Engineer.js");

///this will test get role
describe(Engineer, () => {
  describe("getRole", () => {
    it("will return 'Engineer'.", () => {
      let engineer = new Engineer();
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});

/////this will test get name
describe(Engineer, () => {
  describe("getName", () => {
    it("will return 'name of Engineer'.", () => {
      let engineer = new Engineer("john", 97, "email", "flowerPower");
      expect(engineer.getName()).toBe("john");
    });
  });
});

/////this will test get id
describe(Engineer, () => {
  describe("getID", () => {
    it("will return 'id of Engineer'.", () => {
      let engineer = new Engineer("john", 97, "email", "flowerPower");
      expect(engineer.getId()).toBe(97);
    });
  });
});

//this will test get git hub
describe(Engineer, () => {
  describe("getGitHub", () => {
    it("will return 'Github Username'.", () => {
      let engineer = new Engineer("john", 97, "email", "flowerPower");
      expect(engineer.getGitHub()).toBe("flowerPower");
    });
  });
});
