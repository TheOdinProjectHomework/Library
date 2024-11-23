console.log("hello world!");

let myBooks = document.getElementById("my-books");

// display form button
let displayForm = document.getElementById("newBookBtn");
let show = false;


displayForm.addEventListener("click", () => {
    show = !show;
    let formContainer = document.getElementById("formContainer");
    if(show) {
        formContainer.classList.remove("hiddenForm"); 
    } else {
        formContainer.classList.add("hiddenForm");
    }
})
const showForm = () => {
    show = !show;
}

// form
let newBookForm = document.getElementById("addBookForm");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.querySelectorAll('input[name="readStatus"]');

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

// for(let i = 0; i < myLibrary.length; i++) {
//     let card = createCard(myLibrary[i]);
//     myBooks.appendChild(card);
// }

console.log(newBookForm);

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Prevented event");
    console.log(titleInput.value, authorInput.value, pagesInput.value);
    for(let radio of readInput){
        if(radio.checked){
            console.log(radio.value);
        }
    }
    // new book
    myLibrary.push(titleInput.value);
    myBooks.innerHTML = "";
    displayBooks();
})

const displayBooks = () => {
    for(let i = 0; i < myLibrary.length; i++) {
        let card = createCard(myLibrary[i]);
        myBooks.appendChild(card);
    }
};

displayBooks();