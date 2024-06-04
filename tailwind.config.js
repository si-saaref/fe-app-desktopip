/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-blue': '#041386',
				'second-blue': '#00377E',
				'main-yellow': '#FFB400',
				'main-grey': '#888',
			},
		},
	},
	plugins: [],
};
