// Includiamo Gulp
var gulp = require('gulp');

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync.init(['style/*.css', 'js/**/*.js', 'index.html'], {
    proxy: "http://vaporart.ll"
  });
});
