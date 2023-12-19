// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Opciones de configuración de Sass
      },
    },
  },
};
