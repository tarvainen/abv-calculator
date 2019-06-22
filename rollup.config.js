import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import html from 'rollup-plugin-bundle-html'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'dist/app.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    resolve(),
    css({ output: 'dist/styles.css' }),
    html({
      template: '<html><head></head><body></body></html>',
      dest: 'dist',
      filename: 'index.html',
      inject: 'head',
      externals: [
        { type: 'css', file: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
    serve({
      open: true,
      contentBase: 'dist',
      port: 8000
    })
  ]
}
