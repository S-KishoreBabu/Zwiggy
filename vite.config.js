import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // This tells Vite to run the React Compiler during the build/dev process
          ["babel-plugin-react-compiler", { target: "19" }],
        ],
      },
    }),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: "jsdom",
  }
})