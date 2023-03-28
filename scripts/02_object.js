var ObjectAndType;
(function (ObjectAndType) {
    // const person = {
    //   name: "miku",
    //   age: 16,
    //   hobbies: ["Sports", "Cooking"],
    //   role: [2, "author"] // => このようなケースはTypeScriptは型推論できない
    // };
    var person = {
        name: "miku",
        age: 16,
        hobbies: ["Sports", "Cooking"],
        role: [2, "author"]
    };
    console.log(person);
    var favoriteActivities;
    favoriteActivities = ["Sports"];
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby.toUpperCase());
    }
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
