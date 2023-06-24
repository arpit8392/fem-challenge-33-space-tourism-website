/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				midnightBlue: '#0B0D17',
				lavendarBlue: '#D0D6F9',
			},
			fontFamily: {
				sans: ['var(--font-barlow-condensed)'],
				serif: ['var(--font-bellefair)'],
			},
			backgroundImage: {
				'home-desktop': 'url("/assets/home/background-home-desktop.jpg")',
				'home-tablet': 'url("/assets/home/background-home-tablet.jpg")',
				'home-mobile': 'url("/assets/home/background-home-mobile.jpg")',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
