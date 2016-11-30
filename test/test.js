var chai = require('chai'),
    expect = chai.expect,
    word = require('./index');

describe('Sanitize', function() {
    // Hook - Executes this code before spec/test.
    // beforeEach(function() {
    //     console.log('I run before every test.');
    // })
    // before(function() {
    //     console.log('I run only before the first test.');
    // })
    // afterEach(function() {
    //     console.log('I run after each test.');
    // })
    after(function() {
        console.log('I run only after the last test.');
    })
    // Spec / Test
    it('returns the lowercase version of a string', function() {
        var inputWord = 'HELLO WORLD',
            outputWord = word.sanitize(inputWord);

        // Assertions / Expections
        expect(outputWord).to.equal('hello world');
        expect(outputWord).to.not.equal('HELLO WORLD');
        expect(outputWord).to.be.a('string');
        expect(outputWord).to.not.be.a('number');
        expect(outputWord).to.contain('hello');
    });

    it('removes any hyphens', function() {
        var inputWord = 'HELLO-WORLD',
            outputWord = word.sanitize(inputWord);

        expect(outputWord).to.equal('hello world');
    })
})
