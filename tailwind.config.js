const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#000',
					hover: '#000',
					active: '#000'
				},
				dark: {
					DEFAULT: colors.black
				},
				light: {
					DEFAULT: colors.white
				}
			},
			fontFamily: {
				sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
				mono: ['Noto Sans Mono', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1.5' }],
				sm: ['0.875rem', { lineHeight: '1.5' }],
				base: ['1rem', { lineHeight: '1.5' }],
				lg: ['1.125rem', { lineHeight: '1.5' }],
				xl: ['1.25rem', { lineHeight: '1.5' }],
				'2xl': ['1.5rem', { lineHeight: '1.5' }],
				'3xl': ['1.875rem', { lineHeight: '1.5' }],
				'4xl': ['2.25rem', { lineHeight: '1.5' }],
				'5xl': ['3rem', { lineHeight: '1.5' }],
				'6xl': ['3.75rem', { lineHeight: '1.5' }],
				'7xl': ['4.5rem', { lineHeight: '1.5' }],
				'8xl': ['6rem', { lineHeight: '1.5' }],
				'9xl': ['8rem', { lineHeight: '1.5' }]
			}
		}
	},
	plugins: [
		//require("@tailwindcss/typography")
	]
};
