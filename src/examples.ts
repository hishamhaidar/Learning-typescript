// Example of different ways to import and use types
import type { Person, Address, PrimaryColor, Employee, Contact } from './types/index.js';

// Direct import from specific type files
import type { ColorPalette, HexColor, RGBColor } from './types/common/color.types.js';

// Creating instances using imported types
const employee: Employee = {
  id: 1,
  name: "John Doe",
  age: 30,
  department: "Engineering"
};

const contact: Contact = {
  name: "Jane Smith",
  age: 28,
  email: "jane@example.com",
  phone: "+1-555-0123"
};

const homeAddress: Address = {
  street: "456 Oak Avenue",
  city: "Springfield",
  zipCode: 62701,
  state: "Illinois",
  country: "USA"
};

const colorPalette: ColorPalette = {
  primary: "blue",
  secondary: "orange",
  accent: "purple"
};

const hexColor: HexColor = "#FF5733";

const rgbColor: RGBColor = {
  red: 255,
  green: 87,
  blue: 51
};

// Display the data
console.log("=== Type Import Examples ===");
console.log("Employee:", JSON.stringify(employee, null, 2));
console.log("Contact:", JSON.stringify(contact, null, 2));
console.log("Address:", JSON.stringify(homeAddress, null, 2));
console.log("Color Palette:", JSON.stringify(colorPalette, null, 2));
console.log("Hex Color:", hexColor);
console.log("RGB Color:", JSON.stringify(rgbColor, null, 2));