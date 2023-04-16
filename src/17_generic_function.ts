namespace Sandbox17 {
  console.log("----- 17 -----");

  // function merge(objA: object, objB: object) {
  //   return Object.assign(objA, objB);
  // }
  function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergedObj = merge({ name: 'Obama' }, { age: 61 });
  console.log(mergedObj.age);
}
