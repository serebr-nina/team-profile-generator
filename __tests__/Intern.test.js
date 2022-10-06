const Intern = require('../lib/Intern.js');

test("creates an intern's object", () => {
    const intern = new Intern('Daniel', 5, 'daniel@gmail.com', 'UNC');
    expect(intern.name).toBe('Daniel');
    expect(intern.id).toEqual(5);
    expect(intern.email).toBe('daniel@gmail.com');
    expect(intern.school).toEqual('UNC');
});
test ("gets intern's role", () => {
    const intern = new Intern ('Daniel', 5, 'daniel@gmail.com', 'UNC');
    expect(intern.getRole()).toBe('Intern');
});
/*
test("gets intern's object's values", () => {
    const intern = new Intern('Daniel', 1, 'daniel@gmail.com', '1-777-777-7777');

    expect(intern.name()).toBe(expect.any(String));
    expect(intern.id()).toEqual(expect.any(Number));
    expect(intern.email()).toBe(expect.any(String));
    expect(intern.getRole()).toBe(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
});
*/