namespace Sandbox11 {
  console.log("----- 11 -----");

  // type AddFn = (a: number, b: number) => number;
  interface AddFn {
    (a: number, b:number): number;
  }

  let add: AddFn;
  add = (a: number, b: number) => {
    return a + b;
  };

  interface Named {
    readonly name: string;
  }

  interface Greetable extends Named {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(phrase: string) {
      console.log(phrase, this.name);
    }
  }

  let user1: Greetable;
  user1 = new Person('Obama', 61);
  user1.greet('Hello my name is');

}