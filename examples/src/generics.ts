// A simple use of a generic
// with an "identity" function
function identity<T>(arg: T) {
  return arg;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identityTwo<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identityTwo;

// In this example, we only want the generic to be types that have .length

interface LengthWise {
  length: number;
}

function doTheOtherThing<T extends LengthWise>(arg: T): T {
  return arg;
}

// Throws an error because number does not have a length property
// doTheOtherThing(3)

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// Error, m is not assignable
// getProperty(x, "m");
