export const myAalphaNumberT = (nbr) => `${nbr}`;
export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
};
export const displayAlphaT = () => 'abcdefghijklmnopqrstuvwxyz';
export const myposinegT = (nbr) => {
  if (nbr <= 0) {
    return 'NEGATIVE';
  }

  return 'POSITIF';
};

export const fibo = (n) => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
};
export const mylengtharrayT = (arr) => {
  let i = 0;

  while (!arr[i]) {
    i += 1;
  }

  return i;
};

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
