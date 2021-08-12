import {addBook} from './library.js'

const UI = () => {
  const addBookBtn    = document.querySelector('.btn-new_book')
  const booksDOM      = document.querySelector('.books')
  const formOverlay   = document.querySelector('.form-overlay');
  const formDOM       = document.querySelector('.form');
  const closeFormBtn  = document.querySelector('.close-form');
  const titleInput    = document.getElementById('title')
  const cancelBtn     = document.querySelector('.btn-cancel')
  const newBookForm   = document.querySelector('.book-form')

  const displayBooks = (books) => {
    let result = ""

    if(books.length <= 0){
      result += `
        <h2>Start Adding a Book to see the magic 📖📕</h2>
      `
    } else {
      books.forEach((book) => {
        // <!-- SINGLE BOOK -->
        result += `    
          <article class="card">
            <div class="menu">
              <i></i>
              <span>${book.pages} pages</span>
            </div>
            <h2>${book.title}</h2>
            <h4>${book.author}</h4>
            <p>${book.description ?? 'No description yet'}</p>
        </article>
          `
        // <!-- END SINGLE BOOK -->
      })
    }

    booksDOM.innerHTML = result
  }

  function showForm() {
    formOverlay.classList.add('transparentBcg');
    formDOM.classList.add('showForm');
    titleInput.focus();
  }

  function hideForm() {
    formOverlay.classList.remove('transparentBcg');
    formDOM.classList.remove('showForm');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { 
      title : {value : title}, 
      author : { value : author},
      pages : { value : pages}
     } = newBookForm.elements
    const books = addBook({ title, author, pages})
    displayBooks(books)
    e.target.reset();
    hideForm()
  }

  const setupApp = () => {    
    addBookBtn.addEventListener('click' , showForm);
    closeFormBtn.addEventListener('click', hideForm);
    cancelBtn.addEventListener('click', hideForm);
    newBookForm.addEventListener('submit', handleSubmit);
  }

  return { displayBooks, setupApp }
}

export const { displayBooks, setupApp } = UI()
