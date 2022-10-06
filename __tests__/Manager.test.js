const Manager = require ('../lib/Manager.js');

test ("creates a manager object", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323');
    expect(manager.name).toBe('Anatoly');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('anatoly@gmail.com');
    expect(manager.officeNumber).toEqual('1-823-232-2323');
});

test ("gets manager's role", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323');
    expect(manager.getRole()).toBe('Manager');
});

test ("gets manager's name", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323');
    expect(manager.getName()).toBe('Anatoly');
});
test ("gets manager's id", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323');
    expect(manager.getId()).toEqual(1);
});    

test ("gets manager's email", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323');
    expect(manager.getEmail()).toBe('anatoly@gmail.com');
});
test ("gets manager's office number", () => {
    const manager = new Manager ('Anatoly', 1, 'anatoly@gmail.com', '1-823-232-2323'); 
    expect(manager.officeNumber).toEqual('1-823-232-2323');
});  
    