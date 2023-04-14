namespace Sandbox03 {
  console.log("----- 03 -----");

  type Combinable = number | string;
  type ConversionDescriptor = "as-number" | "as-text"; // Union と Literal の組み合わせ

  function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
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

  // ----- エイリアス型とオブジェクト型 -----

  // function greet(user: { name: string; age: number }) {
  //   console.log("Hi, I am " + user.name);
  // }

  // function isOlder(user: { name: string; age: number }, checkAge: number) {
  //   return checkAge > user.age;
  // }

  type User = { name: string; age: number };

  function greet(user: User) {
    console.log("Hi, I am " + user.name);
  }

  function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
  }

  const user = { name: "Taro", age: 50 };
  greet(user);
  console.log(isOlder(user, 35));
}
