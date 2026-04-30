import { createContext, useContext } from 'react'
import { useUsers } from '../hooks/useUsers'

// 1. Yangi Context yaratamiz
const UserContext = createContext()

// 2. Provider komponentini yaratamiz
export const UserProvider = ({ children }) => {
	// Barcha foydalanuvchi mantiqini (kecha yaratgan hookimizni) shu yerga ulaymiz
	const userLogic = useUsers([
		{ id: 1, name: 'Ahmad', age: 19, job: 'Developer', isVip: true },
		{ id: 2, name: 'Ali', age: 26, job: 'Dizayner', isVip: false },
	])

	return (
		<UserContext.Provider value={userLogic}>{children}</UserContext.Provider>
	)
}

// 3. Ma'lumotlarni olish uchun shaxsiy hook (bu kodni qisqartirish uchun)
export const useUserContext = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error(
			'useUserContext faqat UserProvider ichida ishlatilishi kerak!',
		)
	}
	return context
}
