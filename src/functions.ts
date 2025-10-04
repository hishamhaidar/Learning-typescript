const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

const returnAnything = (anything: any): any => {
  return  anything;
}

const optionalExample = (value= 'Hiii') => {
  return `Value is: ${value}` 
};
const arrayFuncExampleAsNumber = (arr: number[]): number[] => {
  return arr.map(num => num * 2);
};
const unKnownFunc = (value: unknown): unknown => {
  return value;
}


export { greet, returnAnything, optionalExample, arrayFuncExampleAsNumber, unKnownFunc };
