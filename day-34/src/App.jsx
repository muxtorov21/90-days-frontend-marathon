import { useCallback, useMemo, useState } from 'react'
import UserCard from './components/UserCard/userCard'
import UserForm from './components/UserForm/userForm'
import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
	const [users, setUser] = useLocalStorage('my_users', [
		{ id: 1, name: 'Ahmad', age: 19, job: 'Developer', isVip: true },
		{ id: 2, name: 'Ali', age: 26, job: 'Dizayner', isVip: false },
		{ id: 3, name: 'Asad', age: 22, job: 'Engineer', isVip: false },
		{ id: 4, name: 'Omad', age: 32, job: 'Seller', isVip: true },
	])

	const [formData, setFormData] = useState({ name: '', age: '', job: '' })
	const [searchTerm, setSearchTerm] = useState('')
	const [isSorted, setIsSorted] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const addUser = () => {
		if (!formData.name.trim() || !formData.age) return
		setUser([
			...users,
			{ id: Date.now(), ...formData, age: Number(formData.age), isVip: false },
		])
		setFormData({ name: '', age: '', job: '' })
	}

	const deleteUser = useCallback(
		id => {
			setUser(prevUsers => prevUsers.filter(user => user.id !== id))
		},
		[setUser]
	)

	const toggleVip = useCallback(
		id => {
			setUser(prevUsers =>
				prevUsers.map(u => (u.id === id ? { ...u, isVip: !u.isVip } : u))
			)
		},
		[setUser]
	)
	const filteredUsers = useMemo(() => {
		console.log('Filtering qilinmoqda...')
		return users.filter(user =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	}, [users, searchTerm])

	const sortedUsers = useMemo(() => {
		console.log('Sorting qilinmoqda...')
		return isSorted
			? [...filteredUsers].sort((a, b) => Number(a.age) - Number(b.age))
			: filteredUsers
	}, [filteredUsers, isSorted])

	return (
		<div className='max-w-4xl mx-auto p-6 font-sans text-gray-800'>
			<div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8'>
				<h2 className='text-xl font-bold mb-4'>Yangi foydalanuvchi qo'shish</h2>
				<UserForm
					formData={formData}
					handleChange={handleChange}
					addUser={addUser}
				/>
			</div>

			<div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-gray-50 p-4 rounded-lg'>
				<input
					type='text'
					placeholder="Ism bo'yicha qidirish..."
					className='flex-1 p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>

				<button
					onClick={() => setIsSorted(!isSorted)}
					className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
						isSorted
							? 'bg-blue-600 text-white'
							: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
					}`}
				>
					{isSorted ? '✓ Saralandi' : 'Yosh bo‘yicha saralash'}
				</button>
			</div>

			<h1 className='text-2xl font-black mb-6 border-b-2 border-gray-100 pb-2 text-gray-700'>
				Foydalanuvchilar ro'yxati
			</h1>

			<div className='space-y-4'>
				{sortedUsers.length > 0 ? (
					sortedUsers.map(user => (
						<UserCard
							key={user.id}
							{...user}
							deleteUser={deleteUser}
							toggleVip={toggleVip}
						/>
					))
				) : (
					<div className='text-center py-10 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200'>
						<p className='text-gray-400 font-medium'>Hech kim topilmadi...</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
