// namespace Sandbox19 {
//   console.log("----- 19 -----");

//   function Logger(logString: string) {
//     return function(constructor: Function) {
//       console.log(logString);
//       console.log(constructor);
//     }
//   }

//   function WithTemplate(template: string, hookId: string) {
//     console.log('Template factory');

//     return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
//       // class は constructor のシンタックスシュガー
//       return class extends originalConstructor {
//         constructor(..._: any[]) {
//           super();
//           console.log('Print template');
//           const hookEl = document.getElementById(hookId);
//           if (hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = this.name;
//           }
//         }
//       }
//     }
//   }

//   @Logger('LOG: Person')
//   @WithTemplate('<h1>Person Object</h1>', 'app')
//   class Person {
//     name = 'Obama';
//     constructor() {
//       console.log('オブジェクト作成中');
//     }
//   }

//   const pers = new Person();
//   console.log(pers);
// }