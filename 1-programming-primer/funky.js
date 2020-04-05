var favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  };
}

function printFavoriteBooks() {
  for (let book of favoriteBooks) {
    console.log(`Favorite book: ${book}`)
  }
}

addFavoriteBook("The Great Gatsby");
addFavoriteBook("Great Expectations");
addFavoriteBook("A Song of Ice and Fire");
printFavoriteBooks();