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
