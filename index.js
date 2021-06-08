const inquirer = require("inquirer");
const templater = require("./src/template");
const Manager = require("./lib/Manager")

let employees = []
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What employee would you like to add?",
            choices: ["Manager", "No More"]
        }
    ]).then(response => {
        if(response.choice == "Manager"){
            buildManager()
        }else {
            console.log("thank you, bye")
            console.log(employees)
            templater(employees)
        }
    })
}

function buildManager(){
    inquirer.prompt([
        {
            name: "name",
            message: "What name?"
        },
        {
            name: "id",
            message: "id?"
        },
        {
            name: "email",
            message: "email?"
        },
        {
            name: "officeNum",
            message: "Office number?"
        }
    ]).then(managerRes => {
        let manager = new Manager(managerRes.name, managerRes.id, managerRes.email, managerRes.officeNum)
        console.log(manager)
        employees.push(manager)
        init()
    })
}

init()