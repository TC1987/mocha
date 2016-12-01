// If you define the specific test framework ('mocha' in this case) in the package.json file under the key 'scripts',
// you can execute all tests by simply typing 'npm test' in your terminal/command prompt.

// If you want to display the tests in a browser, just type
//      ./node_modules/mocha/bin/mocha test/test.js --reporter doc > out.html
//      open out.html
// in terminal/command prompt and it'll display the tests.

var chai = require('chai'),
    expect = chai.expect,
    word = require('./index');

describe('Sanitize', function() {
    // Hook - Executes this code before spec/test. Useful for initializing a database,
    // server side end-to-end testing, or close something after tests are complete.

    // beforeEach(function() {
    //     console.log('I run before every test.');
    // })
    // before(function() {
    //     console.log('I run only before the first test.');
    // })
    // afterEach(function() {
    //     console.log('I run after each test.');
    // })
    // after(function() {
    //     console.log('I run only after the last test.');
    // })

    // Spec / Test. These are what you're actually testing for.

    // Using '.only' tests only that specific spec. All other specs in every 'describe' block are ignored.
    // Using '.skip' skips only that specific spec. All other specs are run.
    it('returns the lowercase version of a string', function() {
        var inputWord = 'HELLO WORLD',
            outputWord = word.sanitize(inputWord);

        // Assertions / Expections. These are just individual test cases to verify the output.
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
    });

    // it.skip('removes any hyphens', function() {
    //     var inputWord = 'HELLO-WORLD',
    //         outputWord = word.sanitize(inputWord);
    //
    //     expect(outputWord).to.equal('hello world');
    // });
});

describe('Tokenize', function() {
    it('splits a sentence into an array', function() {
        var inputString = 'Hello World',
            outputString = word.tokenize(inputString);

        // to.include.members is needed when comparing arrays.
        expect(outputString).to.include.members(['Hello', 'World']);
    })
});

describe('Github info', function() {
    it.only('returns repo info from github', function(done) {
        word.info(function(reply) {
            // console.log(reply);
            expect(reply.name).to.equal('build-podcast');
            expect(reply.language).to.equal('HTML');
            done();
        })
    })
})
