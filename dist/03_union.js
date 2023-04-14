"use strict";
var Sandbox03;
(function (Sandbox03) {
    function combine(input1, input2, resultConversion) {
        let result;
        if ((typeof input1 === "number" && typeof input2 === "number") ||
            resultConversion === "as-number") {
            result = +input1 + +input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    const combineAges = combine(32, 37, "as-number");
    console.log(combineAges);
    const combineStringAges = combine("32", "37", "as-number");
    console.log(combineStringAges);
    const combineNames = combine("Mario", "Wario", "as-text");
    console.log(combineNames);
    function greet(user) {
        console.log("Hi, I am " + user.name);
    }
    function isOlder(user, checkAge) {
        return checkAge > user.age;
    }
    const user = { name: "Taro", age: 50 };
    greet(user);
    console.log(isOlder(user, 35));
})(Sandbox03 || (Sandbox03 = {}));
//# sourceMappingURL=03_union.js.map