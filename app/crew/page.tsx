'use client'
import Header from '@/components/Header'
import { crew } from '@/data'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const CrewPage = () => {
	const [index, setIndex] = useState(0)

	const goToSlide = (slideIndex: number) => {
		setIndex(slideIndex)
	}

	return (
		<main className='min-h-screen bg-crew-mobile bg-cover bg-center bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop'>
			<Header />
			<section className='grid grid-cols-1 justify-items-center gap-8 p-6 pb-24 md:gap-14 md:p-10 md:pb-0 lg:grid-cols-4 lg:grid-rows-3 lg:items-start lg:justify-items-start lg:pb-0 lg:pl-44 lg:pt-20'>
				{/* Heading */}

				<h1 className='uppercase tracking-[2.7px] text-white md:justify-self-start md:text-xl md:tracking-[3.375px] lg:col-span-2 lg:col-start-1 lg:text-2.5xl lg:tracking-[4.725px]'>
					<span className='pr-[18px] font-bold opacity-25 md:pr-5 lg:pr-7'>
						02
					</span>
					Meet your crew
				</h1>

				{/* Hero Image */}
				<div className='relative h-[223px] w-[327px] md:order-last md:h-[572px] md:w-[456px] lg:col-start-3 lg:row-span-3  lg:h-[712px] lg:w-[568px]'>
					<Image
						src={crew[index].images.webp}
						alt={crew[index].name}
						fill
						className='aspect-auto border-b border-[#383B4B] object-contain md:border-none'
					/>
				</div>

				{/* Slider + Information Panel */}
				<div className='flex flex-col items-center gap-8 md:gap-10 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:items-start lg:gap-28'>
					{/* Slider Buttons */}
					<ul className='flex gap-4 md:order-last'>
						{crew.map((item, currentIndex) => (
							<li key={item.name}>
								<button onClick={() => goToSlide(currentIndex)}>
									<div
										className={clsx(
											'h-3 w-3 rounded-full bg-white',
											index === currentIndex
												? 'bg-opacity-100'
												: 'bg-opacity-20'
										)}
									/>
								</button>
								<span className='sr-only'>{`Go to Slide ${
									currentIndex + 1
								}`}</span>
							</li>
						))}
					</ul>
					{/* Information Panel */}
					<div className='flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:justify-start lg:gap-7 lg:text-left'>
						<h2 className='flex flex-col items-center gap-2 font-serif text-2xl uppercase text-white md:gap-5 md:text-[40px]/10 lg:items-start lg:text-5.5xl'>
							<span className='block text-base opacity-50 md:text-2xl lg:text-3.5xl'>
								Commander
							</span>
							{crew[index].name}
						</h2>
						<p className='md:text-base/leading-7 max-w-sm font-sans text-midBase text-lavendarBlue md:max-w-md lg:max-w-lg'>
							{crew[index].bio}
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
export default CrewPage
