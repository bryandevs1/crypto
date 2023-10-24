import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelint from 'vite-plugin-stylelint';
import ESLintPlugin from '@modyqyw/vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@fonts': path.resolve(__dirname, 'src/sass/fonts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@sass': path.resolve(__dirname, 'src/sass'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@assets': path.resolve(__dirname, 'public/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  plugins: [
    react(),
    stylelint({
      fix: true,
    }),
    ESLintPlugin({
      fix: true,
    }),
  ],
  
});
