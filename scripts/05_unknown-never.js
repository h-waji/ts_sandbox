var Sandbox05;
(function (Sandbox05) {
    var userInput; // 型チェックの強制
    var userName;
    userInput = 5;
    userInput = "hoge";
    if (typeof userInput === "string") {
        userName = userInput;
    }
    function generateError(message, code) {
        throw { message: message, errorCode: code };
    }
    var result = generateError("エラーが発生しました", 500);
    console.log(result);
})(Sandbox05 || (Sandbox05 = {}));
