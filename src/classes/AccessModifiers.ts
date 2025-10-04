class Library {
    private books: string[] = [];

    public addBook(book: string): void {
        this.books.push(book);
    }

    public listBooks(): string[] {
        return this.books;
    }
}

const library = new Library();
// library.books = ["Initial Book"]; Error: Property 'books' is private and only accessible within class 'Library'.
library.addBook("The Great Gatsby");
library.addBook("1984");
console.log(library.listBooks());