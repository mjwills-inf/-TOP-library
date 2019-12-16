let myLibrary = [
	{
		title: "The Hobbit",
		author: "J.R.R Tolkien",
		pages: 310,
		read: true,
	}, 
	{
		title: "The Lord Of The Rings",
		author: "J.R.R Tolkien",
		pages: 1137,
		read: true,
	}
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
}





