import {
  isAllInteger,
  isAllNumeric,
  isAllPositive,
  checkInputsLength,
} from "./exception.js";

function gcd(...args) {
  try {
    isAllInteger(args);
    isAllNumeric(args);
    isAllPositive(args);
    checkInputsLength(args, 2);

    const GET_GCD = (a, b) => {
      return b === 0 ? a : GET_GCD(b, a % b);
    };

    return args.reduce((acc, num) => GET_GCD(acc, num));
  } catch (err) {
    throw err;
  }
}

function lcm(...args) {
  try {
    isAllNumeric(args);
    isAllInteger(args);
    isAllPositive(args);
    checkInputsLength(args, 2);

    const GET_LCM = (a, b) => (a * b) / gcd(a, b);
    return args.reduce((acc, num) => GET_LCM(acc, num));
  } catch (err) {
    throw err;
  }
}

function factorial(num) {
  try {
    isAllInteger([num], "Input must be a integer.");
    isAllPositive([num], "Input must be positive.");
    isAllNumeric([num], "Input must be a number");
    if (num === 0) {
      return 1;
    }
    let result = 1;
    while (num > 1) {
      result *= num;
      num -= 1;
    }
    return result;
  } catch (err) {
    throw err;
  }
}

function isPrime(num) {
  try {
    isAllInteger([num], "Input must be a integer.");
    isAllPositive([num], "Input must be positive.");
    isAllNumeric([num], "Input must be a number.");

    if (num <= 1) {
      return false;
    }

    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }

    return true;
  } catch (err) {
    throw err;
  }
}

function primeFactors(num) {
  try {
    isAllInteger([num], "Input must be a integer.");
    isAllPositive([num], "Input must be positive.");
    isAllNumeric([num], "Input must be a number.");

    if (num === 1) {
      return {};
    }
    if (isPrime(num)) {
      return { [num]: 1 };
    }

    let factors = {};
    let toDivide = num;
    let x = 2;

    while (x <= Math.sqrt(num)) {
      while (toDivide % x === 0) {
        factors[x] = factors[x] ? factors[x] + 1 : 1;
        toDivide = toDivide / x;
      }
      x += 1;
    }

    if (toDivide > 2) {
      factors[toDivide] = factors[toDivide] ? factors[toDivide] + 1 : 1;
    }

    return factors;
  } catch (err) {
    throw err;
  }
}

function sieve(limit) {
  try {
    isAllInteger([num], "Input must be a integer.");
    isAllPositive([num], "Input must be positive.");
    isAllNumeric([num], "Input must be a number.");

    if (limit < 2) {
      return [];
    }

    let array = Array.from(Array(limit + 1).keys());

    array[0] = array[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (!array[i]) continue;

      for (let j = i * i; j < array.length; j += i) {
        array[j] = false;
      }
    }

    return array.filter((x) => x);
  } catch (err) {
    throw err;
  }
}
