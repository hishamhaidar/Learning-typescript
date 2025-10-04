// Chunk 2: Readonly and Utility Types
import type { Employee } from '../types/index.js';

console.log('=== Chunk 2: Readonly Types ===');

const someEmployee: Readonly<Employee> = {
  id: 1,
  name: "Alice",
  age: 30
};

// someEmployee.id = 2; // Error: readonly
// someEmployee.name = "Bob"; // Error: readonly  
// someEmployee.age = 31; // Error: readonly

console.log('Readonly Employee:', someEmployee);

const employeeKeys: Array<keyof Employee> = ["id", "name", "age"];
console.log('Employee Keys:', employeeKeys);

// employeeKeys.push("salary"); // Error if not part of Employee type
// employeeKeys.push("Id"); // Error: case sensitive
// employeeKeys.push("Name"); // Error: case sensitive

export { someEmployee, employeeKeys };