namespace Sandbox11 {
  console.log("----- 11 -----");

  interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
  }

  let user1: Person;

  user1 = {
    name: 'Obama', 
    age: 61, 
    greet(phrase: string) {
      console.log(phrase, this.name);
    }
  }

  user1.greet('Hello my name is');

}