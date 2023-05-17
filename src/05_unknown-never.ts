namespace Sandbox05 {
  console.log("----- 05 -----");

  let userInput: unknown;
  let userName: string;

  userInput = 100;
  userInput = "Miku";

  if (typeof userInput === "string") {
    userName = userInput;
    console.log(userName);
  }

  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
  }

  const result = generateError("エラーが発生しました", 500);
  console.log("----- end -----");
}
