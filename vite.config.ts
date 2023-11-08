import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://cephy77.github.io/rick-n-morty-app/',
  plugins: [react()],
})
