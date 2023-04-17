namespace Sandbox19 {
  console.log("----- 19 -----");

  function Logger(logString: string) {
    return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
    }
  }

  function WithTemplate(template: string, hookId: string) {
    return function(_: Function) {
      const hookEl = document.getElementById(hookId);
      if (hookEl) {
        hookEl.innerHTML = template;
      }
    }
  }

  @Logger('LOG: Person')
  @WithTemplate('<h1>Person Object</h1>', 'app')
  class Person {
    name = 'Obama';
    constructor() {
      console.log('オブジェクト作成中');
    }
  }

  const pers = new Person();
  console.log(pers);
}