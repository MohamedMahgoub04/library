let myLibrary = []

function CreateBook(title, author, pages, readStatus){
 this.title = title
 this.author = author
 this.pages = pages
 this.readStatus = readStatus
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

 for (book of myLibrary){
  book.index = index++
  console.log(book)
  let div = document.createElement('div')
  let h2 = document.createElement('h2')
  let h4 = document.createElement('h4')
  let h6 = document.createElement('h6')
  let del = document.createElement('button')
  let bool = document.createElement('button')
  
  let parent = document.createElement('div')
  parent.className = 'card'
  h2.innerHTML = book.title
  
  h4.innerHTML = `By <span>${book.author}</span>`
  h6.innerHTML = `${book.pages} pages`
  del.className = `del`
  del.setAttribute('data-index', book.index)
  del.setAttribute('type', 'button')
  del.innerHTML = 'Delete'
  del.addEventListener('click', removeBook)
  function removeBook(){
   let index = del.getAttribute('data-index')
   myLibrary.splice(index, 1)
   parent.remove()
   save()
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
  
  div.append(del)
  parent.append(div)
 }
 document.querySelector('#total-num').innerHTML = `Total number of books: <span class='bold'>${myLibrary.length}</span>`
 
   
}
const save = () => {
 localStorage.setItem('library', JSON.stringify(myLibrary))
}
const retrieve = () => {
 let data = localStorage.getItem('library')
 myLibrary = JSON.parse(data)
 if (myLibrary == null || myLibrary.length == 0){
  emptyLibraryMessage()
 } else {
  displayBooks()
 }
}

document.addEventListener('DOMContentLoaded', () => {
 const titleInput = document.querySelector('#title-inp')
 const authorInput = document.querySelector('#author-inp')
 const pagesInput = document.querySelector('#pages-inp')
 const submit = document.querySelector('#submit')
 function clearFields(){
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = ''
 }

 retrieve()

 submit.onclick = () => {
  let currentBook = new CreateBook(titleInput.value, authorInput.value, pagesInput.value, 'true')
  clearFields()
  addBookToLibrary(currentBook)
  save()
  console.clear()
  displayBooks()
 }

})