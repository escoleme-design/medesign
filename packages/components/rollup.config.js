import babel from "rollup-plugin-babel";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from "rollup-plugin-dts";


// \/
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
// import typescript from 'rollup-plugin-typescript2';

const plugins = [
  babel({ exclude: "node_modules/**" }),
  external(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    // transformers: [
    //   () => ({
    //     before: [styledComponentsTransformer],
    //   }),
    // ],
  }),
  postcss(),
  terser(),
  
];


const packageJson = require('./package.json');
const formats = ['esm', 'umd']

export default [
  {
    input: 'src/index.ts',
    output: formats.map(format => ({
      file: `dist/index.${format}.js`,
      format,
      sourcemap: true,
      name: 'mecomponents',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled'
      }
    })),
    plugins: plugins
  }, 
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  }
]