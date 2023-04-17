namespace Sandbox19 {
  console.log("----- 19 -----");

  function Logger(constructor: Function) {
    console.log('ログ出力中');
    console.log(constructor);
  }

  @Logger
  class Person {
    name = 'Obama';
    constructor() {
      console.log('オブジェクト作成中');
    }
  }

  const pers = new Person();
  console.log(pers);
}