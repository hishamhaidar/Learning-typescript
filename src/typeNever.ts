type CEO = 'jeff';
type CTO = 'elon';
type CFO = 'warren';
type DEV = 'alice' | 'bob' | 'charlie';
type Employee = DEV;

type willNeverHappen = string & number;

const neverReturns= () : never => {
  while(true) {}
}

const payAnnualBonus = (employee: CEO | CTO | CFO | Employee, amount: number): string => {
  switch(employee) {
    case 'jeff':
      return `Paid ${amount} bonus to CEO ${employee}`;
    case 'elon':
      return `Paid ${amount} bonus to CTO ${employee}`;
    case 'warren':
      return `Paid ${amount} bonus to CFO ${employee}`;
    case 'alice':
    case 'bob':
    case 'charlie':
      return `Paid ${amount} bonus to Employee ${employee}`;
    default:
      const remainingEmployee: never = employee; // Ensures all cases are handled
      return `Unknown employee type`;
  }
}
