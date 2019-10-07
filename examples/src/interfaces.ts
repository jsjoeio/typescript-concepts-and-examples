/**
 * What's the difference between implements and extends?
 *
 *
 * Extends means it is similar to the parent but may overwrite some properties.
 *
 * Implements means it uses the exact same properties as the class.
 *
 * To be clear, an _interface_ can be extended while a class can **implement** an interface.
 */

interface Person {
  firstName: string;
  lastName: string;
  canTalk: boolean;
}

interface DogInterface extends Person {
  lastName: never;
  canTalk: false;
}

class Student implements Person {
  firstName: string;
  lastName: string;
  canTalk: boolean;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.canTalk = true;
  }
}

class Dog implements DogInterface {
  canTalk: false;
  firstName: string;
  lastName: never;

  constructor(name: string) {
    this.firstName = name;
    this.canTalk = false;
  }
}
