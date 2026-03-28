import { Link, useParams } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const UserDetails = () => {
	const { id } = useParams()
	const [users] = useLocalStorage('my_users', [])

	const user = users.find(u => u.id === Number(id))

	if (!user) {
		return <div className='p-10 text-center'>Foydalanuvchi topilmadi!</div>
	}

	return (
		<div className='max-w-2xl mx-auto p-6 animate-fade-in'>
			<Link to='/' className='text-blue-500 hover:underline mb-6 inline-block'>
				← Orqaga qaytish
			</Link>

			<div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'>
				<div className='flex items-center gap-6 mb-8'>
					<div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600'>
						{user.name[0]}
					</div>
					<div>
						<h1 className='text-3xl font-black text-gray-900'>{user.name}</h1>
						<p className='text-blue-600 font-medium'>{user.job}</p>
					</div>
				</div>

				<div className='space-y-4 border-t pt-6'>
					<div className='flex justify-between'>
						<span className='text-gray-500 text-sm uppercase font-bold tracking-wider'>
							Yosh:
						</span>
						<span className='font-bold'>{user.age} yosh</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-500 text-sm uppercase font-bold tracking-wider'>
							Status:
						</span>
						<span
							className={
								user.isVip ? 'text-yellow-600 font-bold' : 'text-gray-800'
							}
						>
							{user.isVip ? '⭐ VIP Foydalanuvchi' : 'Oddiy foydalanuvchi'}
						</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-500 text-sm uppercase font-bold tracking-wider'>
							Tizimdagi ID:
						</span>
						<span className='text-xs text-gray-400'>#{user.id}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserDetails
