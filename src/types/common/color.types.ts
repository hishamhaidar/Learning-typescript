// Color-related type definitions and utilities
export type PrimaryColor = "red" | "green" | "blue";
export type SecondaryColor = "orange" | "purple" | "yellow";
export type Color = PrimaryColor | SecondaryColor;

// Color utility types
export interface ColorPalette {
  primary: PrimaryColor;
  secondary: SecondaryColor;
  accent?: Color;
}

// Hex color representation
export type HexColor = `#${string}`;

// RGB color representation
export interface RGBColor {
  red: number;
  green: number;
  blue: number;
}