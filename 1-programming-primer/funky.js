var favoriteBooks = [];

function addFavoriteBook(bookName) {
  if (bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  } else {
    console.log("Book not added to array.")
  };
}

addFavoriteBook("The Great Gatsby");
console.log(favoriteBooks);