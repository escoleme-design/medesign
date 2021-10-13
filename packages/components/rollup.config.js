import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import {terser} from 'rollup-plugin-terser'
import {visualizer} from 'rollup-plugin-visualizer'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from "path";

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const formats = ['esm', 'umd']

const plugins = [
  babel({extensions, exclude: 'node_modules/**', runtimeHelpers: true}),
  resolve({extensions}),
  commonjs(),
  alias({}),
  terser(),
  peerDepsExternal(),
  visualizer({sourcemap: true}),
]

export default [
  {
    input: 'src/index.jsx',
    external: ['styled-components', 'react', 'react-dom'],
    plugins,
    output: formats.map(format => ({
      file: `dist/component.${format}.js`,
      format,
      sourcemap: true,
      name: '@escoleme/medesign-components',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled'
      }
    }))
  }
]