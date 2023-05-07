// namespace Sandbox18 {
//   console.log("----- 18 -----");

//   class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];

//     addItem(item: T) {
//       this.data.push(item);
//     }

//     removeItem(item: T) {
//       if (this.data.indexOf(item) === -1) return;
//       this.data.splice(this.data.indexOf(item), 1); // ないときは -1 を返す => -1 は配列の一番最後
//     }

//     getItems() {
//       return [...this.data];
//     }
//   }

//   const textStorage = new DataStorage<string>();
//   textStorage.addItem("Data1");
//   textStorage.addItem("Data2");
//   textStorage.addItem("Data3");
//   textStorage.removeItem("Data2");
//   console.log(textStorage.getItems());

//   const numberStorage = new DataStorage<number>();
//   numberStorage.addItem(1);
//   numberStorage.addItem(2);
//   numberStorage.addItem(3);
//   console.log(numberStorage.getItems());

//   // const objStorage = new DataStorage<object>();
//   // const obj = { name: 'Mouse'};
//   // objStorage.addItem(obj);
//   // objStorage.addItem({ name: 'Hamster'});
//   // // ...
//   // objStorage.removeItem(obj);
//   // console.log(objStorage.getItems());

//   // ----- Partial -----
//   interface CourseGoal {
//     title: string;
//     description: string;
//     completeUntile: Date;
//   }

//   function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
//     // return {
//     //   title: title, description: description, completeUntile: date,
//     // };
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeUntile = date;
//     return courseGoal as CourseGoal;
//   }

//   // ----- Readonly -----
//   const names: Readonly<string[]> = ['Miku', 'Rin'];
//   // names.push('Len');
//   // names.pop();

// }