const newItemInput = document.getElementById('new-item')

const newItemBtn = document.getElementById('btn-add-item')

function addNewItem() {
  if(!newItemInput.value) {
    alert('Opa, não tem valor')
    return
  }

  const li = document.createElement('li')
  li.setAttribute('class', 'list-group-item d-flex justify-content-between')
  const liContent = `
  ${newItemInput.value} <button class="btn-remove btn btn-danger">-</button>
  `
  li.innerHTML = liContent
  const ul = document.querySelector('ul')
  ul.appendChild(li)

  newItemInput.value = ''

  const button = li.querySelector('button')
  button.addEventListener('click', removeItem)

}

function removeItem(event) {
  const button = event.currentTarget
  const li = button.parentNode
  const ul = button.parentNode.parentNode
  ul.removeChild(li)
}


window.addEventListener('load', () => {
  const newItemBtn = document.getElementById('btn-add-item')
  newItemBtn.addEventListener('click', addNewItem)

  const btnsRemove = document.getElementsByClassName('btn-remove')
  for(let btnRemove of btnsRemove) {
    btnRemove.addEventListener('click', removeItem)
  }
})
