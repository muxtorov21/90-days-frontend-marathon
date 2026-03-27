import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

const App = () => {
	return (
		<div className='min-h-screen bg-slate-50'>
			<nav className='bg-white shadow-sm p-4 mb-6'>
				<div className='max-w-4xl mx-auto flex gap-6 font-bold text-gray-600'>
					<Link to='/' className='hover:text-blue-600 transition-colors'>
						Asosiy
					</Link>
					<Link to='/about' className='hover:text-blue-600 transition-colors'>
						Loyiha haqida
					</Link>
				</div>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/user/:id' element={<UserDetails />} />
			</Routes>
		</div>
	)
}

export default App
