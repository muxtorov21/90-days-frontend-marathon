import React from 'react'

const UserForm = ({ formData, handleChange, addUser }) => {
	const handleSubmit = e => {
		e.preventDefault()
		addUser()
	}
	return (
		<form onSubmit={handleSubmit}>
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
			<button type='submit'>Qo'shish</button>
		</form>
	)
}

export default UserForm
