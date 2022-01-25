const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns Fizz if number is divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(9)).toEqual('Fizz');
  });

  it('returns Buzz if number is divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
  });

  it('returns FizzBuzz if number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
  });

  it('returns input if number is neither divisible by 3 or 5', () => {
    expect(fizzbuzz(2)).toEqual(2);
    expect(fizzbuzz(52)).toEqual(52);
  });
});