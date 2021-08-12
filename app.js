import {books} from './services/library.js'
import {displayBooks, setupApp} from './services/ui.js'

document.addEventListener('DOMContentLoaded', () => {
  displayBooks(books)
  setupApp()
})

// display books function...

// add new book function 
// book author, title, number of pages, its been read?

// remove book

// toggle status change read status

// localstorage to persist books