import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Puedes cambiar este número si tienes otros proyectos corriendo
    host: true, // Esto permite que Docker lo exponga correctamente
    strictPort: true // Evita que Vite cambie el puerto automáticamente si está ocupado
  }
})
