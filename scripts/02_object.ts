namespace ObjectAndType {
  const person = {
    name: "miku",
    age: 16,
    hobbies: ["Sports", "Cooking"]
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
}
