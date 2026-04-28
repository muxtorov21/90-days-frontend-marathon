import { useMemo, useState } from 'react'
import { useLocalStorage } from './useLocalStorage.js'

export const useUsers = initialUsers => {
	const [users, setUser] = useLocalStorage('my_users', initialUsers)
	const [formData, setFormData] = useState({ name: '', age: '', job: '' })
	const [searchTerm, setSearchTerm] = useState('')
	const [isSorted, setIsSorted] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const addUser = () => {
		if (!formData.name.trim() || !formData.age) return false // Error bo'lsa false qaytaramiz
		setUser([
			...users,
			{ id: Date.now(), ...formData, age: Number(formData.age), isVip: false },
		])
		setFormData({ name: '', age: '', job: '' })
		return true // Muvaffaqiyatli bo'lsa true
	}

	const deleteUser = id => {
		setUser(prev => prev.filter(u => u.id !== id))
	}

	const toggleVip = id => {
		setUser(prev =>
			prev.map(u => (u.id === id ? { ...u, isVip: !u.isVip } : u)),
		)
	}

	const filteredUsers = useMemo(() => {
		return users.filter(user =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase()),
		)
	}, [users, searchTerm])

	const sortedUsers = useMemo(() => {
		return isSorted
			? [...filteredUsers].sort((a, b) => Number(a.age) - Number(b.age))
			: filteredUsers
	}, [filteredUsers, isSorted])

	return {
		users: sortedUsers,
		formData,
		searchTerm,
		setSearchTerm,
		isSorted,
		setIsSorted,
		handleChange,
		addUser,
		deleteUser,
		toggleVip,
	}
}
