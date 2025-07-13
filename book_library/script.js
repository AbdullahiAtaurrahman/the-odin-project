const bookList = document.querySelector('.book-list');
const addBookButton = document.querySelector('.add-book-button');
const bookForm = document.querySelector('.add-book-form');
const add = document.querySelector('.add');
const cancel = document.querySelector('.cancel');

const myLibrary = [];


function Book(id, title,author, pages, read) {
  // the constructor...

  this.id = id;
  this.title = title; 
  this.author = author;
  this.pages = pages;   
  this.read = read 
}

function addBookToLibrary(id, title,author, pages, read) {
  // take params, create a book then store it in the array

  const newBook = new Book(id, title,author, pages, read);
  myLibrary.push(newBook);
  
}

addBookToLibrary(crypto.randomUUID(), 'The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary(crypto.randomUUID(), 'To Kill a Mockingbird', 'Harper Lee', 281, false);
addBookToLibrary(crypto.randomUUID(), '1984', 'George Orwell', 328, false);
// Example usage: 


// console.log(myLibrary);

function displayBooks() {
  bookList.innerHTML = ''; // Clear the list before displaying
  myLibrary.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.classList.add('book-item');
    bookItem.textContent = `${book.title} by ${book.author} - ${book.pages} pages - Read: ${book.read ? 'Yes' : 'No'}`;
    bookList.appendChild(bookItem);
  });
  
}

displayBooks();

addBookButton.addEventListener('click', () => {
  // Toggle the visibility of the form
  bookForm.style.display = 'block';
} 
)

add.addEventListener('click', () => {
  
}

cancel.addEventListener('click', () => {
  // Hide the form when cancel is clicked
  bookForm.style.display = 'none';
})