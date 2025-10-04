enum Position {
  Programmer = "Programmer",
  Manager = "Manager",
  Designer = "Designer",
  Tester = "Tester",
  DevOps = "DevOps"
}

type EmployeWithPosition = {
  name: string;
  position: Position;
};

const payBonus = (employee: EmployeWithPosition, amount: number): string => {
  return `${employee.name} received a bonus of ${amount} as a ${employee.position}.`;
};

export type { EmployeWithPosition };
export { Position, payBonus };