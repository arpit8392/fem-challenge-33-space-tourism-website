'use client'

import Header from '@/components/Header'
import { destinations } from '@/data'
import Image from 'next/image'
import clsx from 'clsx'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

const Workspace = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<main className='min-h-screen bg-destination-mobile bg-cover bg-center bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop'>
			<Header />
			<section className='flex flex-col items-center justify-center gap-8 p-6 pb-14 md:gap-16 md:p-10 md:pb-16 lg:p-20 lg:pl-56 lg:pr-40'>
				<h1 className='uppercase tracking-[2.7px] text-white md:self-start md:text-xl md:tracking-[3.375px] lg:text-2.5xl lg:tracking-[4.725px]'>
					<span className='pr-[18px] font-bold opacity-25 md:pr-5 lg:pr-7'>
						01
					</span>
					Pick Your Destination
				</h1>

				<article className='flex flex-col items-center justify-center gap-7 md:gap-8 lg:flex-row lg:items-start lg:gap-48'>
					<div className='relative h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px]'>
						<Image
							src={destinations[selectedIndex].images.webp}
							alt={destinations[selectedIndex].name}
							fill
						/>
					</div>
					<div className='flex flex-col gap-5 md:gap-8 lg:gap-9'>
						<Tab.Group
							defaultIndex={0}
							selectedIndex={selectedIndex}
							onChange={setSelectedIndex}>
							<Tab.List className='flex items-center justify-center gap-7 md:gap-9 lg:justify-start'>
								{destinations.map((destination) => (
									<Tab
										key={destination.name}
										className={({ selected }) =>
											clsx(
												'cursor-pointer text-sm uppercase tracking-[2.4px] decoration-[3px] underline-offset-[12px] outline-none md:text-base md:tracking-[2.7px]',
												selected
													? 'text-white underline hover:decoration-white '
													: 'text-lavendarBlue hover:underline hover:decoration-white/50'
											)
										}>
										{destination.name}
									</Tab>
								))}
							</Tab.List>
							<Tab.Panels>
								{destinations.map((destination, index) => (
									<Tab.Panel
										key={index}
										className='flex flex-col gap-8 text-center text-lavendarBlue lg:gap-14 lg:text-left'>
										<div className='flex flex-col md:gap-2 lg:gap-3'>
											<h2 className='font-serif text-5.5xl uppercase text-white md:text-7.5xl lg:text-8.25xl'>
												{destination.name}
											</h2>
											<p className='max-w-sm font-sans text-midBase md:max-w-xl md:text-base/7 lg:max-w-md lg:text-lg/8'>
												{destination.description}
											</p>
										</div>
										<hr className='h-[1px] w-full border-[#383B4B]' />
										<div className='flex flex-col gap-8 md:flex-row md:justify-around lg:justify-start lg:gap-20'>
											<div className='flex flex-col gap-3'>
												<h3 className='text-sm uppercase tracking-[2.4px] '>
													Avg. Distance
												</h3>
												<p className='font-serif text-2.5xl uppercase text-white'>
													{destination.distance}
												</p>
											</div>
											<div className='flex flex-col gap-3'>
												<h3 className='text-sm uppercase tracking-widest'>
													Est. travel time
												</h3>
												<p className='font-serif text-2.5xl uppercase text-white'>
													{destination.travel}
												</p>
											</div>
										</div>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</div>
				</article>
			</section>
		</main>
	)
}
export default Workspace
