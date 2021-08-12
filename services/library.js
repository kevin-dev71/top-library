// {
//   title: "Title 1",
//   author: "John Doe",
//   description: "Some Description here",
//   pages: 32,
//   isRead: false
// }, {
//   title: "Title 2",
//   author: "John Doe",
//   description: "Some Description here",
//   pages: 33,
//   isRead: false
// }, {
//   title: "Title 3",
//   author: "John Doe",
//   description: "Some Description here",
//   pages: 34,
//   isRead: false
// }

const Library = () => {

  let books = [];

  const removeBook = itemName => {}

  const addBook = (book) => {
    books.push(book)
    return books
  }

  return {
    books,
    removeBook,
    addBook
  }
}

export const {books, removeBook, addBook} = Library();