var Sandbox03;
(function (Sandbox03) {
    function combine(input1, input2) {
        var result;
        if (typeof input1 === "number" && typeof input2 === "number") {
            result = input1 + input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    var combineAges = combine(32, 37);
    console.log(combineAges);
    var combineNames = combine("Mario", "Wario");
    console.log(combineNames);
})(Sandbox03 || (Sandbox03 = {}));
