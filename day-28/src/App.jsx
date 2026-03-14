import { useState } from 'react'
import UserCard from './components/userCard'

const App = () => {
	const [userName, setUserName] = useState('')

	const [users, setUser] = useState([
		{ id: 1, name: 'Ahmad', age: 19, job: 'Developer', isVip: true },
		{ id: 2, name: 'Ali', age: 26, job: 'Dizayner', isVip: false },
		{ id: 3, name: 'Asad', age: 22, job: 'Engineer', isVip: false },
		{ id: 4, name: 'Omad', age: 32, job: 'Seller', isVip: true },
	])

	const addUser = () => {
		if (userName.trim() === '') return
		setUser([
			...users,
			{ id: Date.now(), name: userName, age: 20, job: 'Teacher', isVip: false },
		])
		setUserName('')
	}
	return (
		<div>
			<input
				type='text'
				placeholder='Ismingiz'
				value={userName}
				onChange={e => SetUserName(e.target.value)}
			/>
			<button onClick={addUser}>Qo'shish</button>
			<h1>Foydalanuvchi haqida ma'lumotlar:</h1>
			{users.map(user => (
				<UserCard key={user.id} {...user} />
			))}
		</div>
	)
}

export default App
