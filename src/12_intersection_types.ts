namespace Sandbox12 {
  console.log("----- 12 -----");

  type Admin = {
    name: string;
    privileges: string[];
  }

  type Employee = {
    name: string;
    startDate: Date;
  }

  // interface ElevatedEmployee extends Admin, Employee {}
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: 'Obama', 
    privileges: ['nation-building', 'create-server'], 
    startDate: new Date(),
  }

  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;
}