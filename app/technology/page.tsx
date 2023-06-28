'use client'
import Header from '@/components/Header'
import { crew, technology } from '@/data'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const Technology = () => {
	const [index, setIndex] = useState(0)

	const goToSlide = (slideIndex: number) => {
		setIndex(slideIndex)
	}

	return (
		<main className='min-h-screen bg-technology-mobile bg-cover bg-center bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop'>
			<Header />
			<section className='grid grid-cols-1 justify-items-center gap-8 pb-14 pt-6 md:gap-14 md:pt-10 md:pb-24 lg:grid-cols-4 lg:grid-rows-3 lg:items-start lg:justify-items-start lg:pb-0 lg:pl-44 lg:pt-20'>
				{/* Heading */}

				<h1 className='uppercase tracking-[2.7px] text-white md:pl-10 md:justify-self-start md:text-xl md:tracking-[3.375px] lg:col-span-2 lg:col-start-1 lg:text-2.5xl lg:tracking-[4.725px]'>
					<span className='pr-[18px] font-bold opacity-25 md:pr-5 lg:pr-7'>
						03
					</span>
					Space Launch 101
				</h1>

				{/* Hero Image */}
				<div className='relative h-[170px] w-full md:h-[310px] lg:col-start-3 lg:row-span-3 lg:h-[712px] lg:w-full'>
					<Image
						src={technology[index].images.landscape}
						alt={technology[index].name}
						fill
					/>
				</div>

				{/* Slider + Information Panel */}
				<div className='flex flex-col items-center gap-8 md:gap-10 lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:items-start lg:gap-28'>
					{/* Slider Buttons */}
					<ul className='flex gap-4'>
						{technology.map((item, currentIndex) => (
							<li key={item.name}>
								<button
									className={clsx(
										'flex h-10 w-10 md:h-16 md:w-16 md:text-2xl items-center justify-center rounded-full border border-white border-opacity-25 font-serif hover:border-opacity-100',
										index === currentIndex
											? 'bg-white text-midnightBlue'
											: 'bg-inherit text-white'
									)}
									onClick={() => goToSlide(currentIndex)}>
									{currentIndex + 1}
								</button>
							</li>
						))}
					</ul>
					{/* Information Panel */}
					<div className='flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:justify-start lg:gap-7 lg:text-left'>
						<h2 className='flex flex-col items-center gap-2 font-serif text-2xl uppercase text-white md:gap-4 md:text-[40px]/10 lg:items-start lg:text-5.5xl'>
							<span className='block font-sans-serif text-sm md:text-base md:tracking-[2.7px] uppercase tracking-[2.4px] text-lavendarBlue'>
								The Terminology…
							</span>
							{technology[index].name}
						</h2>
						<p className='md:text-base/leading-7 max-w-sm font-sans text-midBase text-lavendarBlue md:max-w-md lg:max-w-lg'>
							{technology[index].description}
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
export default Technology
