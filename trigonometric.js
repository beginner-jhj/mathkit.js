import { isAllInteger, isAllNumeric } from "./exception.js";

function degToRad(deg) {
  try {
    isAllNumeric([deg], "Input must be a number.");
    return deg * (Math.PI / 180);
  } catch (err) {
    throw err;
  }
}

function radToDeg(rad) {
  try {
    isAllNumeric([rad], "Input must be a number.");
    return rad * (180 / Math.PI);
  } catch (err) {
    throw err;
  }
}

function sec(deg, isDegree = false) {
  try {
    let theta = deg - 1.5707963267948966;
    if (isDegree) {
      theta = degToRad(deg);
    }
    isAllInteger([theta / Math.PI], "sec(deg) is undefined at deg = π/2 + kπ");
    return 1 / Math.cos(deg);
  } catch (err) {
    throw err;
  }
}

function csc(deg, isDegree = false) {
  try {
    let theta = deg;
    if (isDegree) {
      theta = degToRad(deg);
    }
    isAllInteger([theta / Math.PI], "csc(deg) is undefined at deg = kπ");
    return 1 / Math.sin(deg);
  } catch (err) {
    throw err;
  }
}

function cot(deg, isDegree = false) {
  try {
    let theta = deg;
    if (isDegree) {
      theta = degToRad(deg);
    }
    isAllInteger([theta / Math.PI], "cot(deg) is undefined at deg = kπ");
    return 1 / Math.tan(deg);
  } catch (err) {
    throw err;
  }
}
