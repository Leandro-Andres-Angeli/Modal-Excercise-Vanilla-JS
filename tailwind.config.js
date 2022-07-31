/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			colors: {
				blue: colors.blue,
				cyan: colors.cyan,
				white: colors.white,
				bg_modal: 'rgba(87, 85, 85, 0.6)',
			},
		},
	},
	plugins: [],
};
