import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$components: 'src/components',
			$lib: 'src/components',
			$routes: 'src/routes',
			$db: 'src/db'
		}
	}
};

export default config;
