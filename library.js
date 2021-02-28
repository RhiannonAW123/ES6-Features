class Library{
  function (books = []) {
  this.books = books;
  }


Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

printInventory() {
  this.books.forEach(({ author, title }) => {
    console.log(`${title} by ${author}`);
  });
}
};


export default Library;
