import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import html from '@rollup/plugin-html'; html template


const src = 'src';
const dist = 'dist';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: `${src}/index.js`,
	output: {
		file: `${dist}/bundle.js`,
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && terser(), // minify, but only in production
		// you may want to use an html template instead of copying your html into the build path
		// html({
		// 	title: 'D3 Selections (bundled)'
		// })
	]
};