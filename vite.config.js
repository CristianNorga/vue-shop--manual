import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	resolve: {
		alias: {
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@containers': fileURLToPath(new URL('./src/containers', import.meta.url)),
			'@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
			'@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
			'@logos': fileURLToPath(new URL('./src/assets/logos', import.meta.url)),
		},
	},
	server: {
		port: 3005,
		strictPort: true,
		// open: "/public/index.html"
	},
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 			main: resolve(__dirname, "public/index.html"),
	// 			// nested: resolve(__dirname, "nested/index.html"),
	// 		},
	// 	},
	// },
});
