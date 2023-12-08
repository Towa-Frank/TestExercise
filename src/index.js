export const myAalphaNumberT = (nbr) => `${nbr}`;

export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
};

export const mysizeAlphaT = (str = '') => {
  let count = 0;

  if (typeof str !== 'string') {
    return count;
  }

  while (!!str[count]) {
    count++;

  }

  return count;
}

