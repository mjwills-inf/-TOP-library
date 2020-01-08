let cardContainer = document.querySelector('#card-container');


let myLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R Tolkien',
		pages: 310,
		year: 1937,
		read: true,
	}, 
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
	render()
}


render = () => {

	// something to stop repeating entire array rendered again?
	
	for (i=0; i<myLibrary.length; i++) {

	
		
		let newCard = document.createElement('div');
		
		let delButton = document.createElement('button');
		let cardH3 = document.createElement('h3');
		let cardH4 = document.createElement('h4');
		let pages = document.createElement('p');
		let year = document.createElement('p');
		let readButton = document.createElement('button');

		newCard.className = 'book-card';
		
		delButton.className = 'del-button';
		cardH3.innerText = myLibrary[i].title;
		cardH4.innerText = 	myLibrary[i].author;
		pages.innerText = 'Pages: ' + myLibrary[i].pages;
		year.innerText = 'Year: ' + myLibrary[i].year;
		delButton.innerHTML = '&times;';
		
		if (myLibrary[i].read) {
			readButton.textContent = 'Read';
			readButton.className = 'read';
		} else {
			readButton.textContent = 'Unread';
			readButton.className = 'unread';
		}
	
		newCard.appendChild(delButton);
		newCard.appendChild(cardH3);
		newCard.appendChild(cardH4);
		newCard.appendChild(pages);
		newCard.appendChild(year)
		newCard.appendChild(readButton);

		cardContainer.prepend(newCard);

	}

}
addBookToLibrary('The Bible', 'Those guys et al', 1200, 1611, false )


