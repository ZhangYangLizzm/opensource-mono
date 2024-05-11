import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

const resolvePackagesPath = (libPath: string) => {
  return join(__dirname, '../../', `packages/${libPath}`);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
      "@packages/shared": resolvePackagesPath('shared'),

    },
  },
  server: {
    port: 8081,
    open: true,
  },
})
