// Address-related type definitions
export interface Address {
  street: string;
  city: string;
  zipCode: number;
  state?: string;
  country?: string;
}

export interface FullAddress extends Address {
  state: string;
  country: string;
}