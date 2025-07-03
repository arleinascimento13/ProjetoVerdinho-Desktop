import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
	base: "./",
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			"/api": {
				target: process.env.VITE_PROXY_TARGET,
				changeOrigin: true,
				rewrite: (path) => path, // Remove /api do path
			},
		},
	},
	define: {
		"process.env": process.env,
	},
});
