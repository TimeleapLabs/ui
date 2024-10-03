import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unfonts from 'unplugin-fonts/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		unfonts({
			custom: {
				families: [
					{
						name: 'Geist',
						src: './node_modules/geist/fonts/geist-sans/*.woff2'
					},
					{
						name: 'Geist Mono',
						src: './node_modules/geist/fonts/geist-mono/*.woff2'
					}
				]
			}
		})
	]
});
