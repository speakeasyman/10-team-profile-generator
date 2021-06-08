const { expect } = require('@jest/globals')
const Employee = require('../lib/employee')

const testEmployee = new Employee('Jon Nance', '10022079', 'jonathan.w.nance@gmail.com')

test ('Does getName() return the proper name', () => {
    expect(testEmployee.getName()).toBe('Jon Nance');
})