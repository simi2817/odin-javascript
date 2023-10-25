
let myLibrary = [];

const options = {
    'Yes': true,
    'No': false
};

let bookReadStatus = false;

class Book  {
    constructor(title, author, numberOfPages, isRead) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
    }

    addBookToLibrary() {
        return myLibrary.push({title: this.title, author : this.author, numberOfPages: this.numberOfPages, isRead: this.isRead});
    }

    displayBook() {
    bookContainer.innerHTML = '';
	    myLibrary.forEach((book) => {
		const bookBox = document.createElement('div');
		bookBox.classList.add('bookBox');
    
		const bookTitle = document.createElement('h2');
		bookTitle.classList.add('bookTitle');
		bookTitle.innerText = book.title;

		const bookAuthor = document.createElement('p');
		bookAuthor.classList.add('bookAuthor');
		bookAuthor.innerText = `By ${book.author}`;

		const bookPages = document.createElement('p');
		bookPages.classList.add('bookPages');
		bookPages.innerText = `${book.numberOfPages} pages`;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonContainer');

        const removeBook = document.createElement('button');
        removeBook.innerHTML = 'X';
        removeBook.classList.add('removeBook');
        removeBook.setAttribute('id', `${book.title}`);
        
        removeBook.addEventListener('click', (e) => {
            bookContainer.removeChild(bookBox);
            myLibrary = myLibrary.filter((book) => book.title !== e.target.id);
        });

        bookBox.appendChild(removeBook);
        bookBox.appendChild(lineBreak.cloneNode());
		bookBox.appendChild(bookTitle);
        bookBox.appendChild(lineBreak.cloneNode());
		bookBox.appendChild(bookAuthor);
        bookBox.appendChild(lineBreak.cloneNode());
		bookBox.appendChild(bookPages);   
        bookBox.appendChild(lineBreak.cloneNode()); 
        const readIcon = document.createElement('p');
        readIcon.classList.add('readIcon');
        if(book.isRead === 'true') {
            readIcon.innerHTML = `<img src = \"./images/read-icon.png\" height=\"40px\" width=\"40px\" alt=\"read-icon-image\">`; 
        }
        else {
            readIcon.innerHTML = `<img src = \"./images/not-read-icon.jpeg\" height=\"40px\" width=\"40px\" alt=\"not-read-icon-image\">`; 
        }
        readIcon.addEventListener('click', () => {
            book.isRead = !book.isRead;
        });
        bookBox.appendChild(readIcon); 
        bookContainer.appendChild(bookBox);
    });

        return container.appendChild(bookContainer);
    }
}

const addNewBook = () => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.style.padding = '40px';
    form.style.backgroundColor = 'lightgrey';
    form.style.borderRadius = '20px';
    form.style.border = '2px solid grey';
    form.style.boxShadow = '0 0 10px';
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
            });
        label.appendChild(input);
        form.appendChild(label);
    }
    form.appendChild(lineBreak.cloneNode());
    form.appendChild(submit);
    form.appendChild(lineBreak.cloneNode());
    formDisplay.appendChild(form);

    const formSubmit = document.getElementById('formSubmit');
    return formSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        const bookTitle = document.getElementById('title').value;
        const bookAuthor = document.getElementById('author').value;
        const pageNumber = document.getElementById('numberOfPages').value;

        const new_book = new Book(bookTitle, bookAuthor, pageNumber, bookReadStatus);
        new_book.addBookToLibrary();
        form.style = '';
        form.innerHTML = '';  
        new_book.displayBook();
        });
    }

    const bookSection = document.getElementById('bookSection');

    const booksDisplay = document.getElementById('booksDisplay');

    const formDisplay = document.getElementById('formDisplay');

    const newBook = document.getElementById('newBook');
    newBook.addEventListener('click', addNewBook);

    const container = document.getElementById('container');
    const bookContainer = document.getElementById('bookContainer');

    const lineBreak = document.createElement('br');