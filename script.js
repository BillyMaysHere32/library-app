let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooksOnPage();
}

function displayBooksOnPage() {
    const books = document.querySelector('.books');
    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        for (let key in myLibrary) {
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', displayTheForm);

function displayTheForm() {
    document.getElementById('add-book-form').style.display = "";
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', intakeFormData);

function intakeFormData() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    if ((title == "") || (author == "") || (pages == "") || (read == "")) {
        return;
    }
    addBookToLibrary(title, author, pages, read);
    document.getElementById('add-book').reset();
}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetForm);

function resetForm() {
    document.getElementById('add-book').reset();
}

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
// console.log(myLibrary);





