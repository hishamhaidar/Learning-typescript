type withItems<T,G> = {
  item: T;
  items: G[];

};

const withNumberItems: withItems<number, number> = {
  item: 42,
  items: [1, 2, 3, 4, 5]
};
const withStringItems: withItems<Number, string> = {
  item: 4,
  items: ["TypeScript", "Generics", "is", "powerful"]
};
const withBooleanItems: withItems<number, boolean> = {
  item: 4,
  items: [true, false, true, false]
};

const names : string[] =[];
const names2 : Array<string> =[];

async function fetchNames<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

class MemoryDataStore<T> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.data.find(predicate);
  }
  remove(predicate: (item: T) => boolean): void {
    this.data = this.data.filter(item => !predicate(item));
  }
  clear(): void {
    this.data = [];
  } 
  size(): number {
    return this.data.length;
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

const namesStore = new MemoryDataStore<string>();
namesStore.add("Alice");
namesStore.add("Bob");
namesStore.add("Charlie");