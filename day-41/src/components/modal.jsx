import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in'>
			<div className='bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4 transform transition-all scale-100'>
				<h2 className='text-xl font-black mb-4 text-gray-800'>
					Tasdiqlaysizmi?
				</h2>
				<div className='text-gray-600 mb-6'>{children}</div>
				<div className='flex gap-3'>
					<button
						onClick={onClose}
						className='flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold transition-colors'
					>
						Yo'q
					</button>
					<button
						onClick={onConfirm}
						className='flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-shadow shadow-lg shadow-red-200'
					>
						Ha, o'chirilsin!
					</button>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default Modal
