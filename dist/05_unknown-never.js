"use strict";
var Sandbox05;
(function (Sandbox05) {
    let userInput;
    let userName;
    userInput = 5;
    userInput = "hoge";
    if (typeof userInput === "string") {
        userName = userInput;
    }
    function generateError(message, code) {
        throw { message: message, errorCode: code };
    }
    const result = generateError("エラーが発生しました", 500);
    console.log(result);
})(Sandbox05 || (Sandbox05 = {}));
//# sourceMappingURL=05_unknown-never.js.map