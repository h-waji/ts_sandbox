var Basic;
(function (Basic) {
    var hello = "Hello TypeScript";
    console.log(hello);
    // ----- 型 -----
    function add(n1, n2) {
        // JavaScriptの型チェック
        // if(typeof n1 !== "number" || typeof n2 !== "number") {
        //   throw new Error("入力値が不正です");
        // }
        return n1 + n2;
    }
    var number1 = 3;
    var number2 = 4.5;
    var result = add(number1, number2);
    console.log(result);
})(Basic || (Basic = {}));
