const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');

// Sass/CSS stuff
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');

// compile all Sass
gulp.task('styles', function (){
  return gulp.src('./styles/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('js', function() {
  return (
    gulp
      .src('js/*js')
      .pipe(
        babel({
          presets: ['env'],
        })
      )
      .pipe(browserify())
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  );
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function(done) {
  browserSync.reload();
  done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js'], function() {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('js/*.js', ['js-watch']);
  gulp.watch('./styles/sass/*.scss', ['styles']);
  gulp.watch('index.html', ['styles']);
});
