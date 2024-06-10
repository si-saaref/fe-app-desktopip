/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-blue': 'rgb(4,24,54)',
				'second-blue': '#00377E',
				'main-yellow': '#FFB400',
				'main-grey': '#888',
				'yellow-grey': '#BB6002',
			},
		},
		fontFamily: {
			gabarito: ['Gabarito', 'sans-serif'],
		},
	},
	plugins: [],
};
