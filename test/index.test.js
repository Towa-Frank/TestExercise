import { myAalphaNumberT, sum, displayAlphaT, myposinegT, fibo, mydisplayunicodeT } from '../src/index';

describe('myAalphaNumberT', () => {
  it('Should return hello when hello is in string', () => {
    expect(myAalphaNumberT('hello')).toBe('hello');
  });
  it('Should return is hello when the argument is empty', () => {
    expect(myAalphaNumberT('')).toBe('');
  });
  it('Should test if the number 45 return to 45 in string', () => {
    expect(myAalphaNumberT(45)).toBe('45');
  });
  it('Should test if the function return undefine if argument is empty', () => {
    expect(myAalphaNumberT()).toBe('undefined');
  });
});

describe('sum', () => {
  it('Should return the same of the two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('Should return O if the argument is not a number', () => {
    expect(sum('a', 3)).toBe(0);
  });
  it('Should return negative number', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});

describe('displayAlphaT', () => {
  it('returns the correct alphabet string', () => {
    const expectedAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    expect(displayAlphaT()).toBe(expectedAlphabet);
  });
});
describe('myposinegT function', () => {
  test('returns "NEGATIVE" for negative numbers', () => {
    const result = myposinegT(-5);
    expect(result).toBe('NEGATIVE');
  });
  test('returns "NEGATIVE" for zero', () => {
    const result = myposinegT(0);
    expect(result).toBe('NEGATIVE');
  });
  test('returns "POSITIF" for positive numbers', () => {
    const result = myposinegT(7);
    expect(result).toBe('POSITIF');
  });
});
describe('fibo function', () => {
  it('should return 0 for n <= 0', () => {
    expect(fibo(0)).toBe(0);
    expect(fibo(-1)).toBe(0);
  });

  it('should return 1 for n = 1 or n = 2', () => {
    expect(fibo(1)).toBe(1);
    expect(fibo(2)).toBe(1);
  });

  it('should return the correct Fibonacci sequence values for n > 2', () => {
    expect(fibo(3)).toBe(2);
    expect(fibo(4)).toBe(3);
    expect(fibo(5)).toBe(5);
  });
});

describe('mydisplayunicodeT', () => {
  it('should return the correct string for a given array of Unicode values', () => {
    const inputArray = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
    const expectedOutput = 'Hello World';

    const result = mydisplayunicodeT(inputArray);

    expect(result).toEqual(expectedOutput);
  });
  it('Handles special cases and returns the correct characters', () => {
    const inputArray = [65, 98, 99, 32, 49, 50, 51];
    const expectedOutput = 'Abc 123';
    const result = mydisplayunicodeT(inputArray);
    expect(result).toBe(expectedOutput);
  });
});
