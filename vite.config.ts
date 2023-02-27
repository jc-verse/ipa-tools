import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssr } from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  base: "/ipa-tools/",
  plugins: [react(), ssr({ prerender: true })],
});
