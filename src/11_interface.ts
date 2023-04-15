namespace Sandbox11 {
  console.log("----- 11 -----");

  interface Greetable {
    name: string;

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

  // user1 = {
  //   name: 'Obama', 
  //   age: 61, 
  //   greet(phrase: string) {
  //     console.log(phrase, this.name);
  //   }
  // }

  user1.greet('Hello my name is');

}