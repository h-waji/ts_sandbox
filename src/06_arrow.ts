namespace Sandbox06 {
  console.log("----- 06 -----");

  // const add = (a:number, b: number) => {
  //   return a + b;
  // };
  // console.log(add(1, 3));

  // デフォルト値は一番右か全部に
  const add = (a: number, b: number = 1) => a + b;
  console.log(add(5));

  // const printOutput = (output: string | number) => {
  //   console.log(output);
  // }
  // printOutput(5);
  // printOutput("５");

  // constの型を関数型として指定
  //   (output: string | number) => void
  const printOutput: (output: string | number) => void = output => {
    console.log(output);
  }
  printOutput(55);
  printOutput("５５");

  const button = document.querySelector('button');
  if(button) {
    button.addEventListener('click', event => {
      console.log(event);
    })
  }
}
