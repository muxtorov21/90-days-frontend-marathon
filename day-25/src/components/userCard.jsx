const UserCard = ({ name, age, job }) => {
	return (
		<div>
			<h3>
				Foydalanuvchi ismi: <span>{name}</span>
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
