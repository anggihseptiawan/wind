import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
      copyDtsFiles: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "index.ts",
      name: "wind",
      formats: ["es"],
      fileName: (_, name) => `${name}.js`,
    },
    outDir: "lib",
    emptyOutDir: true,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/icons-material",
        "@emotion/styled",
        "@emotion/react",
      ],
      output: {
        preserveModules: true,
      },
    },
  },
})
