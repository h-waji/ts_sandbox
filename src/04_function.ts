namespace Sandbox04 {
  console.log("----- 04 -----");

  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  function printResult(num: number) {
    console.log('Result: ' + num);
  }

  printResult(add(5, 17));

  let combineValues: (a: number, b: number) => number;
  combineValues = add;
  console.log(combineValues(2023, 517));

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const sum = n1 + n2;
    cb(sum);
  }

  addAndHandle(20, 23, (n) => {
    console.log(n);
  });
}
