namespace Sandbox16 {
  console.log("----- 16 -----");

  const names: Array<string> = [];
  // names[0].split(' ');

  // const promise = new Promise<string>((resolve, reject) => {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Completed');
    }, 2000);
  });

  promise.then((data) => {
    data.split(' ');
  });

  function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

}