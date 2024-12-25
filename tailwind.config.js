/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%, 25%': { transform: 'rotate(0deg)' },
					'35%': { transform: 'rotate(-3deg)' },
					'45%': { transform: 'rotate(3deg)' },
					'55%, 100%': { transform: 'rotate(0deg)' },
				},
			},
			animation: {
				shake: 'shake 2.5s ease-in-out infinite',
			},
		},
		fontFamily: {
			GL: ['GmarketSansLight'],
			GM: ['GmarketSansMedium'],
			GB: ['GmarketSansBold'],
		},
	},
	plugins: [],
};
