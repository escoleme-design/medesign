import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import dts from "rollup-plugin-dts";
import { terser } from 'rollup-plugin-terser';

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

// Array of extensions to be handled by babel
const EXTENSIONS = [".ts", ".tsx"];

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

const plugins = [
  peerDepsExternal(),
  commonjs({
    include: /node_modules/,
    namedExports: {
      'node_modules/lodash/index.js': ['get'],
    }
  }),
  resolve(),
  babel({
    extensions: EXTENSIONS,
    babelHelpers: "runtime",  // https://github.com/kraftdorian/react-ts-rollup-starter-lib/issues/1
    include: EXTENSIONS.map(ext => `src/**/*${ext}`),
    plugins: ["@babel/plugin-transform-runtime"]
  }),
  typescript({
    tsconfig: './tsconfig.json',
    transformers: [
      () => ({
        before: [styledComponentsTransformer],
      }),
    ],
  }),
  terser(),
]

export default [
  {
    input: 'src/index.ts',

    output: [
      {
        dir: "dist",
        sourcemap: true,
        format: "esm",
        name: 'mecomponents',
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
        // external: ['@escoleme/meicons-react'],
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      },
      {
        dir: "dist",
        sourcemap: true,
        format: "umd",
        name: 'mecomponents',
        // external: ['@escoleme/meicons-react'],
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    ],
    plugins,
    external: EXTERNAL  // https://rollupjs.org/guide/en/#peer-dependencies
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  }
];
