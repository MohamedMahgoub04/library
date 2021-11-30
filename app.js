const form = document.querySelector('form')
const submit = document.querySelector('#submit')

function addBook(){

}

document.addEventListener('DOMContentLoaded', () => {
 document.querySelector('#submit').disabled = true
 

 document.addEventListener('keyup', () => {
  if(document.querySelector('#title-inp').value !== '' && document.querySelector('#author-inp').value !== '' && document.querySelector('#pages-inp').value !== ''){
   document.querySelector('#submit').style.backgroundColor = '#007c89'
   document.querySelector('#submit').style.border = '1px solid #007c89'
   document.querySelector('#submit').style.color = '#fff'
   document.querySelector('#submit').style.cursor = 'pointer'
   document.querySelector('#submit').disabled = false
  } else {
   document.querySelector('#submit').style.backgroundColor = 'transparent'
   document.querySelector('#submit').style.border = '1px solid rgba(36,28,21,0.3)'
   document.querySelector('#submit').style.color = 'rgba(36,28,21,0.3)'
   document.querySelector('#submit').style.cursor = 'unset'
   document.querySelector('#submit').disabled = true
  }
 })
 document.querySelector('form').onsubmit = () => {
  let div = document.createElement('div')
  const h2 = document.createElement('h2')
  const h4 = document.createElement('h4')
  const h6 = document.createElement('h6')
  
  let title = document.querySelector('#title-inp').value
  let author = document.querySelector('#author-inp').value
  let pages = document.querySelector('#pages-inp').value

  div.className = 'card'
  h2.innerHTML = title
  h4.innerHTML = `By <span>${author}</span>`
  h6.innerHTML = `${pages} pages`

  document.querySelector('#cards').append(div)
  div.append(h2)
  div.append(h4)
  div.append(h6)

  // let div = document.createElement('div')
  // let btn = document.createElement('button')
  // div.className('buttons column')
  // btn.innerHTML = 'READ'
  // btn.className = 'bool'
  
  return false
 }

})