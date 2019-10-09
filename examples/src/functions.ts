// Most of the time TS will infer the return type
function sum(a: number, b: number) {
  return a + b;
}

// Using a function expression is the same
let add = (a: number, b: number): number => {
  return a + b;
};

// And yet another way as well
let addAgain: (a: number, b: number) => number = function(
  a: number,
  b: number
): number {
  return a + b;
};

// optional params and default params are the same when it comes to type
function buildName(firstName: string, lastName?: string) {
  //...
}

// is the same as
function buildNameAgain(firstName: string, lastName = "Smith") {
  //...
}

// T is a generic
// It acts like a place holder.
// Generics go inside <>
// TS is smart enough to know to repalce T with the actual type
interface Filter {
  <T>(array: T[], callback: (item: T) => boolean): T[];
}

let filter: Filter = (array, callback) => {
  return array.filter(item => callback(item));
};

// Using multiple generics
type MapArray = {
  <ItemType, ReturnType>(
    array: ItemType[],
    callback: (item: ItemType) => ReturnType
  ): ReturnType[];
};

const map: MapArray = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    result.push(callback(item));
  }
  return result;
};

// Same thing but with a function declaration
function mapAgain<T, U>(array: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    result.push(callback(item));
  }
  return result;
}

// From "Programming TypeScript"
/**
 * a utility function to check if two values are the same type.
 * @param valueOne {any}
 * @param valueTwo {any}
 *
 */
function is<T extends unknown>(valueOne: T, valueTwo: T): boolean {
  return valueOne === valueTwo;
}
