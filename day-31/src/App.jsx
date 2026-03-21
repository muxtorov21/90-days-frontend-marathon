import { useEffect, useState } from 'react'
import UserCard from './components/userCard'
import UserForm from './components/userForm'

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

	// search
	const [searchTerm, setSearchTerm] = useState('')

	const filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div>
			<UserForm
				formData={formData}
				handleChange={handleChange}
				addUser={addUser}
			/>
			<input
				type='text'
				placeholder="Ism bo'yicha qidirish..."
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<h1>Foydalanuvchi haqida ma'lumotlar:</h1>
			{filteredUsers.length > 0 ? (
				filteredUsers.map(user => (
					<UserCard
						key={user.id}
						{...user}
						deleteUser={deleteUser}
						updateUserName={updateUserName}
					/>
				))
			) : (
				<p style={{ color: 'red' }}>Afsus, bunday foydalanuvchi yo'q...</p>
			)}
		</div>
	)
}

export default App
