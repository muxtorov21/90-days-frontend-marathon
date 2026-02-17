const title = document.getElementById('title')
const btn = document.getElementById('change-btn')
const deleteBtn = document.getElementById('delete-btn')
const randomColorBtn = document.querySelector('.random-color')

btn.addEventListener('click', () => {
	title.innerText = 'Dom orqali o`zgardi'
	title.style.color = 'red'
	document.body.style.backgroundColor = 'black'
})

deleteBtn.addEventListener('click', () => {
	title.remove()
	document.body.style.backgroundColor = 'red'
})

randomColorBtn.addEventListener('click', () => {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
	document.body.style.backgroundColor = randomColor
})
