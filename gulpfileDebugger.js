const gulp = require('gulp')
const ts = require('gulp-typescript')
const rollup = require('rollup')
const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonJs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const del = require('rollup-plugin-del')

const resolvePath = (...args) => path.resolve(__dirname, ...args)

const rollupOptions = {
  input: resolvePath('./packages/src/index.ts'),
  plugins: [
    del(),
    babel({ babelHelpers: 'bundled' }),
    typescript(),
    commonJs(),
    nodeResolve()
  ]
}

async function buildJs() {
  try {
    const bundle = await rollup.rollup(rollupOptions)
    await bundle.write({
      file: resolvePath(`./dist/index.es.js`),
      format: 'es'
    })
    await bundle.write({
      file: resolvePath(`./dist/index.iife.js`),
      format: 'iife',
      name: 'wHooks'
    })
    await bundle.write({
      file: resolvePath(`./dist/index.cjs.js`),
      format: 'cjs'
    })
  } catch (e) {
    // console.error(e)
  }
}

async function buildTs() {
  return gulp
    .src('packages/src/**/*.ts')
    .pipe(
      ts({
        declaration: true
      })
    )
    .dts.pipe(gulp.dest('typings'))
}

exports.default = gulp.parallel(buildJs, buildTs)
