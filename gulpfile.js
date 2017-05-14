const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const clean = require('gulp-clean');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', ['lint']);

gulp.task('lint', () => {
  return gulp.src([
    'backend/**/*.js',
    'frontend/**/*.js',
    'gulpfile.js',
    'webpack.config.js',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', () => {
  return gulp.src('build/*', { read: false })
    .pipe(clean());
});

gulp.task('dev', ['server', 'webpack-dev-server']);

gulp.task('server', () => {
  nodemon({
    script: 'backend/index.js',
    watch: ['backend/**/*.js'],
    ext: 'js',
    env: {
      NODE_ENV: 'development',
    },
  });
});

gulp.task('webpack-dev-server', (callback) => {
  // modify some webpack config options
  const myConfig = Object.create(webpackConfig);

  myConfig.devtool = 'source-map';

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    stats: {
      colors: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  }).listen(8080, '0.0.0.0', callback);
});
