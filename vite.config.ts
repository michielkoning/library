import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path';
import dts from 'unplugin-dts/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      processor: 'vue',
      tsconfigPath: './tsconfig.app.json'
    }),
    vue(),
    vueDevTools(),
  ],
  build: {
		lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'ComponentLibary',
      formats: ['es'],
			fileName: 'library'
		},
    rolldownOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },

      },
    },
	},

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
