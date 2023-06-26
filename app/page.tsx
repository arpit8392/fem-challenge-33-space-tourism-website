import Header from '@/components/Header'
import Link from 'next/link'

// TODO: Add Hover/Active State on Tabs and Main Button

export default function Home() {
	return (
		<main className='min-h-screen bg-home-mobile bg-cover bg-center bg-no-repeat md:bg-home-tablet lg:bg-home-desktop'>
			<Header />
			<section className='flex flex-col items-center justify-between gap-20 px-6 py-12 text-center text-lavendarBlue md:gap-36 md:px-40 md:pb-24 md:pt-28 lg:flex-row lg:pb-32 lg:pt-64 lg:text-left'>
				<div className='flex flex-col items-center gap-4 md:gap-6 lg:items-start lg:gap-8 '>
					<p className='uppercase tracking-[2.7px] md:text-xl/10 md:tracking-[3.375px] lg:text-2.5xl lg:tracking-[4.725px]'>
						So, you want to travel to
					</p>
					<h1 className='font-serif text-7.5xl uppercase text-white md:text-10xl'>
						Space
					</h1>
					<p className='max-w-sm font-sans text-midBase md:text-base/7 lg:max-w-md lg:text-lg/8'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>

				<Link
					href={'/destination'}
					className='flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-serif text-xl uppercase tracking-[1.25px] text-midnightBlue md:h-[242px] md:w-[242px] md:text-3.5xl md:tracking-[2px] lg:h-[274px] lg:w-[274px]'>
					Explore
				</Link>
			</section>
		</main>
	)
}
