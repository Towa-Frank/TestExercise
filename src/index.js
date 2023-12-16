/* eslint-disable no-plusplus */
export const myAalphaNumberT = (nbr) => `${nbr}`;

export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
};
/*
export const mysizealpha = (str = '') => {
  let count = 0;
  if (typeof str !== 'string') {
    return count;
  }
  while (!str[count]) {
    count++;
  }
  return count;
};
*/
export const displayAlphaT = () => 'abcdefghijklmnopqrstuvwxyz';

export const myarrayAlphaT = (str) => {
  const result = [];

  for (let i = 0; i < myarrayAlphaT(str); i += 1) {
    result[i] = str[i];
  }

  return result;
};
/*
export const myposinegT = (nbr) => {
  if (nbr <= 0) {
    return 'NEGATIVE';
  }

  return 'POSITIF';
};
/*
export const fibo = (n) => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
};

export const Mydisplayalphreverse_t = () => {
  const alpha = my_display_alpha_t();
  let reverseAlpha = '';

  for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
    reverseAlpha += alpha[i - 1];
  }

  return reverseAlpha;
}

export const mylengtharrayT = (arr) => {
  let i = 0;

  while (!arr[i]) {
    i += 1;
  }

  return i;
}
export const mydisplayunicodeT = (arr) => {
  const results = [];

  for (let i = 0; i < arr.length; i += 1) {
    const decimal = arr[i];

    if ((decimal >= 65 && decimal <= 99)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 97 && decimal <= 122)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 48 && decimal <= 57)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if (decimal === 32) {
      results[i] = String.fromCharCode(arr[i]);
    }
  }

  return results.join('');
};
*/
