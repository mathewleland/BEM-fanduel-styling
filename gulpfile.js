const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app'))
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});