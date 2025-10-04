// Run individual chunks - Utility Types Demo
import type { Employee } from '../types/index.js';

console.log('=== CHUNK: TypeScript Utility Types Examples ===\n');

// === REQUIRED<T> ===
console.log('1. Required<T> - Makes all optional properties required');
type RequiredEmployee = Required<Employee>;
const reqEmp: RequiredEmployee = {
  id: 1,
  name: "Required John",
  age: 30
};
console.log('Required Employee:', reqEmp);
console.log('');

// === PARTIAL<T> ===
console.log('2. Partial<T> - Makes all properties optional');
type PartialEmployee = Partial<Employee>;
const partEmp: PartialEmployee = {
  name: "Partial Jane" // id and age are optional
};
console.log('Partial Employee:', partEmp);
console.log('');

// === PICK<T, K> ===
console.log('3. Pick<T, K> - Select specific properties');
type EmployeeNameId = Pick<Employee, 'id' | 'name'>;
const nameIdEmp: EmployeeNameId = {
  id: 2,
  name: "Picked Bob"
  // age not allowed
};
console.log('Picked Employee (id, name only):', nameIdEmp);
console.log('');

// === OMIT<T, K> ===
console.log('4. Omit<T, K> - Exclude specific properties');
type EmployeeWithoutAge = Omit<Employee, 'age'>;
const noAgeEmp: EmployeeWithoutAge = {
  id: 3,
  name: "Omitted Carol",
  department: "HR" // index signature still works
};
console.log('Omitted Employee (no age):', noAgeEmp);
console.log('');

// === RECORD<K, T> ===
console.log('5. Record<K, T> - Create object type with specific keys');
type UserRoles = Record<'admin' | 'user' | 'guest', Employee>;
const roles: UserRoles = {
  admin: { id: 10, name: "Admin User", age: 35 },
  user: { id: 11, name: "Regular User", age: 28 },
  guest: { id: 12, name: "Guest User", age: 20 }
};
console.log('Record of User Roles:', roles);
console.log('');

export { reqEmp, partEmp, nameIdEmp, noAgeEmp, roles };