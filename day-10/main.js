const todoValue = document.getElementById('todo-value')
const todoAdd = document.getElementById('todo-add')
const todoList = document.getElementById('todo-list')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function renderTasks() {
	todoList.innerHTML = ''
	tasks.forEach((task, index) => {
		let newLi = document.createElement('li')

		newLi.className = `flex items-center justify-between p-4 mb-2 rounded-xl border transition-all cursor-pointer ${
			task.completed
				? 'bg-green-50 border-green-200'
				: 'bg-white border-blue-100 shadow-sm hover:shadow-md'
		}`

		let contentDiv = document.createElement('div')
		contentDiv.className = 'flex flex-col flex-1'
		let span = document.createElement('span')
		span.innerText = task.text
		span.className = `text-lg leading-tight ${
			task.completed
				? 'line-through text-gray-400'
				: 'text-gray-700 font-medium'
		}`
		contentDiv.appendChild(span)

		let infoDiv = document.createElement('div')
		infoDiv.className = 'flex items-center gap-3 mt-1'

		let dateBadge = document.createElement('span')
		dateBadge.innerText = task.date || 'Hozir'
		dateBadge.className = 'text-[11px] text-gray-400 font-medium'
		infoDiv.appendChild(dateBadge)

		if (task.completed) {
			let statusBadge = document.createElement('span')
			statusBadge.innerText = '✓ Bajarildi'
			statusBadge.className =
				'text-[11px] text-green-600 font-bold tracking-tight'
			infoDiv.appendChild(statusBadge)
		}

		contentDiv.appendChild(infoDiv)
		newLi.onclick = () => toggleTask(index)

		let deleteBtn = document.createElement('button')
		deleteBtn.innerText = "O'chirish"
		deleteBtn.className =
			'ml-4 text-[11px] font-bold uppercase bg-red-50 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-all active:scale-90'

		deleteBtn.onclick = e => {
			e.stopPropagation()
			deleteTask(index)
		}

		newLi.appendChild(contentDiv)
		newLi.appendChild(deleteBtn)
		todoList.appendChild(newLi)
	})
}

function toggleTask(index) {
	tasks[index].completed = !tasks[index].completed
	saveAndRander()
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
	if (todoText.trim() === '') return

	const now = new Date()
	const dateString = `${now.getDate().toString().padStart(2, '0')}.${(
		now.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')} ${now.getHours()}:${now
		.getMinutes()
		.toString()
		.padStart(2, '0')}`

	tasks.push({
		text: todoText,
		completed: false,
		date: dateString,
	})

	saveAndRander()
	todoValue.value = ''
})

let advice = document.getElementById('advice-text')
let newBtn = document.getElementById('newBtn')

newBtn.addEventListener('click', () => {
	getAdvice()
})

function getAdvice() {
	advice.innerText = 'yuklanmoqda'
	fetch('https://api.adviceslip.com/advice')
		.then(advise => advise.json())
		.then(data => {
			advice.innerText = 'Kun maslahati: ' + data.slip.advice
		})
		.catch(error => {
			advice.innerText = 'Kechirasiz, maslahat yuklashda xato yuz berdi.'
			console.log('Xato tafsiloti:', error)
		})
}
getAdvice()

let dogImg = document.getElementById('dogImg')
let newDogBtn = document.getElementById('new-dog-btn')

// async function getDogs() {
// 	try {
// 		dogImg.style.opacity = '0.3'
// 		let response = await fetch(`https://dog.ceo/api/breeds/image/random`)
// 		let data = await response.json()
// 		console.log(data)

// 		if (data.status === 'success') {
// 			dogImg.src = data.message
// 		}

// 		dogImg.onload = () => {
// 			dogImg.style.opacity = '1'
// 		}
// 	} catch (error) {
// 		console.log('Xato yuz berdi: ', error)
// 	}
// }

newDogBtn.addEventListener('click', () => {
	getPetAndOwner()
})

let ownerImg = document.getElementById('ownerImg')
let ownerName = document.getElementById('ownerName')
let owner = document.getElementById('owner')

async function getPetAndOwner() {
	try {
		dogImg.style.opacity = '0.3'

		const [resUser, resDog] = await Promise.all([
			fetch('https://randomuser.me/api/'),
			fetch('https://dog.ceo/api/breeds/image/random'),
		])
		const resUserName = await resUser.json()
		const resDogImg = await resDog.json()
		if (resDogImg.status === 'success') {
			dogImg.src = resDogImg.message
		}

		ownerName.innerText = resUserName.results[0].name.first
		ownerImg.src = resUserName.results[0].picture.medium

		dogImg.onload = () => {
			dogImg.style.opacity = '1'
			dogImg.alt = 'It rasmi'
			ownerImg.alt = 'Egasini rasmi'
			owner.innerText = 'Itni egasi'
		}
	} catch (error) {
		console.log('Xato: ', error)
	}
}
