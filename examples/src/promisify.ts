import { readFile } from "fs";

// TODO, finish implementation
function promisify(callback: Function) {
  return function returnFn<T>(value: T) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await callback(value);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };
}

let readFilePromise = promisify(readFile);
readFilePromise("./chess.ts")
  //@ts-ignore
  .then(result => console.log("success reading file", result.toString()))
  .catch(error => console.error("error reading file", error));

// in other context

function callCallback(callback: Function) {
  return function caller<T>(value: T) {
    callback(value);
  };
}

const doThisLater = callCallback(console.log);
doThisLater(4);

// DIRECTLY from Boris' repo
// Correct answers
// 1. Implement a general-purpose promisify function, which takes any function that takes exactly one argument and a callback, and wraps it in a function that returns a promise.
function promisify2<T, A>(
  f: (arg: A, f: (error: unknown, result: T | null) => void) => void
): (arg: A) => Promise<T> {
  return (arg: A) =>
    new Promise<T>((resolve, reject) =>
      f(arg, (error, result) => {
        if (error) {
          return reject(error);
        }
        if (result === null) {
          return reject(null);
        }
        resolve(result);
      })
    );
}



return () => {
  new
}