
let myLibrary = [];

const options = {
    'Yes': true,
    'No': false
};

let bookReadStatus = false;

function Book (title, author, numberOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

function displayBook() {
    bookContainer.innerHTML = '';

	myLibrary.forEach((book) => {
		const bookBox = document.createElement('div');
		bookBox.classList.add('bookBox');
    
		const bookTitle = document.createElement('h2');
		bookTitle.classList.add('bookTitle');
        bookTitle.style.margin = '0em';
		bookTitle.innerText = book.title;

		const bookAuthor = document.createElement('p');
		bookAuthor.classList.add('bookAuthor');
        bookAuthor.style.margin = '0em';
		bookAuthor.innerText = `By ${book.author}`;

		const bookPages = document.createElement('p');
		bookPages.classList.add('bookPages');
        bookPages.style.margin = '0em';
		bookPages.innerText = `${book.numberOfPages} pages`;

		// const bookReadStatus = document.createElement('p');
		// bookReadStatus.classList.add('bookReadStatus');
        // bookReadStatus.style.margin = '0em';
        // bookReadStatus.innerText = `Read: ${book.isRead}`;
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');

        const removeBook = document.createElement('button');
        removeBook.innerHTML = "<img src = \"./images/delete-icon.png\" height=\"20px\" width=\"20px\" alt=\"delete-icon-image\">";
        removeBook.classList.add('removeBook');
        removeBook.setAttribute('id', `${book.title}`);
        removeBook.style.border = '1px solid blue';
        removeBook.style.boxShadow = '0 0 10px';
        removeBook.style.backgroundColor = 'rgb(234, 196, 168)';
        removeBook.style.margin = '0px';
        removeBook.style.padding = '0px';

        const editBook = document.createElement('button');
        editBook.innerHTML = "<img src = \"./images/edit-icon.png\" height=\"20px\" width=\"20px\" alt=\"edit-icon-image\">";
        editBook.classList.add('editBook');
        editBook.setAttribute('id', `${editBook.title}`);
        editBook.style.border = 'none';
        editBook.style.backgroundColor = 'rgb(234, 196, 168)';
        editBook.style.margin = '0px';
        editBook.style.padding = '0px';
        editBook.style.border = '1px solid blue';
        editBook.style.boxShadow = '0 0 10px';

        const readIcon = document.createElement('p');
        readIcon.classList.add('readIcon');
        readIcon.innerHTML = "<img src = \"./images/tick-icon.png\" height=\"20px\" width=\"20px\" alt=\"tick-icon-image\">";

		bookBox.appendChild(bookTitle);
		bookBox.appendChild(bookAuthor);
		bookBox.appendChild(bookPages);
        buttonContainer.appendChild(removeBook);
        buttonContainer.appendChild(editBook);
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-around';
        bookBox.appendChild(buttonContainer);
        bookBox.appendChild(readIcon);
        
        bookBox.style.border = '1px solid brown';
        bookBox.style.boxShadow = '0 0 10px';
        bookBox.style.backgroundColor = 'rgb(234, 196, 168)';
        bookBox.style.display = 'flex';
        bookBox.style.flexDirection = 'column';
        bookBox.style.justifyContent = 'space-evenly';
        bookBox.style.flexWrap = 'wrap';
        bookBox.style.margin = '10px';
        bookBox.style.padding = '20px';
        bookBox.style.width = '500%';
        bookBox.style.height = '100%';

        removeBook.addEventListener('click', (e) => {
            bookBox.innerHTML = '';
            bookBox.style = '';
            myLibrary = myLibrary.filter((book) => book.title !== e.target.id);
        });

		bookContainer.appendChild(bookBox);
    });

    return container.appendChild(bookContainer);
}

const addNewBook = () => {

    const lineBreak = document.createElement('br');

    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'submit.php');

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('placeholder', 'Title');

    const author = document.createElement('input');
    author.setAttribute('type', 'text');
    author.setAttribute('id', 'author');
    author.setAttribute('placeholder', 'Author');

    const pageCount = document.createElement('input');
    pageCount.setAttribute('type', 'number');
    pageCount.setAttribute('id', 'numberOfPages');
    pageCount.setAttribute('placeholder', 'Number_Of_Pages');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'formSubmit');
    submit.setAttribute('value', 'Submit');

    form.appendChild(title);
    form.appendChild(lineBreak.cloneNode());

    form.appendChild(author);
    form.appendChild(lineBreak.cloneNode());

    form.appendChild(pageCount);
    form.appendChild(lineBreak.cloneNode());

    for(let key in options) {
        let label = document.createElement('label');
        label.classList.add('label');
        label.style.fontSize = '80%';
        label.innerText = key;

        let input = document.createElement('input');
        input.type = 'radio';
        input.value = options[key];
        input.name = 'status';
        input.addEventListener('change', (e) => {
            bookReadStatus = e.target.value;
            Object.keys(options).forEach(key => {
                options[key] = false;
            });
                options[key] = true;
            });
        label.appendChild(input);
        form.appendChild(label);
    }
    form.appendChild(lineBreak.cloneNode());

    form.appendChild(submit);
    form.appendChild(lineBreak.cloneNode());
    form.style.padding = '40px';
    form.style.backgroundColor = 'lightgrey';
    form.style.borderRadius = '20px';
    form.style.border = '2px solid grey';
    form.style.boxShadow = '0 0 10px';
    formDisplay.appendChild(form);

    const formSubmit = document.getElementById('formSubmit');
    return formSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('title').value;
        const bookAuthor = document.getElementById('author').value;
        const pageNumber = document.getElementById('numberOfPages').value;

        const new_book = new Book(bookTitle, bookAuthor, pageNumber, bookReadStatus);

        addBookToLibrary(new_book);

        form.innerHTML = '';
        form.style = '';

        displayBook();
    });
}

const bookSection = document.getElementById('bookSection');

const booksDisplay = document.getElementById('booksDisplay');

const newBook = document.getElementById('newBook');
newBook.addEventListener('click', addNewBook);

const formDisplay = document.getElementById('formDisplay');

const container = document.getElementById('container');
const bookContainer = document.getElementById('bookContainer');