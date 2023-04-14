namespace Sandbox10 {
  console.log("----- 10 -----");

  class Department {
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }

    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }

  class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('レポートが見つかりません。');
    }

    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('正しい値を設定してください。');
      }
      this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }

    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }

    printReports() {
      console.log(this.reports);
    }

    addEmployee(name: string) {
      if (name === 'Joe') return;

      this.employees.push(name);
    }
  }

  const it = new ITDepartment('d1', ['Joe']);
  console.log(it);
  it.describe();

  it.addEmployee("Obama");
  it.addEmployee("Trump");
  it.addEmployee("Biden");
  it.printEmployeeInformation();

  console.log(it);

  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  // accountingCopy.describe();

  const accounting = new AccountingDepartment('d2', []);

  accounting.mostRecentReport = '通期会計レポート';
  accounting.addReport('Something');
  console.log(accounting.mostRecentReport);
  accounting.printReports();

  accounting.addEmployee('Joe');
  accounting.addEmployee('Bob');
  accounting.printEmployeeInformation();
}