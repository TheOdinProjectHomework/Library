console.log("hello world!");

let myBooks = document.getElementById("my-books");

const myLibrary = ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "Frame story"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function createCard(title) {
    let cardContainer = document.createElement('div');
    let cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    cardContainer.appendChild(cardTitle);

    cardContainer.style.border = '1px solid black';
    cardContainer.style.padding = '10px';
    cardContainer.style.margin = '1rem';
    return cardContainer;
}

for(let i = 0; i < myLibrary.length; i++) {
    let card = createCard(myLibrary[i]);
    myBooks.appendChild(card);
}