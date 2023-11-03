const addBookButton = document.querySelector("#button");
const form = document.querySelector(".form");
const formAdd = document.querySelector(".form-button");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");
const bookContainer = document.querySelector("#book-container");

const myLibrary = ["Test", "Test2", "Test3"];

function Book() {}

function addBookToLibrary() {}

addBookButton.addEventListener("click", () => {
  console.log("Pressed");
  form.style.display = "flex";
  const bookDiv = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  bookDiv.classList.add("book");
  bookTitle.textContent = "Testing Append";
  bookAuthor.textContent = "Author: Someone";
  bookPages.textContent = "Pages: 0";
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookContainer.append(bookDiv);
});

formAdd.addEventListener("click", () => {
  console.log(author.value);
  console.log(title.value);
  console.log(pages.value);
  bookContainer.style.display = "none";
});
