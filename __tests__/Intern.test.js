const { expect } = require('@jest/globals')
const Intern = require('../lib/intern')

const testIntern = new Intern("Jon Nance", "10022079", 'jonathan.w.nance@gmail.com', 'NCSU')

test ('Does getSchool() return the proper name positive flow', () => {
    const test = 'NCSU'
    
    
    expect(testIntern.getSchool()).toBe(test);
    
})

test ('Does getSchool() return the proper name negative flow', () => {
    const test = 'UNCW'
    
    
 
    expect(testIntern.getSchool()).not.toBe(test);
})

test ('Does getRole() return the proper name positive flow', () => {
    const test = 'Intern'
    
    
    expect(testIntern.getRole()).toBe(test);
    
})

test ('Does getRole() return the proper name negative flow', () => {
    const test = 'Employee'
    
    
 
    expect(testIntern.getRole()).not.toBe(test);
})