namespace Sandbox02 {
  console.log("----- 02 -----");

  // const person = {
  //   name: "Max",
  //   age: 50,
  //   hobbies: ["Modelling", "Illustration"],
  //   role: [2, "author"]
  // }

  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: "Obama",
    age: 61,
    hobbies: ["Agitation", "Golf"],
    role: [2, "author"],
  };

  console.log(person);

  let favoriteActivities: string[] = ["Agitation"];
  console.log(favoriteActivities);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  const product = {
    id: "p0001",
    price: 300,
    tags: ["MintTea", "Mint", "Tea"],
    details: {
      name: "Oishi Mint Tea",
      description: "Oishi Mint Tea desu.",
    },
  };

  console.log(product);
  console.log(product.details.name, product.details.description);

  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }

  const user = {
    name: "Nobunaga",
    age: 47,
    hobbies: ["Agitation", "Cuckoo"],
    role: Role.ADMIN,
  };

  if (user.role === Role.ADMIN) {
    console.log("管理者：", user.name);
  }
}
