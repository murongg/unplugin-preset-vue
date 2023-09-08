import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import VuePresets from 'unplugin-preset-vue/vite'

export default defineConfig({
  plugins: [
    VuePresets({ }),
    Inspect(),
  ],
})
