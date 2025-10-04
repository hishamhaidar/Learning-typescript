// Chunk 1: Literal Types and Constants

console.log('=== Chunk 1: Literal Types ===');

let two = 2;
const five = 5;

const getFive = (): 5 => five;
// const getTwo = (): 2 => two; // Error: can't guarantee return type

console.log('five:', five);
console.log('getFive():', getFive());
console.log('two:', two);

export { two, five, getFive };