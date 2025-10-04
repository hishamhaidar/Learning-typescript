// Employee-related type definitions
export interface Employee {
  id: number;
  name: string;
  age: number;
  [key: string]: string | number; // Allow additional properties
}

// Utility types for Employee
export type EmployeeKeys = keyof Employee;
export type ReadonlyEmployee = Readonly<Employee>;

// More specific employee types
export interface FullTimeEmployee extends Employee {
  salary: number;
  department: string;
}

export interface PartTimeEmployee extends Employee {
  hourlyRate: number;
  hoursPerWeek: number;
}