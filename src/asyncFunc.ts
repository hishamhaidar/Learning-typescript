console.log('=== Async Function Type Example ===');
setTimeout(() => {
  console.log('Async operation completed after 1 second');
}, 1000);
console.log('This runs immediately, before the async operation completes.');


const getEmployeeData = async (): Promise<{ id: number; name: string; age: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe", age: 30 });
    }, 1000);
  });
};
let employeeData = await getEmployeeData();
console.log('Employee Data:', employeeData);

export {};