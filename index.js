const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require('fs/promises');
const fileName = './dist/index.html';

const promptTeamProfile = () => {
    console.log('Please build your team')
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's id!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add? (Required)',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },

    ]).then(teamData => {
        teamData.manager = new Manager(teamData.name, teamData.id, teamData.email, teamData.officeNumber);
        if (!teamData.employees) {
            teamData.employees = [];
         }
        if (teamData.memberType === 'Engineer') {
            return promptEngineer(teamData);
        } else if (teamData.memberType === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}

const promptEngineer = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's id!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's email!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub username? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's GitHub username!");
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add? (Required)',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },

    ]).then(employeeData => {
        teamData.employees.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github));
        if (employeeData.memberType === 'Engineer') {
            return promptEngineer(teamData);
        } else if (employeeData.memberType === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}

const promptIntern = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's id!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's email!");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's school name!");
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add? (Required)',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },

    ]).then(employeeData => {
        teamData.employees.push(new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school));
        if (employeeData.memberType === 'Engineer') {
            return promptEngineer(teamData);
        } else if (employeeData.memberType === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}

promptTeamProfile()
    /*.then(teamData => {
        console.log('manager name ' + teamData.manager.getName());
        console.log('employees # ' + teamData.employees.length);
    })*/
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageProfile => {
        return fs.writeFile(fileName, pageProfile);    
    })
    .then(() => {
        console.log("Your Team Profile page is generated!");
    })
    .catch(err => {
        console.log(err);
    });
