"use strict";
var Sandbox02;
(function (Sandbox02) {
    const person = {
        name: "miku",
        age: 16,
        hobbies: ["Sports", "Cooking"],
        role: [2, "author"],
    };
    console.log(person);
    let favoriteActivities;
    favoriteActivities = ["Sports"];
    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
    }
    const product = {
        id: "vocaloid001",
        price: 0,
        singers: ["Rin", "Len"],
        details: {
            title: "Rettojoto",
            description: "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
        },
    };
    console.log(product);
    let Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    const user = {
        name: "skeleton",
        age: 100,
        hobbies: ["Sports", "Cooking"],
        role: Role.ADMIN,
    };
    if (user.role === Role.ADMIN) {
        console.log("管理者ユーザ");
    }
})(Sandbox02 || (Sandbox02 = {}));
//# sourceMappingURL=02_object.js.map