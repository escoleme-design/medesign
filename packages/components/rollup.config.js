import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const INPUT_FILE_PATH = 'src/index.ts';
const OUTPUT_NAME = 'mecomponents';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

const PLUGINS = [
  postcss({
    extract: true,
    // plugins: [
    //   autoprefixer,
    // ],
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    extensions: EXTENSIONS,
  }),
  resolve({
    browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!prop-types)/,
    ],
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    transformers: [
      () => ({
        before: [styledComponentsTransformer],
      }),
    ],
  }),
  terser(),
  filesize(),
];

const EXTERNAL = [
  'react',
  'react-dom',
  'prop-types',
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

export default [
  ...config,
  {
    input: 'build/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  }
];