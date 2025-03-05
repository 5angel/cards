import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map "@" to the "src" directory
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
