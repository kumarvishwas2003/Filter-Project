const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
let container = document.querySelector(".container");
let result = document.querySelector(".noRes");
// let resultCount = 0;
function filterBook(value) {
  container.innerHTML = "";
  let filteredBooks = books.filter((bk) => {
    return bk.genre === value;
  });
  // console.log(filteredBooks);
  selectedBooks(filteredBooks);
}

function allBooks() {
  result.innerHTML = books.length
  books.forEach((book) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<h2 class="title">Title: ${book.title}</h2>
      <p class="genre">Genre: ${book.genre}</p>
      <p class="public">Publish: ${book.publish}</p>
      <p class="edition">Edition: ${book.edition}</p>`;
    container.append(div);
  });
}
allBooks();

function selectedBooks(arr) {
  if (arr.length == 0) {
    container.innerHTML = `No Books are available`;
  }
  console.log(arr);
  result.innerHTML = arr.length

  arr.forEach((finalBooks) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<h2 class="title">Title: ${finalBooks.title}</h2>
    <p class="genre">Genre: ${finalBooks.genre}</p>
    <p class="public">Publish: ${finalBooks.publish}</p>
    <p class="edition">Edition: ${finalBooks.edition}</p>`;
    container.append(div);
  });
}
