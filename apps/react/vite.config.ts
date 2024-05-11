import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { join } from "path";

const resolvePackagesPath = (libPath: string) => {
  return join(__dirname, '../../', `packages/${libPath}`);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
      "@packages/shared": resolvePackagesPath('shared'),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ["antd"],
          excel: ["exceljs"],
          echarts: ["echarts"],
          react: [
            "react",
            "@reduxjs/toolkit",
            "react-dom",
            "react-redux",
            "react-router-dom",
          ],
        },
      },
    },
  },
});
