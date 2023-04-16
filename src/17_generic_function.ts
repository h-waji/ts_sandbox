namespace Sandbox17 {
  console.log("----- 17 -----");

  // function merge(objA: object, objB: object) {
  //   return Object.assign(objA, objB);
  // }
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergedObj = merge({ name: 'Obama' }, { age: 61 });
  console.log(mergedObj.age);


  interface Lengty {
    length: number;
  }

  function countAndDescribe<T extends Lengty>(element: T): [T, string] {
    let discriptionText = '値がありません。';
    if (element.length > 0) {
      discriptionText = `値は${element.length}個です。`;
    }
    return [element, discriptionText];
  }

  console.log(countAndDescribe('今日は雨が降っています。'));
}
