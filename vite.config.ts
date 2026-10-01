import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "path";
import dts from "unplugin-dts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      processor: "vue",
      tsconfigPath: "./tsconfig.app.json",
    }),
    vue(),
    vueDevTools(),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: [
        resolve(import.meta.dirname, "src/index.ts"),
        resolve(import.meta.dirname, "src/wdt.ts"),
      ],
      name: "ComponentLibary",
      formats: ["es"],
      fileName: "library",
    },
    cssCodeSplit: true,
    rolldownOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "@vee-validate/zod",
        "vee-validate",
        "vue",
        "vue-router",
        "zod",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
