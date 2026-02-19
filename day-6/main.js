const todoValue = document.getElementById('todo-value')
const todoAdd = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')

todoAdd.addEventListener('click', () => {
	let todoText = todoValue.value
	if (todoText.trim() === '') {
		todoValue.style.border = '1px solid red'
		todoValue.placeholder = 'Nimadir yozing'
		return
	}
	let newLi = document.createElement('li')
	newLi.innerText = todoValue.value
	todoList.appendChild(newLi)

	let deleteLi = document.createElement('button')
	newLi.appendChild(deleteLi)
	deleteLi.innerText = 'del'
	deleteLi.style.marginLeft = '10px'
	deleteLi.addEventListener('click', () => {
		newLi.remove()
	})

	todoValue.value = ''
})
