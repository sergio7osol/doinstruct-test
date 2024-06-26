import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
// import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			'/api': {
        target: 'https://cms-api.doinstruct.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
		}
	},
});

