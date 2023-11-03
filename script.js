const addBookButton = document.querySelector("#button");
const form = document.querySelector(".form");
const formAdd = document.querySelector(".form-button");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const bookContainer = document.querySelector("#book-container");
const myForm = document.querySelector("#my-form");

const myLibrary = ["Test", "Test2", "Test3"];

function Book() {}

function addBookToLibrary() {}

addBookButton.addEventListener("click", () => {
  console.log("Pressed");
  form.style.display = "flex";
});

formAdd.addEventListener("click", (event) => {
  const bookDiv = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  bookDiv.classList.add("book");
  bookTitle.textContent = title.value;
  bookAuthor.textContent = `Author: ${author.value}`;
  bookPages.textContent = `Pages: ${pages.value}`;
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);

  if (title.value.length != 0 || author.value.length != 0 || pages.value != 0) {
    bookContainer.append(bookDiv);
  }
  event.preventDefault();
});
