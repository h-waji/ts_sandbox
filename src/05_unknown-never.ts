// namespace Sandbox05 {
//   console.log("----- 05 -----");

//   let userInput: unknown; // 型チェックの強制
//   let userName: string;

//   userInput = 5;
//   userInput = "hoge";

//   if (typeof userInput === "string") {
//     userName = userInput;
//   }

//   function generateError(message: string, code: number): never { 
//     throw { message: message, errorCode: code };
//   }

//   const result = generateError("エラーが発生しました", 500);
//   console.log(result);
// }
