const addBookButton = document.querySelector('.add-book-button');
const addBook = document.querySelector('.add');
const title = document.querySelector('#title');
const read = document.querySelector('#read');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');


const bookList = document.querySelector('.booklist');

{/* <p class="book-item"><span>Enjoy your life by Al-areefy with 452 pages and not read </span> <i */ }
// class="fa fa-times" aria-hidden="true"></i> </p>

const myLibrary = [

];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

const book1 = new Book("Enjoy your life", "Al-Areefy", "423", "read");
const book2 = new Book("To kill a mocking bird", "Harper Lee", "123", "read");
const book3 = new Book("Lord of the rings", "Tolkien", "623", "read");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function saveData() {
    let tv = title.value;
    let rv = read.value;
    let av = author.value;
    let pv = pages.value;

    const newBook = new Book(tv, av, pv, rv);
    myLibrary.push(newBook);
    console.log(newBook);

}

console.log(myLibrary);

myLibrary.map((book) => {

    let bookHtml = `<p class="book-item"><span>${book.title} by ${book.author} with ${book.pages} pages and ${book.read} </span> <i 
    class="fa fa-times" aria-hidden="true"></i> </p>`;

    bookList.innerHTML += bookHtml;

})

function addBookToLibrary() {

}