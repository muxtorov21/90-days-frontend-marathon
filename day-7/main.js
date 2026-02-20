const todoValue = document.getElementById('todo-value')
const todoAdd = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function renderTasks() {
	todoList.innerHTML = ''
	tasks.forEach((task, index) => {
		let newLi = document.createElement('li')
		newLi.innerText = task

		let deleteLi = document.createElement('button')
		deleteLi.innerText = 'del'
		deleteLi.onclick = () => deleteTask(index)

		newLi.appendChild(deleteLi)
		todoList.appendChild(newLi)
	})
}

function deleteTask(index) {
	tasks.splice(index, 1)
	saveAndRander()
}

function saveAndRander() {
	localStorage.setItem('tasks', JSON.stringify(tasks))
	renderTasks()
}

renderTasks()

todoAdd.addEventListener('click', () => {
	let todoText = todoValue.value
	if (todoText.trim() === '') {
		todoValue.style.border = '1px solid red'
		todoValue.placeholder = 'Nimadir yozing'
		return
	}

	tasks.push(todoText)

	saveAndRander()

	todoValue.value = ''
	todoValue.style.border = ''
})
