const { expect } = require('@jest/globals')
const Employee = require('../lib/employee')

const testEmployee = new Employee("Jon Nance", "10022079", 'jonathan.w.nance@gmail.com')

test ('Does getName() return the proper name positive flow', () => {
    const testName = "Jon Nance"
    
    
    expect(testEmployee.getName()).toBe(testName);
    
})

test ('Does getName() return the proper name negative flow', () => {
    const testName = "Evil Joe"
    
    
 
    expect(testEmployee.getName()).not.toBe(testName);
})

test ('Does getId() return the proper name positive flow', () => {
    const test = "10022079"
    
    
    expect(testEmployee.getID()).toBe(test);
    
})

test ('Does getID() return the proper name negative flow', () => {
    const test = "10022097"
    
    
 
    expect(testEmployee.getID()).not.toBe(test);
})

test ('Does getEmail() return the proper name positive flow', () => {
    const test = "jonathan.w.nance@gmail.com"
    
    
    expect(testEmployee.getEmail()).toBe(test);
    
})

test ('Does getID() return the proper name negative flow', () => {
    const test = "jonathan.nance@biomerieux.com"
    
    
 
    expect(testEmployee.getEmail()).not.toBe(test);
})

test ('Does getRole() return the proper name positive flow', () => {
    const test = "Employee"
    
    
    expect(testEmployee.getRole()).toBe(test);
    
})

test ('Does getRole() return the proper name negative flow', () => {
    const test = "Manager"
    
    
 
    expect(testEmployee.getRole()).not.toBe(test);
})