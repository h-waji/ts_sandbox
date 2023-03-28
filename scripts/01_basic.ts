namespace Basic {
  const hello = "Hello TypeScript";
  console.log(hello);

  // ----- 型 -----
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  const number1 = 3;
  const number2 = 4.5;
  const result = add(number1, number2);
  console.log(result);
}
