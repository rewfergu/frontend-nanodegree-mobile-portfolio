var gulp = require('gulp');
var uglify = require('gulp-uglify');
var compressCSS = require('gulp-minify-css');
var compressHTML = require('gulp-htmlmin');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var inlineCSS = require('gulp-inline-css');

gulp.task('minify-html', function() {
  gulp.src('*.html')
<<<<<<< HEAD
=======
  .pipe(inlineCSS({
    applyLinkTags: true,
    removeLinkTags: true
  }))
>>>>>>> 7d808afdaf6fffb8081be441f9f07437b329c912
  .pipe(compressHTML({
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  }))
  .pipe(gulp.dest('../'));

  gulp.src('views/*.html')
  .pipe(compressHTML({
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  }))
  .pipe(gulp.dest('../views/'));
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
  .pipe(compressCSS())
  .pipe(gulp.dest('../css'));

  gulp.src('views/css/*.css')
  .pipe(compressCSS())
  .pipe(gulp.dest('../views/css'));
});

gulp.task('minify-js', function() {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('../js'));

  gulp.src('views/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('../views/js'));
});

gulp.task('minify-img', function() {
  gulp.src('img/*')
  .pipe(imagemin({progressive: true}))
  .pipe(gulp.dest('../img'));

  gulp.src('views/images/*')
  .pipe(imagemin({progressive: true}))
  .pipe(gulp.dest('../views/images'));
});

gulp.task('watch', function() {
  var watchHTML = gulp.watch(['*.html', 'views/pizza.html'], 'minify-html');
  var watchCSS = gulp.watch(['css/*.css', 'views/css*.css'], 'minify-css');
  var watchJS = gulp.watch(['js/*.js', 'views/js/*.js'], 'minify-js');
});
