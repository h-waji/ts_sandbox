var Basic;
(function (Basic) {
    var hello = "Hello TypeScript";
    console.log(hello);
    // ----- 型 -----
    function add(n1, n2, showResult, phrase) {
        // JavaScriptの型チェック
        // if(typeof n1 !== "number" || typeof n2 !== "number") {
        //   throw new Error("入力値が不正です");
        // }
        var result = n1 + n2;
        if (showResult) {
            console.log(phrase + result);
        }
        else {
            return result;
        }
    }
    var number1 = 3;
    var number2 = 4.5;
    var printResult = true;
    var resultPhrase = "Result: ";
    add(number1, number2, printResult, resultPhrase);
})(Basic || (Basic = {}));
