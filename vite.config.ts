import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssr } from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [react(), ssr({ prerender: true })],
});
