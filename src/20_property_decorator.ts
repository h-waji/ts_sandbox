namespace Sandbox20 {
  console.log("----- 20 -----");

  function Log(target: any, propertyName: string | Symbol) {
    console.log("----- Property decorator -----");
    console.log(target, propertyName);
  }

  function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("----- Accessor decorator -----");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("----- Method decorator -----");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log4(target: any, name: string | Symbol, position: number) {
    console.log("----- Parameter decorator -----");
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("不正な価格です");
      }
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }

  function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    }
    return adjDescriptor;
  }

  class Printer {
    message = 'クリックしました';

    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }

  const printer = new Printer();
  const button = document.querySelector('button')!;
  button.addEventListener('click', printer.showMessage);

}