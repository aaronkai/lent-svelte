const { maxWidth } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif]
			},
			maxWidth: {
				'content-1': '20ch',
				'content-2': '45ch',
				'content-3': '55ch',
				'heading-1': '20ch',
				'heading-2': '25ch',
				'heading-3': '35ch'
			}
		}
	},

	plugins: []
};

module.exports = config;
