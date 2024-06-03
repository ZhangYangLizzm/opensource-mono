import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8082",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
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
