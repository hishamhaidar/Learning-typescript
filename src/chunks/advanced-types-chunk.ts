// Advanced Utility Types Chunk
console.log('=== CHUNK: Advanced TypeScript Utility Types ===\n');

// === EXCLUDE<T, U> ===
console.log('1. Exclude<T, U> - Remove types from union');
type AllKeys = 'id' | 'name' | 'age' | 'salary' | 'department';
type ExcludedKeys = Exclude<AllKeys, 'salary' | 'department'>;
const validKey: ExcludedKeys = 'name'; // Only 'id', 'name', 'age' allowed
console.log('Excluded Keys (removed salary, department):', validKey);
console.log('');

// === EXTRACT<T, U> ===
console.log('2. Extract<T, U> - Extract matching types from union');
type ExtractedKeys = Extract<AllKeys, 'id' | 'salary'>;
const extractedKey: ExtractedKeys = 'id'; // Only 'id' and 'salary' allowed
console.log('Extracted Keys (only id, salary):', extractedKey);
console.log('');

// === NONNULLABLE<T> ===
console.log('3. NonNullable<T> - Remove null and undefined');
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
const definiteValue: DefiniteString = "Not null!";
console.log('NonNullable value:', definiteValue);
console.log('');

// === RETURNTYPE<T> ===
console.log('4. ReturnType<T> - Get function return type');
const createUser = () => ({ id: 1, name: "User", active: true });
type UserType = ReturnType<typeof createUser>;
const user: UserType = { id: 2, name: "Jane", active: false };
console.log('ReturnType User:', user);
console.log('');

// === PARAMETERS<T> ===
console.log('5. Parameters<T> - Get function parameter types');
const updateEmployee = (id: number, name: string, age?: number) => {};
type UpdateParams = Parameters<typeof updateEmployee>;
const params: UpdateParams = [1, "John", 30];
console.log('Parameters tuple:', params);
console.log('');

export { validKey, extractedKey, definiteValue, user, params };