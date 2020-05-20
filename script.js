const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var title = window.prompt("Add new item to the list")
 
  if(title === null || title ==="") return false

  var newItem= generateNewItem(title)
  list.appendChild(newItem)

  counter(itemCountSpan,1)
  counter(uncheckedCountSpan,1)

   return true
}

function generateNewItem(title){

  var newItem = document.createElement("li")
  var lable = document.createElement("label")
  var checkbox = document.createElement("input")
  var textSpace = document.createElement("span")
  var text= document.createTextNode(title)
  var removeSpace = document.createElement("span")
  var remove = document.createTextNode("Remove")

  // TODO_ITEM
  newItem.className= classNames.TODO_ITEM

  // TODO_CHECKBOX
  checkbox.setAttribute("type","checkbox")
  checkbox.className= classNames.TODO_CHECKBOX
  checkbox.onchange = function() {
    counter(uncheckedCountSpan,this.checked?-1:1)
    if (this.checked){
      textSpace.className = "todo-done"
    }
    else{
      textSpace.className=classNames.TODO_TEXT
    }
  }
  lable.appendChild(checkbox)
  
  // TODO_TEXT
  textSpace.className=classNames.TODO_TEXT
  textSpace.appendChild(text)
  lable.appendChild(textSpace)
  newItem.appendChild(lable)

  // TODO_DELETE
  removeSpace.className = classNames.TODO_DELETE
  removeSpace.appendChild(remove)
  removeSpace.onclick =function(){
    if (!this.parentNode.children[0].children[0].checked){
      counter(uncheckedCountSpan,-1)
    }
    counter(itemCountSpan,-1)
    list.removeChild(this.parentNode)
  }
  newItem.appendChild(removeSpace)
  return newItem
}

function counter(item, change){
  var n = item.innerHTML
  n=(1*n)+ change
  item.innerHTML=n
}