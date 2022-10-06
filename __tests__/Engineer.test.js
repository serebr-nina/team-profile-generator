const Engineer = require ('../lib/Engineer.js');

test ("creates an engineer's object", () => {
    const engineer = new Engineer ('Nina', 2, 'nina@gmail.com', 'github@com');
    expect(engineer.name).toBe('Nina');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('nina@gmail.com');
    expect(engineer.github).toBe('github@com')
});
test ("gets engineer's role", () => {
    const engineer = new Engineer ('Nina', 2, 'nina@gmail.com', 'github@com');
    expect(engineer.getRole()).toBe('Engineer');
});
/*
test ("gets manager's object's values", () => {
    const manager = new Engineer ('Nina', 2, 'nina@gmail.com', 'github@com');

    
    expect(manager.name()).toBe(expect.any(String));
    expect(manager.id()).toEqual(expect.any(Number));
    expect(manager.email()).toBe(expect.any(String));
    expect(manager.getRole()).toBe(expect.any(String));
    expect(manager.getOfficeNumber()).toEqualAnyNumber(Number);
});
*/