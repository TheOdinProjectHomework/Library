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
let myLibrary2 = [
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        numberOfPages: 423,
        readStatus: "true",
    }, 
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        numberOfPages: 352,
        readStatus: "false",
    }, 
    {
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        numberOfPages: 416,
        readStatus: "true",
    },
];

function Book() {
  // the constructor...
}

function addBookToLibrary(newBook) {
  // do stuff here
    myLibrary2.push(newBook);
    myBooks.innerHTML = "";
    displayBooks();
}

function createCard(title, author, pages, read) {
    let cardContainer = document.createElement('div');
    let cardTitle = document.createElement('h2');
    let cardAuthor = document.createElement("h4");
    let cardPages = document.createElement('p');
    let cardRead = document.createElement('div');
    cardRead.classList.add("read-div");
    cardTitle.textContent = title;
    cardAuthor.textContent = author;
    cardPages.textContent = pages;
    if(read === "true") {
       cardRead.innerText = "Read"; 
    } else {
       cardRead.innerText = "Not Read"; 
    }
    // read === "true" ? cardRead.innerText = "Read" : cardRead.innerText = "Not Read";
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardRead);

    cardContainer.style.border = '1px solid black';
    cardContainer.style.padding = '10px';
    cardContainer.style.margin = '1rem';

    //read btn
    cardRead.addEventListener('click', () => {
        let updateBook = myLibrary2.find((book) => book.title === title);
        console.log(`before:`, updateBook);
        updateBook.readStatus === "true" ? updateBook.readStatus = "false" : updateBook.readStatus = "true";
        console.log(`after:`, updateBook);
        myBooks.innerHTML = "";
        displayBooks();
    });
    
    // delete btn//
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function() {
        console.log(title);
        let updatedLibrary = myLibrary2.filter((book) => book.title !== title);
        myLibrary2 = [...updatedLibrary];
        myBooks.innerHTML = "";
        displayBooks();
    }
    cardContainer.appendChild(deleteBtn);
    return cardContainer;
}

console.log(newBookForm);

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Prevented event");
    console.log(titleInput.value, authorInput.value, pagesInput.value);
    let radioValue = "false";
    for(let radio of readInput){
        if(radio.checked){
            console.log(radio.value);
            radioValue = radio.value;
        }
    }
    // new book
    let newBook = {
        title: titleInput.value,
        author: authorInput.value,
        numberOfPages: pagesInput.value,    
        readStatus: radioValue, 
    }
    addBookToLibrary(newBook);
})

const displayBooks = () => {
    for(let i = 0; i < myLibrary2.length; i++) {
        let { title, author, numberOfPages, readStatus } = myLibrary2[i];
        let card = createCard(title, author, numberOfPages, readStatus);
        myBooks.appendChild(card);
    }
};

displayBooks();