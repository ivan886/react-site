import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ivan886.github.io/react-site/',   //se indica donde se alojara el sitio
  plugins: [react()]
})
