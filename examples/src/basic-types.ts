let isHungry: boolean = true
let myAge: number = 25
let favFood: string = 'guacamole'
let myNumbers: number[] = [1, 2, 3]
// generic array type, Array<elemType>
let otherNumbers: Array<number> = [4, 5, 6]

let myTupleExample: [string, number] = ['Joe', 1]

const enum Color {
  Red,
  Green,
  Blue
}

let favColor: Color = Color.Red

// Using the any type
let myThing: any = 'hello'

// using void as a type
let unusableThing: void = undefined

function doIt(): void {
  console.log('i did it')
}

// undefined and null can also be used as types
let u: undefined = undefined
let n: null = null

function error(message: string): never {
  throw new Error(message)
}

//object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined
// makes me think of React props
let myProps: object | null = null

myProps = { isOn: true }

// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// When using TS with JSX, you can only write a type assertion with "as"

// option 1
let value1: any = 'this is a string'
let stringlength: number = (<string>value1).length
// option 2
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
