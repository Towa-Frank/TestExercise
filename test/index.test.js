import { myAalphaNumberT, sum, mysizealpha, displayAlphaT, myarrayAlphaT, myposinegT, fibo, mylengtharrayT } from '../src/index';

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
describe('myarrayAlphaT', () => {
  it('should return an empty array for an empty string', () => {
    expect(myarrayAlphaT('')).toEqual([]);
  });
  it('should return an array of characters for a non-empty string', () => {
    expect(myarrayAlphaT('abc')).toEqual(['a', 'b', 'c']);
  });
  it('should handle special characters', () => {
    expect(myarrayAlphaT('!@#$')).toEqual(['!', '@', '#', '$']);
  });
  it('should handle whitespace characters', () => {
    expect(myarrayAlphaT('  a b c  ')).toEqual([' ', ' ', 'a', ' ', 'b', ' ', 'c', ' ', ' ']);
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

/*
describe('mysizealpha', () => {
  it('Should return a string length', () => {
    expect(mysizealpha('hello')).toBe(5);
  });
  it('Should return O if the string is empty', () => {
    expect(mysizealpha('')).toBe(0);
  });
});

/*
describe('mysizeAlphaT', () => {
  it('Should return the correct length of the string', () => {
    expect(mysizeAlphaT('Hello')).toBe(5);
  });
  it('Should return O for an empty string', () => {
    expect(mysizeAlphaT('')).toBe(0);
  });
});
*/
