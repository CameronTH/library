const addBookButton = document.querySelector("#button");
const form = document.querySelector(".form");
const formAdd = document.querySelector(".form-button");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");
const bookContainer = document.querySelector("#book-container");
const myForm = document.querySelector("#my-form");
const dialog = document.querySelector("#dialog");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.value
  );
  myLibrary.push(newBook);
  bookContainer.replaceChildren();
  myLibrary.forEach((element) => {
    const bookDiv = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const BookRead = document.createElement("p");
    const bookMarkRead = document.createElement("button");
    const bookRemove = document.createElement("button");
    bookDiv.classList.add("book");
    bookMarkRead.classList.add("book-remove");
    bookRemove.classList.add("book-remove");
    bookMarkRead.textContent = "Mark as read";
    bookRemove.textContent = "Remove Book";
    bookTitle.textContent = element.title;
    bookAuthor.textContent = `Author: ${element.author}`;
    bookPages.textContent = `Pages: ${element.pages}`;
    BookRead.textContent = `Read: ${element.read}`;

    bookRemove.addEventListener("click", () => {
      myLibrary.forEach((book) => {
        if (book === element) {
          index = myLibrary.indexOf(book);
          myLibrary.splice(myLibrary.indexOf(book), 1);
          bookContainer.removeChild(bookDiv);
        }
      });
    });

    bookMarkRead.addEventListener("click", () => {
      myLibrary.forEach((book) => {
        if (book === element && book.read === "no") {
          book.read = "yes";
        } else {
          book.read = "no";
        }
        BookRead.textContent = `Read: ${element.read}`;
      });
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(BookRead);
    bookDiv.appendChild(bookMarkRead);
    bookDiv.appendChild(bookRemove);
    bookContainer.append(bookDiv);
  });
}

addBookButton.addEventListener("click", () => {
  dialog.show();
});

formAdd.addEventListener("click", (event) => {
  if (title.value.length != 0 && author.value.length != 0 && pages.value > 0) {
    dialog.close();
    addBookToLibrary();
    event.preventDefault();
    myForm.reset();
  }
});
