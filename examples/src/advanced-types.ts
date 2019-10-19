/*
 Chapter 6 - Exercises
 What is subtyping?
 - Subtyping is comparing two types, specifically when one type can be refined to a stricter type,
 making it a subtype.

 What is variance?
 - a concept used to explain type variants

 For each of the following, decide if the first type is assignable to the second type
 a. 1 and number - yes
 b. number and 1 - no
 c. string and (number | string) - yes
 d. boolean and number - no
 e. number[] and (number | string)[] - yes
 f. (number | string)[] and number[] - no
 g. {a: true} and {a: boolean} - no
 h. {a: b: [string]}} and {a: {b: [number|string]}} - yes
 i. (a: number) => string and (b: number) => string - yes
 j. (a: number) => string and (a: string) => string - no
 k. (a: number | string) => string and (a: string) => string - no
 l. E.X (defined in an enum enum E {X = 'X'}) and F.X (defined in an enum enum F {X = 'X}) - no



*/

// 1 is assignable to number
type MyNumber = number;
const num: MyNumber = 1;

// type "number" is not assignable to 1
type OneType = 1;
const ANumber: number = 9;
// Throws an error
// const ANum: OneType = ANumber;

enum E {
  X = 'X'
}

enum F {
  X = 'X'
}

// Throws an error
// const test: F.X = E.X


// 2.
type O = {
  a: {
    b: {
      c: string;
    }
  }
}

type MyKey = keyof O;
// string

type OtherKey = O['a']['b']
// object with a key 'c' and value string

// Write an Exclusive<T, U>

// WOOO!!!
type ExclusiveOne<T, U> = T extends U ? never : T;
type ExclusiveTwo<T, U> = U extends T ? never : U;
type Exclusive<T, U> = ExclusiveOne<T, U> | ExclusiveTwo<T, U>;

// Start with 1
// Does 1 extend 2 - no
// Does 1 extend 3 - no
// Does 1 extend 4 - no
// so we return it
// We need to do the same

// Example
type IsMyThing<MyThing, YourThing> = MyThing extends YourThing ? true : false;
type AnotherTest = IsMyThing<string, boolean>;


type MyTest = Exclusive<1 | 2 | 3, 2 | 3 | 4>;