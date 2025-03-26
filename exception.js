export function isAllPositive(args, errMessage = null) {
  for (let x of args) {
    if (x <= 0) {
      throw new Error(errMessage ? errMessage : "All inputs must be positive.");
    }
  }

  return true;
}

export function isAllNumeric(args, errMessage = null) {
  for (let x of args) {
    if (typeof x !== "number")
      throw new Error(errMessage ? errMessage : "Inputs must be numbers.");
  }
  return true;
}

export function isAllInteger(args, errMessage = null) {
  for (let x of args) {
    if (!Number.isInteger(x))
      throw new Error(errMessage ? errMessage : "Inputs must be integers.");
  }

  return true;
}

export function checkInputsLength(args, length, errMessage = null) {
  if (args.length < length) {
    throw new Error(
      errMessage ? errMessage : `At least ${length} numbers are required.`
    );
  }
  return true;
}
