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
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks() {
  fakeAjax(BOOK_API, (bookNames) => { // invoked whenever cb is called, cb passes it the array of book names.
    for (let bookName of bookNames) {
      shelf.addFavoriteBook(bookName);
    }
    shelf.printFavoriteBooks();
  })
}

var BOOK_API = "https://some.url/api";
var shelf = new Bookshelf();
loadBooks();

function fakeAjax(url,cb) { // cb here = callback, which is a function we invoke.
	setTimeout(function fakeLoadingDelay(){
		cb([ // function is called with an array of book names.
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

// Okay, fakeAjax is a super old way of doing what we now using promises and async/await for.
// Basically, whenever the cb parameter is called, it returns the results of the callback cb function in the fakeAjax definition.
// Thus, bookNames in the loadBooks function is = to the cb array.