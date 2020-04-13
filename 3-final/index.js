"use strict";
class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
  }
  
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks() {
  fakeAjax(BOOK_API, (bookNames) => {
    for (let bookName of bookNames) {
      shelf.addFavoriteBook(bookName);
    }
    shelf.printFavoriteBooks();
  })
}

var BOOK_API = "https://some.url/api";
var shelf = new Bookshelf();
loadBooks();

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}