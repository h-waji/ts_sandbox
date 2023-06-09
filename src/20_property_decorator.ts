// namespace Sandbox20 {
//   console.log("----- 20 -----");

//   function Log(target: any, propertyName: string | Symbol) {
//     console.log("----- Property decorator -----");
//     console.log(target, propertyName);
//   }

//   function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log("----- Accessor decorator -----");
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
//   }

//   function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
//     console.log("----- Method decorator -----");
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
//   }

//   function Log4(target: any, name: string | Symbol, position: number) {
//     console.log("----- Parameter decorator -----");
//     console.log(target);
//     console.log(name);
//     console.log(position);
//   }

//   class Product {
//     @Log
//     title: string;
//     private _price: number;

//     @Log2
//     set price(val: number) {
//       if (val > 0) {
//         this._price = val;
//       } else {
//         throw new Error("不正な価格です");
//       }
//     }

//     constructor(t: string, p: number) {
//       this.title = t;
//       this._price = p;
//     }

//     @Log3
//     getPriceWithTax(@Log4 tax: number) {
//       return this._price * (1 + tax);
//     }
//   }

//   // ----- Autobind -----
//   function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//       configurable: true,
//       enumerable: false,
//       get() {
//         const boundFn = originalMethod.bind(this);
//         return boundFn;
//       }
//     }
//     return adjDescriptor;
//   }

//   class Printer {
//     message = 'クリックしました';

//     @Autobind
//     showMessage() {
//       console.log(this.message);
//     }
//   }

//   const printer = new Printer();
//   const button = document.querySelector('button')!;
//   button.addEventListener('click', printer.showMessage);

//   // ----- Validation -----
//   interface ValidatorConfig {
//     [prop: string]: {
//       [validatableProp: string]: string[]
//     }
//   }

//   const registeredValidators: ValidatorConfig = {};

//   function Required(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//       ...registeredValidators[target.constructor.name],
//       [propName]: [
//         ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//         'required',
//       ],
//     }
//   }

//   function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//       ...registeredValidators[target.constructor.name],
//       [propName]: [
//         ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
//         'positive',
//       ],
//     }
//   }

//   function validate(obj: any) {
//     const objValidatorConfig = registeredValidators[obj.constructor.name];
//     if (!objValidatorConfig) {
//       return true;
//     }
//     let isValid = true;
//     for (const prop in objValidatorConfig) {
//       for (const validator of objValidatorConfig[prop]) {
//         switch (validator) {
//           case 'required':
//             isValid = isValid && !!obj[prop];
//             break;
//           case 'positive':
//             isValid = isValid && obj[prop] > 0;
//             break;
//         }
//       }
//     }
//     return isValid;
//   }

//   class Course {
//     @Required
//     title: string;
//     @PositiveNumber
//     price: number;

//     constructor(t: string, p: number) {
//       this.title = t;
//       this.price = p;
//     }
//   }

//   const courseForm = document.querySelector('form')!;
//   courseForm.addEventListener('submit', event => {
//     event.preventDefault();
//     const titleEl = document.getElementById('title') as HTMLInputElement;
//     const priceEl = document.getElementById('price') as HTMLInputElement;

//     const title = titleEl.value;
//     const price = +priceEl.value;

//     const createdCourse = new Course(title, price);

//     if (!validate(createdCourse)) {
//       alert('正しく入力してください。');
//       return;
//     }

//     console.log(createdCourse);
//   });

// }