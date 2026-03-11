import UserCard from './components/userCard'

const App = () => {
	'Menga chuqurroq mavzular kerak. Mayli lekin takrorlash, mustahkamlash bo`lyapti.'
	return (
		<div>
			<h1>Foydalanuvchi haqida ma'lumotlar:</h1>
			<UserCard name='Ahmad' age='19' job='Developer' />
			<UserCard name='Ali' age='26' job='Dizayner' />
			<UserCard name='Asad' age='22' job='Engener' />
			<UserCard name='Omad' age='32' job='Saller' />
		</div>
	)
}

export default App
