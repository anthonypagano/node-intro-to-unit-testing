// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should take one number', function() {
    // range of divisible inputs
    const normalCases = [
      {a: 30, expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 9, expected: 'fizz'}
    ];
    // for each input (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not numbers', function() {
    // range of bad inputs that are not numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });

  it('should raise error if arg not correctly divisble', function() {
    // range of bad inputs that are not divisible by 3, 5
    const moreBadInputs = [
        [8],
        [22],
        [31]
    ];
    // prove that an error is raised for bad inputs
    moreBadInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.equal.input;
    });
  });  
});