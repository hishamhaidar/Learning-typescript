import type { Employee } from './types/index.js';

let two = 2;
const five = 5;

const getFive = (): 5 => five;
// const getTwo = (): 2 => two; // Error: can't guarantee return type

const someEmployee: Readonly<Employee> = {
  id: 1,
  name: "Alice",
  age: 30
};
// someEmployee.id = 2; // Error: readonly
// someEmployee.name = "Bob"; // Error: readonly
// someEmployee.age = 31; // Error: readonly
const employeeKeys: Array<keyof Employee> = ["id", "name", "age"];
//employeeKeys.push("salary"); error
//employeeKeys.push("Id"); error
//employeeKeys.push("Name"); error


const temp = {
  id: 1,
  name: "Alice",
  age: 30
} as const;
//temp.id = 2; error
//temp.name = "Bob"; error

// === Utility Types Examples ===

// 1. Required<T> - Makes all optional properties required
type RequiredEmp = Required<Employee>;
const requiredEmployee: RequiredEmp = {
  id: 1,
  name: "John",
  age: 30,
  // All properties are now required, including index signature properties
};

// 2. Partial<T> - Makes all properties optional
type PartialEmp = Partial<Employee>;
const partialEmployee: PartialEmp = {
  id: 1,
  // name and age are optional now
};

// 3. Pick<T, K> - Creates type with only specified properties
type PickEmp = Pick<Employee, 'id' | 'name'>;
const pickedEmployee: PickEmp = {
  id: 2,
  name: "Jane",
  // age is not allowed here
};

// 4. Omit<T, K> - Creates type without specified properties
type OmitEmp = Omit<Employee, 'age'>;
const omittedEmployee: OmitEmp = {
  id: 3,
  name: "Bob",
  // age is omitted
  department: "IT", // index signature still works
};

// 5. NonNullable<T> - Removes null and undefined from type
type NonNullableEmp = NonNullable<Employee | null>;
const nonNullEmployee: NonNullableEmp = {
  id: 4,
  name: "Alice",
  age: 25,
  // This cannot be null now
};

// 6. Exclude<T, U> - Excludes types that are assignable to U
type ExcludeEmp = Exclude<'id' | 'name' | 'age' | 'salary', 'salary'>;
const excludedKey: ExcludeEmp = 'id'; // 'salary' is excluded
// const excludedKey2: ExcludeEmp = 'salary'; // Error!

// 7. Extract<T, U> - Extracts types that are assignable to U
type ExtractEmp = Extract<'id' | 'name' | 'age' | 'salary', 'id' | 'age'>;
const extractedKey: ExtractEmp = 'id'; // Only 'id' and 'age' are allowed
// const extractedKey2: ExtractEmp = 'name'; // Error!

// 8. Record<K, T> - Creates type with keys K and values T
type RecordEmp = Record<'admin' | 'user' | 'guest', Employee>;
const recordEmployee: RecordEmp = {
  admin: { id: 1, name: "Admin", age: 35 },
  user: { id: 2, name: "User", age: 28 },
  guest: { id: 3, name: "Guest", age: 20 },
};

// 9. ReturnType<T> - Gets return type of function
type ReturnTypeEmp = ReturnType<() => Employee>;
const getEmployee = (): Employee => ({ id: 5, name: "Return Type", age: 30 });
const returnTypeEmployee: ReturnTypeEmp = getEmployee();

// Employee Class for demonstration
class EmployeeClass {
  constructor(
    public id: number,
    public name: string,
    public age: number
  ) {}

  getInfo(): string {
    return `${this.name} (ID: ${this.id}, Age: ${this.age})`;
  }

  updateAge(newAge: number): void {
    this.age = newAge;
  }
}


console.log('=== Chunk 1: Literal Types ===');
console.log('five:', five);
console.log('getFive():', getFive());
console.log('two:', two);

console.log('\n=== Chunk 2: Readonly Types ===');
console.log('Readonly Employee:', someEmployee);
console.log('Employee Keys:', employeeKeys);

console.log('\n=== Chunk 3: Const Assertions ===');
console.log('Const Asserted Object:', temp);
console.log('Type of temp.id:', typeof temp.id);
console.log('Type of temp.name:', typeof temp.name);

console.log('\n=== Chunk 4: Utility Types Examples ===');
console.log('1. Required Employee:', requiredEmployee);
console.log('2. Partial Employee:', partialEmployee);
console.log('3. Picked Employee (id, name only):', pickedEmployee);
console.log('4. Omitted Employee (without age):', omittedEmployee);
console.log('5. NonNullable Employee:', nonNullEmployee);
console.log('6. Excluded Key:', excludedKey);
console.log('7. Extracted Key:', extractedKey);
console.log('8. Record Employee:', recordEmployee);
console.log('9. Return Type Employee:', returnTypeEmployee);

console.log('\n=== Chunk 5: Employee Class ===');
const empInstance = new EmployeeClass(100, "Class Employee", 32);
console.log('Employee Instance:', empInstance.getInfo());
empInstance.updateAge(33);
console.log('After age update:', empInstance.getInfo());


export { 
  two, 
  five, 
  getFive, 
  someEmployee, 
  employeeKeys, 
  temp, 
  EmployeeClass,
  requiredEmployee,
  partialEmployee,
  pickedEmployee,
  omittedEmployee,
  nonNullEmployee,
  excludedKey,
  extractedKey,
  recordEmployee,
  returnTypeEmployee
};