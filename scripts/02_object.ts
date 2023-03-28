namespace ObjectAndType {
  const person = {
    name: "miku",
    age: 16,
  };

  console.log(person);

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
