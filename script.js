const addBookButton = document.querySelector("#button");
const form = document.querySelector(".form");
const formAdd = document.querySelector(".form-button");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const bookContainer = document.querySelector("#book-container");
const myForm = document.querySelector("#my-form");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);
  bookContainer.replaceChildren();
  myLibrary.forEach((element) => {
    const bookDiv = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRemove = document.createElement("button");
    bookDiv.classList.add("book");
    bookRemove.classList.add("book-remove");
    bookRemove.textContent = "Remove Book";
    bookTitle.textContent = element.title;
    bookAuthor.textContent = `Author: ${element.author}`;
    bookPages.textContent = `Pages: ${element.pages}`;

    bookRemove.addEventListener("click", () => {
      myLibrary.forEach((book) => {
        if (book === element) {
          index = myLibrary.indexOf(book);
          myLibrary.splice(myLibrary.indexOf(book), 1);
          bookContainer.removeChild(bookDiv);
          console.log(bookDiv);
          console.log(myLibrary);
        }
      });
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRemove);
    bookContainer.append(bookDiv);
  });
}

addBookButton.addEventListener("click", () => {
  console.log("Pressed");
  myForm.style.display = "flex";
});

formAdd.addEventListener("click", (event) => {
  if (title.value.length != 0 && author.value.length != 0 && pages.value != 0) {
    addBookToLibrary();
    event.preventDefault();
    myForm.style.display = "none";
    myForm.reset();
    console.log(myLibrary);
  }
});
