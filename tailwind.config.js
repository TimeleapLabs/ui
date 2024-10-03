/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist"'],
				mono: ['"Geist Mono"']
			}
		}
	},
	plugins: []
};
