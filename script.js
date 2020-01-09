// globals and event listeners
let cardContainer = document.querySelector('#card-container');
let modal = document.getElementById('input-modal');
let buttons = document.getElementsByClassName('jsBtn');

let formTitle = document.getElementById("title");
let formAuthor = document.getElementById("author");
let formPages = document.getElementById("pages");
let formYear = document.getElementById("year");
let formRead = document.getElementById("read");

addListeners = () => {
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', buttonFunction);
	}
}

// library array containing all the objects
let myLibrary = [
	{
		title: 'The Lord Of The Rings',
		author: 'J.R.R Tolkien',
		pages: 1137,
		year: 1937,
		read: true,
	},
	{
		title: 'A Tale of Two Citites',
		author: 'Charles Dickens',
		pages: 341,
		year: 1859,
		read: false,
	},
];

// constructor and function to add new obj to arr
function Book(title, author, pages, year, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.year = year
	this.read = read
}
function addBookToLibrary(title, author, pages, year, read) {
	let newBook = new Book(title, author, pages, year, read);
	myLibrary.push(newBook)
}

// render function, checks rendered or assigns, adds data-attribute to card
render = () => {
	for (i = 0; i < myLibrary.length; i++) {
		if (myLibrary[i].rendered) {
			continue;
		} else {
			let newCard = document.createElement('div');
			let delButton = document.createElement('button');
			let cardH3 = document.createElement('h3');
			let cardH4 = document.createElement('h4');
			let pages = document.createElement('p');
			let year = document.createElement('p');
			let readButton = document.createElement('button');
			newCard.className = 'book-card';
			newCard.setAttribute('data-array-ref', i);
			delButton.classList = 'del-button jsBtn';
			delButton.innerHTML = '&times;';
			delButton.setAttribute('name', 'delete');
			cardH3.innerText = myLibrary[i].title;
			cardH4.innerText = myLibrary[i].author;
			pages.innerText = 'Pages: ' + myLibrary[i].pages;
			year.innerText = 'Year: ' + myLibrary[i].year;
			if (myLibrary[i].read) {
				readButton.textContent = 'Read';
				readButton.classList = 'read jsBtn';
				readButton.setAttribute('name', 'read');
			} else {
				readButton.textContent = 'Unread';
				readButton.classList = 'unread jsBtn';
				readButton.setAttribute('name', 'unread')
			}
			myLibrary[i].rendered = true;
			newCard.appendChild(delButton);
			newCard.appendChild(cardH3);
			newCard.appendChild(cardH4);
			newCard.appendChild(pages);
			newCard.appendChild(year)
			newCard.appendChild(readButton);
			cardContainer.prepend(newCard);
		}
	}
	addListeners();
}

// buttons switch and button functions
buttonFunction = (event) => {
	switch (event.target.name) {
		case "new-book":
			modal.style.display = 'block';
			break;
		case "cancel":
			modal.style.display = 'none';
			clearValues();
			break;
		case "submit":
			submitBook();
			modal.style.display = 'none';
			break;
		case "read":
			console.log("read test")
			break;
		case "unread":
			console.log("unread test")
			break;
		case "delete":
			let parent = event.target.parentNode;
			deleteBook(parent);
			break;
	}
}

submitBook = () => {
	addBookToLibrary(formTitle.value, formAuthor.value, formPages.value,
			formYear.value, formRead.checked);
	render();
	addListeners();
	clearValues();
}

deleteBook = (parent) => {
	let arrayIndex = parent.getAttribute("data-array-ref");
	myLibrary.splice(arrayIndex, 1);
	parent.remove();
}

// Should these be nested inside other functions or the switch
// Should some of the globals be sitting inside them
// updateDataArr() not required?
clearValues = () => {
	formTitle.value = "";
	formAuthor.value = "";
	formPages.value = "";
	formYear.value = "";
	formRead.checked = false;
}

updateDataAttr = () => {
	let cards = document.getElementsByClassName("book-card");
	console.log(cards);
	let cardsArr = Array.from(cards);
	console.log(cardsArr);
	cardsArr.reverse();                  // because prepend on render //
	for (i = 0; i < cardsArr.length; i++) {
		cardsArr[i].setAttribute('data-array-ref', i)
	}
}

// run
addListeners();
addBookToLibrary('The Bible', 'Those guys et al', 1200, 1611, false)
render();


