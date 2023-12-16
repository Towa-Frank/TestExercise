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
  it('eturns an array of characters for a valid string', () => {
    expect(myarrayAlphaT('Hello')).toBe(['H', 'e', 'l', 'l', 'o']);
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
