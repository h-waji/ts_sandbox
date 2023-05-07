// namespace Sandbox06 {
//   console.log("----- 06 -----");

//   // const add = (a: number, b: number) => {
//   //   return a + b;
//   // };
//   // デフォルト値は一番右か全部に
//   const add = (a: number, b: number = 1) => a + b;

//   // const printOutput = (output: string | number) => {
//   //   console.log(output);
//   // }
//   // constの型を関数型として指定
//   const printOutput: (output: string | number) => void = output => {
//     console.log(output);
//   }

//   console.log(add(4));
//   printOutput(add(4, 14));

//   const button = document.querySelector('button');
//   if (button) {
//     button.addEventListener('click', event => {
//       console.log(event);
//     });
//   }
// }