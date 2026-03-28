import React from 'react'

const UserForm = ({ formData, handleChange, addUser }) => {
	const handleSubmit = e => {
		e.preventDefault()
		addUser()
	}
	return (
		<form onSubmit={handleSubmit} className='max-lg:flex flex-col'>
			<input
				name='name'
				type='text'
				placeholder='Ismingiz'
				value={formData.name}
				onChange={handleChange}
				className='text-[18px] border rounded-2xl px-2 ml-1 my-1'
			/>
			<input
				name='age'
				type='number'
				placeholder='Yoshingiz'
				value={formData.age}
				onChange={handleChange}
				className='text-[18px] border rounded-2xl px-2 ml-1 my-1'
			/>
			<input
				name='job'
				type='text'
				placeholder='Kasbingiz'
				value={formData.job}
				onChange={handleChange}
				className='text-[18px] border rounded-2xl px-2 ml-1 my-1'
			/>
			<button
				type='submit'
				className='bg-green-500 text-white px-3 py-2 rounded-2xl ml-1 text-[18px] hover:bg-green-600'
			>
				Qo'shish
			</button>
		</form>
	)
}

export default UserForm
