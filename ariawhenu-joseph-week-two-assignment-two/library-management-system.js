
let bookId = 0;

let books = [
    { id: bookId++, title: "The Alchemist", author: "Joseph Ariawhenu", genre: "Fiction", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "Atomic Habits", author: "James Matthew", genre: "Self-Help", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "1984", author: "Amarachi Akie", genre: "Dystopian", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "Clean Code", author: "Fejiri Efe", genre: "Programming", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "The Hobbit", author: "Mr. Max", genre: "Fantasy", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "Rich Dad Poor Dad", author: "Sir Wifi", genre: "Finance", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "The Pragmatic Programmer", author: "Favourite Okwudili", genre: "Programming", available: true, checkedOutBy: null, dueDate: null },
    { id: bookId++, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", available: true, checkedOutBy: null, dueDate: null }
];

function addBook(title, author, genre) {
    if (!title | author | genre) return "Error you must add a book";
    books.push({id: bookId++, title, author, genre, available: true, checkedOutBy: null, dueDate: null });
    return `Book Added ${title}`;
}

function checkoutBook(bookId, borrowerName, daysToReturn) {
  const book = books.find((t) => t.id === bookId);
  if (!book) return "The book is not alvailable now in the Law Library";
  if (!book.available) return "Book is already checked out";

  book.available = false;
  book.checkedOutBy = borrowerName;

  const dueDateToReturn = new Date();
  dueDateToReturn.setDate(dueDateToReturn.getDate() + daysToReturn);
  book.dueDate = dueDateToReturn;

  return `${book.title} checked out by ${borrowerName}`;
}

function returnBook(bookId) {
  const book = books.find(collectedBook => collectedBook.id === bookId);
  if (!book) return "The book is not found in our database";

  book.available = true;
  book.checkedOutBy = null;
  book.dueDate = null;

  return `${book.title} returned successfully`;
}

function searchByAuthor(author) {
    return books.filter((a) => author === a.author);
}

function searchByGenre(genre) {
    return books.filter((g) => genre === g.genre);
}

function generateReport() {
  console.log("********** LIBRARY REPORT **********");

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    console.log(
      book.id + " | " +
      book.title + " | " +
      book.author + " | " +
      book.genre + " | " +
      (book.available ? "Available" : "Checked Out")
    );
    
  } 
  
}


function calculateFine(bookId) {
  const book = books.find(singleBook => singleBook.id === bookId);
  if (!book || book.available) return 0;

  let lateDay = 0;
  let due = new Date(book.dueDate);
  let today = new Date();

  while (due < today) {
    lateDay++;
    due.setDate(due.getDate() + 1);
  }

  return lateDay * 100;
}

addBook('The 12 Laws of Golang', 'Joseph Ariawhenu', 'Programming');

console.log("ALL BOOKS:");
console.log(books);

console.log("CHECKOUT TEST:");
console.log(checkoutBook(2, "Joseph", 7));

console.log("RETURN TEST:");
console.log(returnBook(0));

console.log("SEARCH BY AUTHOR:");
console.log(searchByAuthor("Joseph Ariawhenu"));

console.log("SEARCH BY GENRE:");
console.log(searchByGenre("Programming"));

console.log("FINE TEST:");
console.log(calculateFine(2));

console.log("REPORT:");
generateReport();