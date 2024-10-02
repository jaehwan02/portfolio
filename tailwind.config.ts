import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				nanumSquareNeoLt: 'var(--font-nanum-square-neo-lt)',
				nanumSquareNeoRg: 'var(--font-nanum-square-neo-rg)',
				nanumSquareNeoBd: 'var(--font-nanum-square-neo-bd)',
				nanumSquareNeoEb: 'var(--font-nanum-square-neo-eb)',
				nanumSquareNeoHv: 'var(--font-nanum-square-neo-hv)',
			},
		},
	},
	plugins: [],
};
export default config;
