class Project {
  name: string;
  description: string;
  tasks: string[];

  constructor(name: string, description: string, tasks ?: string[] ) {
    this.name = name;
    this.description = description;
    this.tasks = tasks || [];
}
  addTask(task: string): void {
    this.tasks.push(task);
  }
  listTasks(): string[] {
    return this.tasks;
  }
}

const coolProject = new Project("TypeScript Learning", "A project to learn TypeScript basics");
coolProject.addTask("Learn types");
coolProject.addTask("Understand interfaces");
console.log(`Project: ${coolProject.name}`);
console.log(`Description: ${coolProject.description}`);
console.log(`Tasks: ${coolProject.listTasks().join(", ")}`);

const badProject = new Project("Bad Project", "This project has no tasks");
console.log(`Project: ${badProject.name}`);
console.log(`Description: ${badProject.description}`);
console.log(`Tasks: ${badProject.listTasks().join(", ")}`);