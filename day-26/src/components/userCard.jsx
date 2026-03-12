const UserCard = ({ name, age, job, isVip }) => {
	return (
		<div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
			<h3>
				Foydalanuvchi ismi:{' '}
				<span>
					{name} {isVip && '🌟'}
				</span>
			</h3>
			<h3>
				Foydalanuvchi yoshi: <span>{age}</span>
			</h3>
			<h3>
				Foydalanuvchi kasbi: <span>{job}</span>
			</h3>
		</div>
	)
}

export default UserCard
