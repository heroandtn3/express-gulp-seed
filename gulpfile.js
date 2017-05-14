const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

gulp.task('default', ['lint']);

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('dev', () => {
  nodemon({
    script: 'backend/index.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development'
    }
  });
});
