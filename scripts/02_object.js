var ObjectAndType;
(function (ObjectAndType) {
    var person = {
        name: "miku",
        age: 16
    };
    console.log(person);
    // ----- ネスト -----
    var product = {
        id: "vocaloid001",
        price: 0,
        singers: ["Rin", "Len"],
        details: {
            title: "Rettojoto",
            description: "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx"
        }
    };
    console.log(product);
})(ObjectAndType || (ObjectAndType = {}));
