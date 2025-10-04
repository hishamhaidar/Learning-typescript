import type { Person, Address, PrimaryColor } from './types/index.js';

let firstName: string = "John";
let age: number = 30;
let isEmployed: boolean = true;
let hobbies: string[] = ["reading", "traveling", "swimming"];

let person: Person = { name: "Alice", age: 25 };
let address: Address = {
  street: "123 Main St",
  city: "Anytown",
  zipCode: 12345,
};
let primaryColor: PrimaryColor = "red";

console.log(`Name: ${firstName}`);
console.log(`Person: ${JSON.stringify(person)}`);
console.log(`Age: ${age}`);
console.log(`Employed: ${isEmployed}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Address: ${address.street}, ${address.city}, ${address.zipCode}`);
console.log(`Primary Color: ${primaryColor}`);