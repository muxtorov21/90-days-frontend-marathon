import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const UserCard = ({ name, age, job, isVip, deleteUser, id, toggleVip }) => {
	const [likes, setLikes] = useState(0)
	const { data, loading, refetch } = useFetch(
		'https://api.adviceslip.com/advice'
	)
	return (
		<div
			className={`p-5 mb-4 rounded-lg border shadow-sm transition-all ${
				isVip ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'
			}`}
		>
			<div className='flex justify-between items-center mb-3'>
				<div>
					<h3 className='text-lg font-bold text-gray-800'>
						{name}{' '}
						{isVip && (
							<span className='text-sm text-yellow-600 ml-1'>⭐ VIP</span>
						)}
					</h3>
					<p className='text-sm text-gray-500 italic'>
						{job} ({age} yosh)
					</p>
				</div>
				<div className='bg-gray-100 px-3 py-1 rounded text-sm font-semibold'>
					Likes: {likes}
				</div>
			</div>

			<div className='flex flex-wrap gap-2 mb-4'>
				<button
					onClick={() => setLikes(l => l + 1)}
					className='bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600'
				>
					Like
				</button>
				<button
					onClick={() => setLikes(l => l - 1)}
					className='bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300'
				>
					Dislike
				</button>
				<button
					onClick={() => setLikes(0)}
					className='bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300'
				>
					Reset
				</button>

				<div className='w-px bg-gray-300 mx-1'></div>

				<button
					onClick={() => toggleVip(id)}
					className='bg-orange-400 text-white px-3 py-1 rounded text-xs hover:bg-orange-500'
				>
					{isVip ? 'VIP-dan olish' : 'VIP qilish'}
				</button>
				<button
					onClick={() => deleteUser(id)}
					className='bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600'
				>
					O'chirish
				</button>
			</div>

			<div className='p-3 bg-gray-50 rounded border border-gray-100'>
				<p className='text-xs text-gray-400 font-bold mb-1 uppercase'>
					Maslahat:
				</p>
				<p className='text-sm text-gray-600 italic'>
					{loading ? 'Yuklanmoqda...' : `"${data?.slip?.advice}"`}
				</p>
				<button
					onClick={refetch}
					className='text-blue-500 text-[11px] mt-2 underline block'
				>
					Yangi maslahat
				</button>
			</div>
		</div>
	)
}

export default UserCard
