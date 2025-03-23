import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import commonjs from "vite-plugin-commonjs";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === "development"
      ? [
        visualizer({
          filename: "bundle-report.html",
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      ]
      : []),
    commonjs(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "isomorphic-fetch": "cross-fetch",
    },
  },
  define: {
    global: "window",
  },
  build: {
    // sourcemap: true,
    rollupOptions: {
      external: ["isomorphic-fetch"],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));