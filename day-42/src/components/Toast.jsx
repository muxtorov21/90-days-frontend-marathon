import { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Toast = ({ message, type = 'success', onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose()
		}, 3000)

		return () => clearTimeout(timer)
	}, [onClose])

	const bgColors = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		info: 'bg-blue-500',
	}

	return ReactDOM.createPortal(
		<div
			className={`fixed bottom-5 right-5 ${bgColors[type]} text-white px-6 py-3 rounded-2xl shadow-2xl animate-bounce-in flex items-center gap-3 z-[100]`}
		>
			<span>{type === 'success' ? '' : ''}</span>
			<p className='font-bold'>{message}</p>
		</div>,
		document.body,
	)
}

export default Toast
