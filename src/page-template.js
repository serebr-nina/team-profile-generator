const getListItem = employee => {
    if (employee.getRole() === 'Engineer') {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></li>`;
    } else { // Intern
        return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    }
};

const getCardTitleH3 = employee => {
    if (employee.getRole() === 'Engineer') {
        return `<h3 class="card-title">👓 ${employee.getRole()}</h3>`;
    } else { // Intern
        return `<h3 class="card-title">🎓 ${employee.getRole()}</h3>`;
    }
};

const displayEmployees = employeeData => {
    return `
    ${employeeData
            .map(employee => {
                return `
          <div class="card employee-card col-md-2 col-sm-3">
            <div class="card-member p-2 bg-primary text-white rounded">
                <h2 class="card-title">${employee.getName()}</h2>
                ${getCardTitleH3(employee)}
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${getListItem(employee)}
                </ul>
            </div>
        </div>
          `;
            })
            .join('')}
    `;
};

const displayManager = managerData => {
    return `
    <div class="card employee-card col-md-2 col-sm-3">
        <div class="card-member p-2 bg-primary text-white rounded">
            <h2 class="card-title">${managerData.getName()}</h2>
            <h3 class="card-title">🗓️ ${managerData.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${managerData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${managerData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
};
const generateProfilePage = teamData => {
    const { manager, employees, ...rest } = teamData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
        <script></script>
    </head>
    <body>
        <div class="container-fluid col-12 jumbotron mb-3 p-4 team-heading bg-danger text-white rounded">
            <h1 class="text-center">Team Profile</h1>
        </div>

        <div class="container">
            <div class="row">
                <div class="team-area d-flex flex-row justify-content-evenly flex-wrap">
                ${displayManager(manager)}
                ${displayEmployees(employees)}
                </div>
            </div>
        </div>
    </body>
</html>
`;
};

module.exports = generateProfilePage;