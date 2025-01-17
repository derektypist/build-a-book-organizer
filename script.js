const books = [{
  "title": "Bromley's Hurricane",
  "authorName": "Muriel V Searle",
  "releaseYear": 1988
}, {
  "title": "Start Programming with the Electron",
  "authorName": "Masoud Yazdani",
  "releaseYear": 1983
}, {
  "title": "Scientific Computing with Python: Mastering Numpy and Scipy",
  "authorName": "John Smith",
  "releaseYear": 2024
}, {
  "title": "Get it Right This Time: How to Find and Keep Your Ideal Romantic Relationship",
  "authorName": "Amy Schoen",
  "releaseYear": 2021
}];

const filteredBooks = books.filter((book) => book.releaseYear > 1990);

const filteredBooksSorted = filteredBooks.sort(sortByYear);

// Functions
function sortByYear(book1,book2) {
  let a = book1.releaseYear;
  let b = book2.releaseYear;
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}


console.log(filteredBooksSorted);
