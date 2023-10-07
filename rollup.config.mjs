import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const genConfig = minify => ({
  input: './src/index.js',
  output: {
    file: `./dist/package-name${ minify ? '.min' : '' }.js`,
    format: 'umd',
    name: 'packageName'
  },
  plugins: [
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    minify ? terser() : null,
    resolve()
  ]
})

export default [
  genConfig(),
  genConfig(true)
]