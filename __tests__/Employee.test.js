const Employee = require ('../lib/Employee.js');

test ("creates an employee object", () => {
    const employee = new Employee ('Anatoly', 1, 'anatoly@gmail.com');
    expect(employee.name).toBe('Anatoly');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('anatoly@gmail.com');
});

