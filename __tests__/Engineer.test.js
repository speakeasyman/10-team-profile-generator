const { expect } = require('@jest/globals')
const Engineer = require('../lib/engineer')

const testEngineer = new Engineer("Jon Nance", "10022079", 'jonathan.w.nance@gmail.com', 'speakeasyman')

test ('Does getGitHub() return the proper name positive flow', () => {
    const test = 'speakeasyman'
    
    
    expect(testEngineer.getGitHub()).toBe(test);
    
})

test ('Does getGitHub() return the proper name negative flow', () => {
    const test = 'speakeasiesman'
    
    
 
    expect(testEngineer.getGitHub()).not.toBe(test);
})

test ('Does getRole() return the proper name positive flow', () => {
    const test = 'Engineer'
    
    
    expect(testEngineer.getRole()).toBe(test);
    
})

test ('Does getRole() return the proper name negative flow', () => {
    const test = 'Employee'
    
    
 
    expect(testEngineer.getRole()).not.toBe(test);
})