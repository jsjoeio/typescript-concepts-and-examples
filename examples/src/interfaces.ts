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

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'woodcutting';
}

class Sneaker implements Shoe {
  purpose = 'walking';
}

type ShoeType = 'balletFlat' | 'boot' | 'sneaker';

type ShoeCreate = {
  (create: 'balletFlat'): BalletFlat;
  (create: 'boot'): Boot;
  (create: 'sneaker'): Sneaker;
};

interface ShoeInteface {
  create: ShoeCreate;
}

let Shoe: ShoeInteface = {
  create(type: ShoeType) {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  }
};



interface User {
  email: string;
  firstName: string;
  age: number;
}

const myFriend: User = {

}