const myInput = document.querySelector('#user-input')
const myBtn = document.querySelector('#send-btn')
const result = document.querySelector('#display-text')

myInput.addEventListener('input', () => {
	let message = myInput.value

	if (message.trim() === '') {
		result.innerText = 'Iltimos nimadir yozing'
		result.style.color = 'red'
	} else {
		result.innerText = 'Siz yozdingiz: ' + message
		result.style.color = 'green'
	}
})

myBtn.addEventListener('click', () => {
	let result = myInput.value
	console.log(result)
	myInput.value = ''
})
