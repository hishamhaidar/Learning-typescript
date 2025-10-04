type simpleJob = {
  title: string;
  salary: number;
}
type ComplexJob = simpleJob & { // type intersection
  description: string; 
  isRemote: boolean;
}

interface Job {
  title: string;
  salary: number;
}
interface AdvancedJob extends Job {
  description: string;
  isRemote: boolean;
} 

class JobPosition implements Job {
  title;
  salary;
  constructor(title: string, salary: number) {
    this.title = title;
    this.salary = salary;
  } 
}