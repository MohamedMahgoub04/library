let myLibrary = []
let index = 0
// let readTotal = 0
//  let notReadTotal = 0

function setReadStatus(Book, readTotal, notReadTotal){
 let bool = document.createElement('button')
 // let readTotal = 0
 // let notReadTotal = 0

 bool.className = 'bool'
 bool.innerHTML = Book.status

 if (Book.status == 'Read'){
  readTotal++
  bool.style.backgroundColor = 'rgb(186, 219, 204)'
  bool.onmouseover = () => {
   bool.style.backgroundColor = '#9BCBB5'
  }
  bool.onmouseout = () => {
   bool.style.backgroundColor = 'rgb(186, 219, 204)'
  }
 } else {
  notReadTotal++
  bool.style.backgroundColor = 'rgb(245, 194, 199)'
  bool.onmouseover = () => {
   bool.style.backgroundColor = '#ED919A'
  }
  bool.onmouseout = () => {
   bool.style.backgroundColor = 'rgb(245, 194, 199)'
  }
 }

 document.querySelector('#total-num').innerHTML = `Total number of books: <span class='bold'>${myLibrary.length}</span>`
 document.querySelector('#total-read').innerHTML = `Read: <span class='bold'>${readTotal}</span>`
 document.querySelector('#total-notread').innerHTML = `Not Read: <span class='bold'>${notReadTotal}</span>`
 return bool
}

function Book(title, author, pages, status){
 this.title = title
 this.author = author
 this.pages = pages
 this.status = status
}

// function addBookToLibrary(Book){
//  let div = document.createElement('div')
//  const h2 = document.createElement('h2')
//  const h4 = document.createElement('h4')
//  const h6 = document.createElement('h6')
//  let del = document.createElement('button')
//  let bool = document.createElement('button')

//  myLibrary.push(Book)
 
//  let parent = document.createElement('div')
//  parent.className = 'card'
//  h2.innerHTML = Book.title
 
//  h4.innerHTML = `By <span>${Book.author}</span>`
//  h6.innerHTML = `${Book.pages} pages`
//  del.className = 'del'
//  del.setAttribute('data-index', index)
//  del.setAttribute('type', 'button')
//  del.innerHTML = 'Delete'
//  bool.className = 'bool'
//  bool.innerHTML = 'Read'

//  document.querySelector('#cards').append(parent)
//  parent.append(h2)
//  parent.append(h4)
//  parent.append(h6)
//  div.className = 'buttons column'
//  div.append(bool)
//  div.append(del)
//  parent.append(div)

//  index++

//  document.querySelector('#total-num').innerHTML = `Total number of books: <span class='bold'>${myLibrary.length}</span>`
// }
// function removeBook(){

//    let parent = this.closest('.card')
//    console.log(parent)
//    let title = parent.querySelector('h2')
//    parent.remove()

//    for (i of myLibrary){
//     if (i.title == title.innerHTML){
//      parent.remove()
//      myLibrary.pop(i)
//      console.log(myLibrary)
//     }
//    }
  
// }

function loop(Book){
 let readTotal = 0
 let notReadTotal = 0
 if (Book !== 0){
  myLibrary.push(Book)
 }

 document.querySelector('#cards').innerHTML = ''

 for (i of myLibrary){
  let div = document.createElement('div')
  const h2 = document.createElement('h2')
  const h4 = document.createElement('h4')
  const h6 = document.createElement('h6')
  let del = document.createElement('button')
  let bool = document.createElement('button')

  let parent = document.createElement('div')
  parent.className = 'card'
  h2.innerHTML = i.title
  
  h4.innerHTML = `By <span>${i.author}</span>`
  h6.innerHTML = `${i.pages} pages`
  del.className = `del ${index}`
  del.setAttribute('data-index', index)
  del.setAttribute('type', 'button')
  // del.setAttribute('onclick', 'removeBook()')
  del.innerHTML = 'Delete'
  setReadStatus(i)

  document.querySelector('#cards').append(parent)
  parent.append(h2)
  parent.append(h4)
  parent.append(h6)
  div.className = 'buttons column'
  div.append(setReadStatus(i))
  div.append(del)
  parent.append(div)
 }

}



document.addEventListener('DOMContentLoaded', () => {
 let cards = document.querySelector('#cards')
 
 // console.log(document.querySelector('.del').closest('.card'))
 // Array.from(document.getElementsByClassName('del')).forEach(x => {
 //  x.onclick = () => {

 //   let parent = x.closest('.card')
 //   console.log(parent)
 //   let title = parent.querySelector('h2')
 //   parent.remove()

 //   for (i of myLibrary){
 //    if (i.title == title.innerHTML){
 //     parent.remove()
 //     myLibrary.pop(i)
 //     console.log(myLibrary)
 //    }
 //   }

 //  }
 // })

 document.addEventListener('click', () => {
  if (!event.target.matches('.del')) return
  let parent = event.target.closest('.card')
   console.log(parent)
   let title = parent.querySelector('h2')
   // parent.remove()

   for (i of myLibrary){
    if (i.title == title.innerHTML){
     parent.remove()
     myLibrary.splice(myLibrary.indexOf(i), 1)
     console.log(myLibrary)
    }
   }
   loop(0)
   if (myLibrary.length == 0){
    const h2 = document.createElement('h2')
    h2.innerHTML = 'There are no books in your library, please add some books.'
    h2.className = 'no-books'
    document.querySelector('#cards').append(h2)
   }
 })



 document.querySelector('#submit').onclick = () => {
  if (document.querySelector('#bool-inp').checked){
   document.querySelector('#bool-inp').value = 'Read'
  } else {
   document.querySelector('#bool-inp').value = 'Not read'
  }

  let newBook = new Book(document.querySelector('#title-inp').value, document.querySelector('#author-inp').value, document.querySelector('#pages-inp').value, document.querySelector('#bool-inp').value)

  // addBookToLibrary(newBook)
  // removeBook(newBook)
  loop(newBook)
  console.log(myLibrary)

  document.querySelector('#title-inp').value = ''
  document.querySelector('#author-inp').value = ''
  document.querySelector('#pages-inp').value = ''
  

 }


})