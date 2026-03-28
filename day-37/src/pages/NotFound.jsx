import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-[70vh] text-center px-4'>
			<h1 className='text-9xl font-black text-gray-200'>404</h1>
			<p className='text-2xl font-bold text-gray-800 mt-4 italic'>
				Bu sahifa topilmadi!!!
			</p>
			<p className='text-gray-500 mt-2 mb-8'>
				Siz qidirayotgan sahifa mavjud emas yoki ko'chirib yuborilgan.
			</p>
			<Link
				to='/'
				className='bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200'
			>
				Bosh sahifaga qaytish
			</Link>
		</div>
	)
}

export default NotFound
