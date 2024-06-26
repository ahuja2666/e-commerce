import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure Vite to support SPAs
    fs: {
      strict: false, // Allow serving files outside of the root
    },
  },
});
