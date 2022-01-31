import { defineConfig } from 'vite'
import { terser } from "rollup-plugin-terser";
// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    {
      ...terser(),
      apply:"build"
    }
  ],
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
