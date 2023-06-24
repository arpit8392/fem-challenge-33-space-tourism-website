'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { navigations } from '@/data'
import Logo from '@/public/assets/shared/logo.svg'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header>
			<nav className='relative flex items-center justify-between p-6 md:pl-10 md:pr-0 md:pt-0 lg:pl-14 lg:pt-10'>
				<div className='h-10 w-10 rounded-full bg-white md:h-12 md:w-12'>
					<Image
						src={Logo}
						alt='Space Tourism Logo'
						className='w-auto object-contain'
					/>
				</div>
				<div className='absolute z-10 hidden h-[1px] w-[473px] translate-x-40 bg-white opacity-25 lg:block' />
				<div className='flex md:hidden'>
					<button type='button' className='' onClick={() => setIsOpen(true)}>
						<span className='sr-only'>Open Main Menu</span>
						<Bars3Icon className='h-5 w-6 text-white' />
					</button>
				</div>
				<ul className='hidden items-center gap-9 bg-white bg-opacity-5 px-12 py-10 text-white backdrop-blur-[82px] md:flex lg:pl-32 lg:pr-40'>
					{navigations.map((item) => (
						<li key={item.name}>
							<Link
								href={item.href}
								className='text-sm uppercase tracking-[2.4px] lg:text-base'>
								<span className='hidden pr-3 font-bold lg:inline'>
									{item.displayNumber}
								</span>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Dialog
				as='div'
				className='md:hidden'
				open={isOpen}
				onClose={() => setIsOpen(false)}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-2/3 overflow-hidden bg-white bg-opacity-5 p-8 text-white backdrop-blur-[82px]'>
					<div className='flex justify-end pb-20'>
						<button type='button' onClick={() => setIsOpen(false)}>
							<span className='sr-only'>Close Menu</span>
							<XMarkIcon
								className='h-5 w-5 text-lavendarBlue'
								aria-hidden='true'
							/>
						</button>
					</div>
					<ul className='flex flex-col gap-8'>
						{navigations.map((item) => (
							<li key={item.name}>
								<Link
									href={item.href}
									className='text-base uppercase tracking-[2.4px]'>
									<span className='inline pr-3 font-bold'>
										{item.displayNumber}
									</span>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
