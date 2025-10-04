// Chunk 3: Const Assertions
console.log('=== Chunk 3: Const Assertions ===');

const temp = {
  id: 1,
  name: "Alice",
  age: 30
} as const;

// temp.id = 2; // Error: readonly due to const assertion
// temp.name = "Bob"; // Error: readonly due to const assertion

console.log('Const Asserted Object:', temp);
console.log('Type of temp.id:', typeof temp.id);
console.log('Type of temp.name:', typeof temp.name);

// Without const assertion (for comparison)
const temp2 = {
  id: 1,
  name: "Alice", 
  age: 30
};

// temp2.id = 2; // This would work without const assertion
console.log('Regular Object:', temp2);

export { temp, temp2 };