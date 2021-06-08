const { expect } = require('@jest/globals')
const Manager = require('../lib/manager')

const testManager = new Manager("Jon Nance", "10022079", 'jonathan.w.nance@gmail.com', '709')

test ('Does getOffice() return the proper name positive flow', () => {
    const test = '709'
    
    
    expect(testManager.getOffice()).toBe(test);
    
})

test ('Does getOffice() return the proper name negative flow', () => {
    const test = '736C'
    
    
 
    expect(testManager.getOffice()).not.toBe(test);
})

test ('Does getRole() return the proper name positive flow', () => {
    const test = 'Manager'
    
    
    expect(testManager.getRole()).toBe(test);
    
})

test ('Does getRole() return the proper name negative flow', () => {
    const test = 'Employee'
    
    
 
    expect(testManager.getRole()).not.toBe(test);
})