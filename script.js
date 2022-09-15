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
    
    const removeCards = document.querySelectorAll('.card');
    for (let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    }

    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);

        const removeBookButton = document.createElement('button');
        removeBookButton.classList.add('remove-book-button');
        removeBookButton.textContent = 'Remove Book';
        card.appendChild(removeBookButton);
        removeBookButton.dataset.linkedArray = index;
        index++;
        removeBookButton.addEventListener('click', removeBook);
        function removeBook() {
            let bookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayBooksOnPage();
        }

        for (let key in myLibrarys) {
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrarys[key]}`);
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
        alert('Please fill out all fields');
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





