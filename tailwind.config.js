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
				sans: ['var(--font-barlow)'],
				'sans-serif': ['var(--font-barlow-condensed)'],
				serif: ['var(--font-bellefair)'],
			},
			fontSize: {
				'10xl': '150px',
				'8.25xl': '100px',
				'7.5xl': ['80px', '100px'],
				'5.5xl': '56px',
				'3.5xl': '32px',
				'2.5xl': '28px',
				midBase: ['15px', '25px'],
			},
			backgroundImage: {
				'home-desktop': 'url("/assets/home/background-home-desktop.jpg")',
				'home-tablet': 'url("/assets/home/background-home-tablet.jpg")',
				'home-mobile': 'url("/assets/home/background-home-mobile.jpg")',
				'destination-desktop':
					'url("/assets/destination/background-destination-desktop.jpg")',
				'destination-tablet':
					'url("/assets/destination/background-destination-tablet.jpg")',
				'destination-mobile':
					'url("/assets/destination/background-destination-mobile.jpg")',
				'crew-desktop': 'url("/assets/crew/background-crew-desktop.jpg")',
				'crew-tablet': 'url("/assets/crew/background-crew-tablet.jpg")',
				'crew-mobile': 'url("/assets/crew/background-crew-mobile.jpg")',
				'technology-desktop':
					'url("/assets/technology/background-technology-desktop.jpg")',
				'technology-tablet':
					'url("/assets/technology/background-technology-tablet.jpg")',
				'technology-mobile':
					'url("/assets/technology/background-technology-mobile.jpg")',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
