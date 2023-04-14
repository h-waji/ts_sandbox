namespace Sandbox06 {
  console.log("----- 06 -----");

  // const add = (a: number, b: number) => {
  //   return a + b;
  // };
  const add = (a: number, b: number) => a + b;

  // const printOutput = (output: string | number) => {
  //   console.log(output);
  // }
  // constの型を関数型として指定
  const printOutput: (output: string | number) => void = output => {
    console.log(output);
  }

  console.log(add(4, 14));
  printOutput(add(4, 14));

  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('click', event => {
      console.log(event);
    });
  }
}