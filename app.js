let myLibrary = []

function Book(title, author, pages, readStatus){
 this.title = title
 this.author = author
 this.pages = pages
 this.readStatus = readStatus
}
Book.prototype.toggleReadStatus = function(){
 if (this.readStatus == 'true'){
  this.readStatus = 'false'
 } else {
  this.readStatus = 'true'
 }
 displayBooks()
}

function addBookToLibrary(book){
 myLibrary.push(book)
}
function emptyLibraryMessage(){
 let h2 = document.createElement('h2')
 h2.innerHTML = 'There are no books in your library, please add some books.'
 h2.className = 'no-books'
 document.querySelector('#cards').append(h2)
}
function displayBooks(){
 
 document.querySelector('#cards').innerHTML = ''
 let index = 0
 let readCount = 0
 let notReadCount = 0

 for (book of myLibrary){
  book.index = index++
  // console.log(book)
  let div = document.createElement('div')
  let h2 = document.createElement('h2')
  let h4 = document.createElement('h4')
  let h6 = document.createElement('h6')
  let del = document.createElement('button')
  let bool = document.createElement('button')
  
  if (book.readStatus == 'true'){
   bool.innerHTML = 'Read'
   bool.className = 'bool read'
   readCount++
  } else if(book.readStatus == 'false'){
   bool.innerHTML = 'Not Read'
   bool.className = 'bool not-read'
   notReadCount++
  }

  let parent = document.createElement('div')
  parent.className = 'card'
  h2.innerHTML = book.title
  h4.innerHTML = `By <span>${book.author}</span>`
  h6.innerHTML = `${book.pages} pages`
  bool.setAttribute('data-index', book.index)
  bool.setAttribute('type', 'button')
  bool.addEventListener('click', () => {
   let index = bool.getAttribute('data-index')
   for (book of myLibrary){
    if (book.index == index){
     book.toggleReadStatus()
    }
   }
   
  })

  del.className = `del`
  del.setAttribute('data-index', book.index)
  del.setAttribute('type', 'button')
  del.innerHTML = 'Delete'
  del.addEventListener('click', removeBook)
  function removeBook(){
   let index = del.getAttribute('data-index')
   myLibrary.splice(index, 1)
   parent.remove()
   displayBooks()
   if (myLibrary == null || myLibrary.length == 0){
    emptyLibraryMessage()
   }
  }
  
  document.querySelector('#cards').append(parent)
  parent.append(h2)
  parent.append(h4)
  parent.append(h6)
  div.className = 'buttons column'
  div.append(bool)
  div.append(del)
  parent.append(div)
 }

 document.querySelector('#total-num').innerHTML = `Total number of books: <span class='bold'>${myLibrary.length}</span>`
 document.querySelector('#total-read').innerHTML = `Read: <span class='bold'>${readCount}</span>`
 document.querySelector('#total-notread').innerHTML = `Not Read: <span class='bold'>${notReadCount}</span>`
    
}

document.addEventListener('DOMContentLoaded', () => {
 const titleInput = document.querySelector('#title-inp')
 const authorInput = document.querySelector('#author-inp')
 const pagesInput = document.querySelector('#pages-inp')
 const boolInput = document.querySelector('#bool-inp')
 const submit = document.querySelector('#submit')
 function clearFields(){
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = ''
 }

 if (myLibrary == null || myLibrary.length == 0){
  emptyLibraryMessage()
 }

 submit.onclick = () => {

  boolInput.checked ? boolInput.value = true : boolInput.value = false

  let currentBook = new Book(titleInput.value, authorInput.value, pagesInput.value, boolInput.value)
  clearFields()
  addBookToLibrary(currentBook)
  displayBooks()
 }

})