import Header from '@/components/Header'
import './globals.css'
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'

const bellefair = Bellefair({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bellefair',
})

const barlow = Barlow({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-barlow',
})

const barlow_condensed = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-barlow-condensed',
})

export const metadata = {
	title: 'Space Tourism Website',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable} font-sans-serif`}>
				<div className='min-h-screen bg-home-mobile bg-cover bg-center bg-no-repeat md:bg-home-tablet lg:bg-home-desktop'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
