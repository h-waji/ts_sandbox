"use strict";
var Sandbox04;
(function (Sandbox04) {
    function add(n1, n2) {
        return n1 + n2;
    }
    function printResult(num) {
        console.log('Result: ' + num);
    }
    printResult(add(4, 1));
    let combineValues;
    combineValues = add;
    console.log(combineValues(10, 22));
    function addAndHandle(n1, n2, cb) {
        const result = n1 + n2;
        cb(result);
    }
    addAndHandle(10, 20, (result) => {
        console.log(result);
        return result;
    });
})(Sandbox04 || (Sandbox04 = {}));
//# sourceMappingURL=04_function.js.map