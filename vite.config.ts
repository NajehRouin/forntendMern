import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv('mock', process.cwd(), '');
  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
    build: {
      chunkSizeWarningLimit: 100000000,
    },
  };
});
