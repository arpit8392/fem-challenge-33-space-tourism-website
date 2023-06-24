import Link from 'next/link'

// TODO: Add Hover/Active State on Tabs and Main Button
// TODO: Review the Text Sizes and Letter Spacing to see if this can be componentised to avoid using fixed px values

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between gap-20 px-6 py-12 text-center text-lavendarBlue md:gap-36 md:px-40 md:pb-24 md:pt-28 lg:flex-row lg:pb-32 lg:pt-64 lg:text-left'>
			<div className='flex flex-col items-center gap-4 md:gap-6 lg:items-start '>
				<p className='uppercase tracking-[2.7px] md:text-[20px] md:tracking-[3.375] lg:text-[28px] lg:tracking-[4.725px]'>
					So, you want to travel to
				</p>
				<h1 className='font-serif text-[80px]/[100px] uppercase text-white md:text-[150px]/[150px]'>
					Space
				</h1>
				<p className='max-w-sm font-sans text-[15px]/[25px] md:text-base/7 lg:max-w-md lg:text-lg/8'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>

			<Link
				href={'/destination'}
				className='flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-serif text-[20px] uppercase tracking-[1.25px] text-midnightBlue md:h-[242px] md:w-[242px] md:text-[32px] md:tracking-[2px] lg:h-[274px] lg:w-[274px]'>
				Explore
			</Link>
			{/* TODO: Button Hover State Code :: 450 is very high for smaller screens */}
			{/* <div className='w-[450px] h-[450px] flex items-center justify-center bg-white rounded-full bg-opacity-10'></div> */}
		</main>
	)
}
