const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
let team = [];

initApp();
function initApp() {
  startHtml();
  buildTeam();
}

function buildTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the employee?",
        name: "name",
      },
      {
        type: "list",
        message: "What is the employees role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        message: "Input employee ID",
        name: "id",
      },

      {
        type: "input",
        message: "Employee Email",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "school name";
      } else {
        roleInfo = "office number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
          },

          {
            type: "list",
            message: "Are there additional Team members",
            name: "next",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ roleInfo, next }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          team.push(newMember);
          addCard(newMember).then(function () {
            if (next === "yes") {
              buildTeam();
            } else {
              finishHtml();
            }
          });
        });
    });
}

function startHtml() {
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        <header class="text-center bg-primary">
          <h1 class="text-white p-5">My Team</h1>
        </header>
        <main class= "container justify-content-center p-5">
         <div class="row">
           
         `;

  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("HTML template started");
  });
}

function addCard(team) {
  return new Promise(function (resolve, reject) {
    const name = team.getName();
    const role = team.getRole();
    const id = team.getId();
    const email = team.getEmail();
    let data = "";
    if (role === "Engineer") {
      const username = team.getGitHub();
      data = ` <div class="col">   
            <div class="card" style="width: 18rem">
           
                <div class="card-title bg-info text-center m-0">
                    <h2 class="">${role}</h2></h3>
                    <h3 Class="text-white">${name}</h3>
                </div>
            
                 <div class="card-body bg-light">
                    <p class="card-text bg-white p-2">
                        Id Number: ${id}
                    </p>
                    <p class="card-text bg-white p-2 ">
                        Contact: ${email}
                    </p>
                    <p class="card-text bg-white p-2 ">
                         Github :${username}
                    </p>
            </div>
            </div>
        </div>`;
    } else if (role === "Intern") {
      const school = team.getSchool();
      data = `<div class="col">   
            <div class="card" style="width: 18rem">
           
                <div class="card-title bg-info text-center m-0">
                    <h2 class="">${role}</h2></h3>
                    <h3 Class="text-white">${name}</h3>
                </div>
            
                 <div class="card-body bg-light">
                    <p class="card-text bg-white p-2">
                        Id Number: ${id}
                    </p>
                    <p class="card-text bg-white p-2">
                        Contact: ${email}
                    </p>
                    <p class="card-text bg-white p-2">
                        School: ${school}
                    </p>
            </div>
            </div>
        </div>`;
    } else {
      const officeNumber = team.getOfficeNumber();
      data = ` <div class="col">   
            <div class="card" style="width: 18rem">
           
                <div class="card-title bg-info text-center m-0">
                    <h2 class="">${role}</h2></h3>
                    <h3 Class="text-white">${name}</h3>
                </div>
            
                 <div class="card-body bg-light">
                    <p class="card-text bg-white p-2">
                        Id Number: ${id}
                    </p>
                    <p class="card-text bg-white p-2">
                        Contact: ${email}
                    </p>
                    <p class="card-text bg-white p-2">
                        Office: ${officeNumber}
                    </p>
            </div>
            </div>
        </div>`;
    }
    console.log("adding team member");
    fs.appendFile("./dist/index.html", data, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishHtml() {
  let tag = `</div>
    </main>
  </body>
</html>`;

  fs.appendFile("./dist/index.html", tag, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("HTML complete");
}
