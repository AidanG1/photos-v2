import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA(
		{
			workbox: { globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,webmanifest,avif,jp2}', 'prerendered/**/*.html'] } 
		}
	)]
});
