import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/smart-home-website-offer-arabiya/', // Add this line with your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
