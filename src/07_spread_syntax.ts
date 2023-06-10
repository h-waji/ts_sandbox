namespace Sandbox07 {
  console.log("----- 07 -----");

  const singers = ['Rin', 'Len'];
  const vocaloid = ['Miku'];

  // vocaloid.push(singers[0], singers[1]);
  vocaloid.push(...singers);
  console.log(vocaloid);

  const person = {
    name: 'Obama', 
    age: 61, 
  };

  // const copiedPerson = person; // ポインタを渡しているだけ
  const copiedPerson = {
    ...person,
  };

  person.name = 'Colonel Sanders';
  person.age = 65;
  console.log(copiedPerson);
  console.log(person);
}