// const myLibrary = [];

// function Book(id, title, author, pages, read) {
//   // the constructor...

//   this.id = id;
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read
// }

// function addBookToLibrary(id, title, author, pages, read) {
//   // take params, create a book then store it in the array

//   const newBook = new Book(id, title, author, pages, read);
//   myLibrary.push(newBook);

// }

// addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J.R.R. Tolkien', 310, true);
// addBookToLibrary(crypto.randomUUID(), 'To Kill a Mockingbird', 'Harper Lee', 281, false);
// addBookToLibrary(crypto.randomUUID(), '1984', 'George Orwell', 328, false);
// // Example usage: 


// // console.log(myLibrary);

// function displayBooks() {
//   bookList.innerHTML = ''; // Clear the list before displaying
//   myLibrary.forEach((book) => {
//     const bookItem = document.createElement('li');
//     bookItem.classList.add('book-item');
//     bookItem.textContent = `${book.title} by ${book.author} - ${book.pages} pages - Read: ${book.read ? 'Yes' : 'No'}`;
//     bookList.appendChild(bookItem);
//   });

// }

// displayBooks();

// addBookButton.addEventListener('click', () => {
//   // Toggle the visibility of the form
//   bookForm.style.display = 'block';

// }
// )

// add.addEventListener('click', () => {

//   addBookToLibrary(id, title, author, pages, read)

//   myLibrary.push()

// })

// cancel.addEventListener('click', () => {
//   // Hide the form when cancel is clicked
//   bookForm.style.display = 'none';
// })

// function Player(name, marker) {
//   //to prevent calling constructor error
//   if (!new.target) {
//     throw Error("You must use 'new' for constructors")
//   };

//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     return this.name
//   };

// };


// const player1 = new Player('steve', 'X');
// const player2 = new Player('job', 'O');

// player1.sayName()

// Use the above as guide to write a book library.


const bookList = document.querySelector('.book-list');
const addBookButton = document.querySelector('.add-book-button');
const bookForm = document.querySelector('.add-book-form');
const add = document.querySelector('.add');
const cancel = document.querySelector('.cancel');

const library = [];

function Book(id, title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use 'new' for constructors")
  };

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read} yet`;
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');

console.log(theHobbit.info());

function addBookToLibrary(title, author, pages, read) {

  const newBook = new Book(title, author, pages, read)

}




