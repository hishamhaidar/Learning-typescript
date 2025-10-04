// Person-related type definitions
export interface Person {
  name: string;
  age: number;
}

// You can extend this with more person-related types
export interface Employee extends Person {
  employeeId: string;
  department: string;
}

export interface Contact extends Person {
  email: string;
  phone?: string;
}