namespace Sandbox09 {
  console.log("----- 09 -----");

  const hobbies = ['Music', 'Anime', 'Books', 'Fitness'];
  // const hobby1 = hobbies[0];
  // const hobby2 = hobbies[1];
  const [hobby1, hobby2, ...remainingHobbies] = hobbies;
  console.log(hobbies);
  console.log(hobby1, hobby2, remainingHobbies);

  const person = {
    name: 'Momotaro',
    age: 16,
  }

  const {
    name: userName, age
  } = person;

  console.log(person);
  console.log(userName, age);
}