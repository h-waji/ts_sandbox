"use strict";
var Sandbox01;
(function (Sandbox01) {
    const hello = "Hello TypeScript";
    console.log(hello);
    function add(n1, n2, showResult, phrase) {
        const result = n1 + n2;
        if (showResult) {
            console.log(phrase + result);
        }
        else {
            return result;
        }
    }
    const number1 = 3;
    const number2 = 4.5;
    const printResult = true;
    const resultPhrase = "Result: ";
    add(number1, number2, printResult, resultPhrase);
})(Sandbox01 || (Sandbox01 = {}));
