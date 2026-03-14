import { useEffect, useState } from 'react'

const UserCard = ({ name, age, job, isVip }) => {
	const [likes, setLikes] = useState(0)
	const [showInfo, setShowInfo] = useState(false)
	const [isSelected, setIsSelected] = useState(false)
	const [advice, setAdvice] = useState('')

	const getAdvice = () => {
		fetch('https://api.adviceslip.com/advice')
			.then(res => res.json())
			.then(data => setAdvice(data.slip.advice))
			.catch(err => console.log(err))
	}
	useEffect(() => {
		getAdvice()
	}, [])

	const handleClickAdvice = () => {
		getAdvice()
	}

	const selectedCard = () => {
		setIsSelected(!isSelected)
	}

	const toggleInfo = () => {
		setShowInfo(!showInfo)
	}
	const handleClickLike = () => {
		setLikes(prevLikes => prevLikes + 1)
	}
	const handleClickDisLike = () => {
		setLikes(prevLikes => prevLikes - 1)
	}
	const handleClickReset = () => {
		setLikes(0)
	}
	const handleDetails = info => {
		alert(`Bu odam ${info} `)
	}
	return (
		<div
			style={{
				border: '1px solid gray',
				margin: '10px',
				padding: '10px',
				backgroundColor: isSelected ? 'lightblue' : 'white',
				transition: '0.4s',
			}}
		>
			<h3>
				Foydalanuvchi ismi:{' '}
				<span>
					{name} {isVip && '🌟'}
				</span>
			</h3>
			<button onClick={() => handleDetails(age)}>yoshi?</button>
			<button onClick={() => handleDetails(job)}>kasbi?</button>
			<button onClick={toggleInfo}>
				{' '}
				{showInfo ? 'Yashirish' : 'Batafsil'}
			</button>
			{showInfo && (
				<div>
					{' '}
					<h3>
						Foydalanuvchi yoshi: <span>{age}</span>
					</h3>
					<h3>
						Foydalanuvchi kasbi: <span>{job}</span>
					</h3>
				</div>
			)}
			<span style={{ margin: '0 10px' }}>Likes: {likes}</span>
			<button onClick={handleClickLike}>Like</button>
			<button onClick={handleClickDisLike}>disLike</button>
			<button onClick={handleClickReset}>Reset</button>
			<button onClick={selectedCard}>Tanlash</button>
			<h2>Bu insonga maslahat:</h2>
			<p>{advice}</p>
			<button onClick={handleClickAdvice}>New Advice</button>
		</div>
	)
}

export default UserCard
