namespace Sandbox19 {
  console.log("----- 19 -----");

  function Logger(logString: string) {
    return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
    }
  }

  @Logger('LOG: Person')
  class Person {
    name = 'Obama';
    constructor() {
      console.log('オブジェクト作成中');
    }
  }

  const pers = new Person();
  console.log(pers);
}