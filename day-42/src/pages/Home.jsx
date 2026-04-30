import { useState } from 'react'
import Modal from '../components/modal.jsx'
import Toast from '../components/Toast.jsx'
import UserCard from '../components/UserCard/userCard.jsx'
import UserForm from '../components/UserForm/userForm.jsx'
import { useUsers } from '../hooks/useUsers.js' // 1. Hookni import qildik

const Home = () => {
	const {
		users,
		formData,
		searchTerm,
		setSearchTerm,
		isSorted,
		setIsSorted,
		handleChange,
		addUser,
		deleteUser,
		toggleVip,
	} = useUsers([
		{ id: 1, name: 'Ahmad', age: 19, job: 'Developer', isVip: true },
		{ id: 2, name: 'Ali', age: 26, job: 'Dizayner', isVip: false },
	])

	const [toast, setToast] = useState({
		show: false,
		message: '',
		type: 'success',
	})
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [userToDelete, setUserToDelete] = useState(null)

	const showToast = (message, type = 'success') => {
		setToast({ show: true, message, type })
	}

	// 2. Modal funksiyalari (bular Home ichida qolgani yaxshi)
	const openDeleteModal = id => {
		setUserToDelete(id)
		setIsModalOpen(true)
	}

	const confirmDelete = () => {
		deleteUser(userToDelete)
		setIsModalOpen(false)
		showToast("Foydalanuvchi o'chirildi!", 'error')
	}

	const handleAddUser = () => {
		const success = addUser()
		if (success) {
			showToast("Yangi foydalanuvchi qo'shildi!")
		}
	}

	return (
		<div className='max-w-4xl mx-auto p-6 font-sans text-gray-800'>
			<div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8'>
				<h2 className='text-xl font-bold mb-4'>Yangi foydalanuvchi qo'shish</h2>
				<UserForm
					formData={formData}
					handleChange={handleChange}
					addUser={handleAddUser} // O'zgartirdik
				/>
			</div>

			<div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-gray-50 p-4 rounded-lg'>
				<input
					type='text'
					placeholder="Ism bo'yicha qidirish..."
					className='flex-1 p-2.5 border border-gray-300 rounded-lg outline-none bg-white'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<button
					onClick={() => setIsSorted(!isSorted)}
					className={`px-5 py-2.5 rounded-lg font-medium ${isSorted ? 'bg-blue-600 text-white' : 'bg-white border'}`}
				>
					{isSorted ? '✓ Saralandi' : 'Yosh bo‘yicha saralash'}
				</button>
			</div>

			<div className='space-y-4'>
				{users.map(user => (
					<UserCard
						key={user.id}
						{...user}
						deleteUser={openDeleteModal}
						toggleVip={toggleVip}
					/>
				))}
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onConfirm={confirmDelete}
			>
				Haqiqatan ham bu foydalanuvchini o'chirmoqchimisiz?
			</Modal>

			{toast.show && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast({ ...toast, show: false })}
				/>
			)}
		</div>
	)
}

export default Home
