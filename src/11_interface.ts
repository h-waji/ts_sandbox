// namespace Sandbox11 {
//   console.log("----- 11 -----");

//   // type AddFn = (a: number, b: number) => number;
//   interface AddFn {
//     (a: number, b:number): number;
//   }

//   let add: AddFn;
//   add = (a: number, b: number) => {
//     return a + b;
//   };

//   interface Named {
//     readonly name?: string;
//     outputName?: string;
//   }

//   interface Greetable extends Named {
//     greet(phrase: string): void;
//   }

//   class Person implements Greetable {
//     name?: string;
//     age?: number;

//     constructor(name?: string, age?: number) {
//       if (name) {
//         this.name = name;
//       }
//       if (age) {
//         this.age = age;
//       }
//     }

//     greet(phrase: string) {
//       if (this.name) {
//         console.log(phrase, this.name);
//       } else {
//         console.log('Hello!');
//       }
//     }
//   }

//   let user1: Greetable;
//   user1 = new Person('Obama', 61);
//   user1.greet('Hello my name is');

//   let user2: Greetable;
//   user2 = new Person();
//   user2.greet('');

// }