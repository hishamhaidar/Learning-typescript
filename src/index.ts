import { payBonus, Position, type EmployeWithPosition } from "./enums.js";
import { arrayFuncExampleAsNumber, greet, optionalExample, returnAnything, unKnownFunc } from "./functions.js";

console.log("Hello, TypeScript!");
console.log(greet("World"));
console.log("Random Value:", returnAnything(42));
console.log("Random String:", returnAnything("Hello"));
console.log("Random Object:", returnAnything({ key: "value" }));
console.log(optionalExample());
console.log(optionalExample("Custom Value"));
console.log(arrayFuncExampleAsNumber([1, 2, 3, 4, 5]));

console.log("UNKNOWN:",typeof unKnownFunc({ random: "value" }));

// Position
const employee: EmployeWithPosition = {
  name: "Jane Doe",
  position: "HR" as Position// bypass enum restriction for demonstration

};
const employee2: EmployeWithPosition = {
  name: "John Smith",
  position: Position.Manager // valid enum usage
};
console.log("Employee2 Position:", employee2);
console.log("Employee Position:", employee);
console.log(payBonus(employee, 1000), Position);