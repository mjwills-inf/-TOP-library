let cardContainer = document.querySelector('#card-container');


let myLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R Tolkien',
		pages: 310,
		read: true,
	}, 
	{
		title: 'The Lord Of The Rings',
		author: 'J.R.R Tolkien',
		pages: 1137,
		read: true,
	}, 
	{
		title: 'A Tale of Two Citites',
		author: 'Charles Dickens',
		pages: 341,
		read: false,
	},
];

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read	
}

function addBookToLibrary(title, author, pages, read) {
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook)
	render()
}


render = () => {

	let renderedCards = document.querySelectorAll('.book-card');
	
	
	for (i=0; i<myLibrary.length; i++) {


		
		let newCard = document.createElement('div');
		
		let delButton = document.createElement('button');
		let cardH3 = document.createElement('h3');
		let cardH4 = document.createElement('h4');
		let pages = document.createElement('p');
		let readButton = document.createElement('button');

		newCard.className = 'book-card';
		
		delButton.className = 'del-button';
		cardH3.innerText = myLibrary[i].title;
		cardH4.innerText = 	myLibrary[i].author;
		pages.innerText = 'Pages: ' + myLibrary[i].pages;
		
		if (myLibrary[i].read) {
			readButton.textContent = 'Read';
			readButton.className = 'read';
		} else {
			readButton.textContent = 'Not Read';
			readButton.className = 'not-read';
		}
	
		newCard.appendChild(delButton);
		newCard.appendChild(cardH3);
		newCard.appendChild(cardH4);
		newCard.appendChild(pages);
		newCard.appendChild(readButton);

		cardContainer.appendChild(newCard);

	}

	
}



addBookToLibrary('The Bible', 'Those guys et al', 1200, false )


