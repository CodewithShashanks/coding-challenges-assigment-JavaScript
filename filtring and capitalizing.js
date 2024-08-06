function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year > 2010)
        .map(book => ({
            title: book.title,
            author: book.author.toUpperCase(),
            year: book.year
        }));
}

// Example usage:
const books = [
    { title: "Book One", author: "Author One", year: 2008 },
    { title: "Book Two", author: "Author Two", year: 2012 },
    { title: "Book Three", author: "Author Three", year: 2015 },
    { title: "Book Four", author: "Author Four", year: 2005 }
];

const filteredBooks = filterAndCapitalizeBooks(books);
console.log(filteredBooks);
