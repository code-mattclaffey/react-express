require('dotenv').config()

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'
import { glob } from 'glob'
import path from 'path'
import pkg from './package.json'

const getEntryFiles = () => {
  const components = glob.sync('src/components/*/index.ts')
  const experiences = glob.sync('src/experiences/*/index.ts')

  const entries: Record<string, string>[] = [...components, ...experiences].map(
    (file) => {
      const name = path.dirname(file).split('/').pop() as string
      return {
        [name]: file,
      }
    },
  )

  entries.push({
    index: './src/index.ts',
  })

  //  { index: '', RcActionButton: '' }
  return entries.reduce((obj, currentFile) => {
    Object.keys(currentFile).forEach((key) => {
      obj[key] = currentFile[key]
    })

    return obj
  }, {})
}

// @ts-ignore
export default defineConfig(() => {
  return {
    define: {
      'process.env': {
        NODE_ENV: 'production',
        STORYBOOK_BASE_PATH: process.env.STORYBOOK_BASE_PATH ?? '/',
      },
    },
    plugins: [
      react(),
      dts({ tsconfigPath: './tsconfig.json', insertTypesEntry: true }),
      visualizer({
        title: 'react file size report',
        open: process.env.ANALYZE_BUNDLE === 'true',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./src/styles/global.scss" as *;
          `,
        },
      },
    },
    build: {
      lib: {
        entry: getEntryFiles(),
        formats: ['cjs', 'es'],
      },
      target: 'es2020',
      minify: 'terser',
      rollupOptions: {
        external: Object.keys(pkg.peerDependencies),
      },
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    },
  }
})
