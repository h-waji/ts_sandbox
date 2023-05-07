// namespace Sandbox04 {
//   console.log("----- 04 -----");

//   function add(n1: number, n2: number) {
//     return n1 + n2;
//   }

//   function printResult(num: number) {
//     console.log('Result: ' + num);
//   }

//   printResult(add(4, 1));

//   let combineValues: (a: number, b: number) => number;
//   combineValues = add;
//   console.log(combineValues(10, 22));

//   function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
//   }

//   addAndHandle(10, 20, (result) => {
//     console.log(result);
//     return result;
//   });
// }
