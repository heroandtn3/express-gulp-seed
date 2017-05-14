const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

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

gulp.task('dev', () => {
  nodemon({
    script: 'backend/index.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development',
    },
  });
});
