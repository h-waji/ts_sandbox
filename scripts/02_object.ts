namespace Sandbox02 {
  // const person = {
  //   name: "miku",
  //   age: 16,
  //   hobbies: ["Sports", "Cooking"],
  //   role: [2, "author"] // => このようなケースはTypeScriptは型推論できない
  // };
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple
  } = {
    name: "miku",
    age: 16,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };

  console.log(person);

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  // ----- ネスト -----
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

  // ----- Enum -----
  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }

  const user = {
    name: "skeleton",
    age: 100,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };

  if (user.role === Role.ADMIN) {
    console.log("管理者ユーザ");
  }
}
