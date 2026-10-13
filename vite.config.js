import { defineConfig } from 'vite';

export default defineConfig({
  root: "./src",                   /* index.html fuera de src/ */
  base: "/projectvite/",
  publicDir: "public",
  plugins: [],
  server: { port: 1234 },
  build: {
    outDir: "dist",
  }
});