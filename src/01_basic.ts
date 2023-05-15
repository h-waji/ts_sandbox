namespace Sandbox01 {
  console.log("----- 01 -----");

  const hello = "Restart TypeScript";
  console.log(hello);

  function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("入力値が不正です");
    }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }

  // console.log(add(5, 7));
  const number1 = 5;
  const number2 = 7;
  const printResult = true;
  const phrase = "合計：";
  add(number1, number2, printResult, phrase);
}
