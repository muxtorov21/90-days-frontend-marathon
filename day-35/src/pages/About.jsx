import React from 'react'

const About = () => {
	return (
		<div className='max-w-4xl mx-auto p-6 animate-fade-in'>
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-black text-gray-900 mb-4'>
					90 Kunlik React Marafoni
				</h1>
				<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
					Assalomualekum! Men{' '}
					<span className='font-bold text-black'>Asadbek</span>. Bu loyiha
					mening 90 kunlik dasturlash marafonimning bir qismi hisoblanadi.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-6 mb-12'>
				<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
					<h3 className='text-xl font-bold mb-2'>Ishlatilgan Texnologiyalar</h3>
					<ul className='text-gray-600 space-y-2 text-sm'>
						<li>
							•{' '}
							<span className='font-semibold text-gray-800 text-base'>
								React 19
							</span>{' '}
							(Zamonaviy UI kutubxona)
						</li>
						<li>
							•{' '}
							<span className='font-semibold text-gray-800 text-base'>
								Tailwind CSS v4
							</span>{' '}
							(Stillashtirish)
						</li>
						<li>
							•{' '}
							<span className='font-semibold text-gray-800 text-base'>
								React Router DOM
							</span>{' '}
							(Navigatsiya)
						</li>
						<li>
							•{' '}
							<span className='font-semibold text-gray-800 text-base'>
								Custom Hooks
							</span>{' '}
							(useFetch, useLocalStorage)
						</li>
					</ul>
				</div>

				<div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
					<h3 className='text-xl font-bold mb-2'>Loyiha Maqsadi</h3>
					<p className='text-gray-600 text-sm leading-relaxed'>
						Ushbu loyiha foydalanuvchilarni boshqarish, ma'lumotlarni saralash,
						filtralash va API bilan ishlash ko'nikmalarini amalda qo'llash uchun
						yaratildi. Har bir komponent va har bir qator kod
						optimallashtirilgan.
					</p>
				</div>
			</div>

			<div className='bg-blue-600 rounded-3xl p-8 text-white text-center shadow-lg shadow-blue-200'>
				<h2 className='text-2xl font-bold mb-2'>Hozirgi kun: 38 / 90</h2>
				<p className='opacity-90'>
					"Dasturlash — bu shunchaki kod yozish emas, bu muammolarga yechim
					topish san'atidir."
				</p>
				<div className='mt-6 flex justify-center gap-4 text-sm font-medium'>
					<span className='bg-white/20 px-4 py-1.5 rounded-full'>#React</span>
					<span className='bg-white/20 px-4 py-1.5 rounded-full'>
						#Tailwind
					</span>
					<span className='bg-white/20 px-4 py-1.5 rounded-full'>
						#Learning
					</span>
				</div>
			</div>

			<div className='mt-12 text-center text-gray-400 text-sm'>
				Asadbek &copy; 2026
			</div>
		</div>
	)
}

export default About
