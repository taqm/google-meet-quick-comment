import rollupTypeScript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import globals from 'rollup-plugin-node-globals';

export default [
  {
    input: './src/content.tsx',
    output: {
      file: './dist/content.js',
      format: 'iife',
    },
    plugins: [nodeResolve(), commonjs(), rollupTypeScript(), globals()],
  },
];
