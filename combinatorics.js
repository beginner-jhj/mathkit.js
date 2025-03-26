import { isAllInteger, isAllNumeric, isAllPositive } from "./exception.js";

export function combination(n, r) {
  try {
    isAllInteger([n, r]);
    isAllPositive([n, r]);
    isAllNumeric([n, r]);

    if (r > n) {
      throw new Error("r cannot be greater than n.");
    }

    if (r === 0 || r === n) {
      return 1;
    }

    if (r === 1) {
      return n;
    }

    return permutation(n, r) / permutation(r, r);
  } catch (err) {
    throw err;
  }
}

export function permutation(n, r) {
  try {
    isAllInteger([n, r]);
    isAllPositive([n, r]);
    isAllNumeric([n, r]);

    if (r > n) {
      throw new Error("r cannot be greater than n.");
    }

    if (n <= 1) {
      return 1;
    }

    let N = n;
    let result = 1;
    while (N > n - r) {
      result *= N;
      N -= 1;
    }
    return result;
  } catch (err) {
    throw err;
  }
}

export function combinationWithRepetition(n, k) {
  try {
    isAllInteger([n, k]);
    isAllNumeric([n, k]);
    isAllPositive([n, k]);
    if (n === 0) {
      throw new Error("n must be greater than 0.");
    }

    return combination(n + k - 1, k);
  } catch (err) {
    throw err;
  }
}

export function permutationWithRepetition(n, k) {
  try {
    isAllInteger([n, k]);
    isAllNumeric([n, k]);
    isAllPositive([n, k]);
    if (n === 0) {
      throw new Error("n must be greater than 0.");
    }

    return Math.pow(n, k);
  } catch (err) {
    throw err;
  }
}
