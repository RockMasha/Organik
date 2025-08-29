import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  plugins: [
    replace({
      include: ['node_modules/zod/**'],
      values: {
        'export * from "../v4/locales/index.js";':
          '// locales removed by vite-plugin-replace',
        'export * from "../v4/locales/index.cjs";':
          '// locales removed by vite-plugin-replace',
        '__exportStar(require("../v4/locales/index.cjs"), exports);':
          '// locales removed by vite-plugin-replace',
      },
      preventAssignment: true,
      delimiters: ['', ''],
      apply: 'build',
    }),
    preact(),
    tailwindcss(),
    svgr(),
    visualizer({
      filename: 'bundle-report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/Organic',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          zod: ['zod'],
          sonner: ['sonner'],
        },
      },
    },
  },
})
