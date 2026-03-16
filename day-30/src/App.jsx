import { useEffect, useState } from 'react'
import UserCard from './components/userCard'

const App = () => {
	const [users, setUser] = useState(() => {
		const savedUsers = localStorage.getItem('my_users')
		return savedUsers
			? JSON.parse(savedUsers)
			: [
					{ id: 1, name: 'Ahmad', age: 19, job: 'Developer', isVip: true },
					{ id: 2, name: 'Ali', age: 26, job: 'Dizayner', isVip: false },
					{ id: 3, name: 'Asad', age: 22, job: 'Engineer', isVip: false },
					{ id: 4, name: 'Omad', age: 32, job: 'Seller', isVip: true },
			  ]
	})
	useEffect(() => {
		localStorage.setItem('my_users', JSON.stringify(users))
	}, [users])

	const addUser = () => {
		if (!formData.name.trim() || !formData.age) return

		setUser([
			...users,
			{
				id: Date.now(),
				name: formData.name,
				age: formData.age,
				job: formData.job || 'Ishsiz',
				isVip: false,
			},
		])

		setFormData({ name: '', age: '', job: '' })
	}

	const deleteUser = id => {
		const filteredUser = users.filter(user => user.id !== id)
		setUser(filteredUser)
	}

	const updateUserName = (id, newName) => {
		const updatedUsers = users.map(user =>
			user.id === id ? { ...user, name: newName } : user
		)
		setUser(updatedUsers)
	}

	const [formData, setFormData] = useState({
		name: '',
		age: '',
		job: '',
	})

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div>
			<input
				name='name'
				type='text'
				placeholder='Ismingiz'
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				name='age'
				type='number'
				placeholder='Yoshingiz'
				value={formData.age}
				onChange={handleChange}
			/>
			<input
				name='job'
				type='text'
				placeholder='Kasbingiz'
				value={formData.job}
				onChange={handleChange}
			/>
			<button onClick={addUser}>Qo'shish</button>
			<h1>Foydalanuvchi haqida ma'lumotlar:</h1>
			{users.map(user => (
				<UserCard
					key={user.id}
					{...user}
					deleteUser={deleteUser}
					updateUserName={updateUserName}
				/>
			))}
		</div>
	)
}

export default App
