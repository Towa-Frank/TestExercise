import { myAalphaNumberT } from '../src/index';

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


