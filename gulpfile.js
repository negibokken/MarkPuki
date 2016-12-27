const gulp = require('gulp');
const $ = require('gulp-load-plugins');
const babel = require('gulp-babel');
const electron = require('electron-connect').server.create();
const merge = require('merge-stream');
const del = require('del');

const srcDir = './javascript';

gulp.task('compile', () => {
  const src = gulp.src(srcDir + '/**/*.{js, jsx}')
                  .pipe(babel())
                  .pipe(gulp.dest('./build'));

  const components = gulp.src(srcDir + '/components/*.jsx')
                         .pipe(babel())
                         .pipe(gulp.dest('./build/components/'));

  return merge(src, components);
});

gulp.task('start', ['compile'], () => {
  electron.start();
  // gulp.watch([srcDir + '/**/*.js', srcDir + '/components/*.jsx'], ['compile']);
  // gulp.watch(['index.js', 'javascript/*.js', 'javascript/components/*.js'], electron.reload);
  // gulp.watch(['index.html', 'index.css'], electron.reload);
});

gulp.task('clean', () => {
  return del('./build');
});