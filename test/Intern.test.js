const Intern = require("../lib/Intern.js");

/////this will test get role
describe(Intern, () => {
  describe("getRole", () => {
    it("will return 'Intern'.", () => {
      let intern = new Intern();
      expect(intern.getRole()).toBe("Intern");
    });
  });
});

////this will test get name
describe(Intern, () => {
  describe("getName", () => {
    it("will return 'name of Intern'.", () => {
      let intern = new Intern("john", 97, "email", "UTSA");
      expect(intern.getName()).toBe("john");
    });
  });
});

///this will test get id
describe(Intern, () => {
  describe("getID", () => {
    it("will return 'id of Intern'.", () => {
      let intern = new Intern("john", 97, "email", "UTSA");
      expect(intern.getId()).toBe(97);
    });
  });
});

//////this will test get school
describe(Intern, () => {
  describe("getGitHub", () => {
    it("will return 'School name'.", () => {
      let intern = new Intern("john", 97, "email", "UTSA");
      expect(intern.getSchool()).toBe("UTSA");
    });
  });
});
