import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      branches: 90,
      lines: 90,
      statements: 90,
      functions: 90,
      provider: "istanbul", // or 'c8'
      reporter: ["html"],
    },
  },
});
