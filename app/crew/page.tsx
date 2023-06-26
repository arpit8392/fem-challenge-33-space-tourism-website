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
			<section className='flex flex-col items-center justify-center gap-8 p-6 pb-24 md:gap-14 md:p-10 md:pb-0 lg:pl-44 lg:pr-36 lg:pt-20 lg:gap-36 lg:items-start'>
				{/* Heading */}
				<h1 className='uppercase tracking-[2.7px] text-white md:self-start md:text-xl md:tracking-[3.375px] lg:text-2.5xl lg:tracking-[4.725px]'>
					<span className='pr-[18px] font-bold opacity-25 md:pr-5 lg:pr-7'>
						02
					</span>
					Meet your crew
				</h1>

				{/* Container for rest of the content */}
				<div className='flex flex-col items-center justify-center gap-8 md:gap-10 lg:flex-row lg:gap-20 lg:items-start'>
					{/* Image + Border */}
					<div className='relative h-[223px] w-[327px] md:order-last md:h-[572px] md:w-[456px] lg:h-[712px] lg:w-[568px]'>
						<Image
							src={crew[index].images.webp}
							alt={crew[index].name}
							fill
							className='border-b border-[#383B4B] object-contain md:border-none'
						/>
					</div>
					<div className='flex flex-col items-center lg:items-start gap-8 md:gap-10 lg:gap-32'>
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
						<div className='flex flex-col items-center justify-center gap-4 text-center lg:text-left lg:justify-start lg:items-start lg:gap-7'>
							<h2 className='flex flex-col items-center gap-2 font-serif text-2xl uppercase text-white md:text-[40px] lg:items-start lg:text-5.5xl md:gap-5'>
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
				</div>
			</section>
		</main>
	)
}
export default CrewPage
