require("./environment")

var gulp      = require('gulp') // task runner
var rename    = require('gulp-rename') // rename a file
var less      = require('gulp-less') // Less CSS preprocessor
var prefix    = require('gulp-autoprefixer') // CSS vendor prefixes
var watch     = require('gulp-watch') // rebuild tasks
var nodemon   = require('gulp-nodemon') // live reload server
var plumber   = require('gulp-plumber') // in case it all goes horribly wrong

var browserify  = require('browserify') // turn node.js js in to browser js
var source      = require('vinyl-source-stream') // standardise node stream types


// gulp.task('minify', ['styles'], function() {
//   return gulp.src('./build/bundle.css')
//     .pipe(minifyCSS())
//     .pipe(rename('app.min.css'))
//     .pipe(gulp.dest('./public/css'))
// })

gulp.task('js', function() {
  browserify('./client/js/index.js')
    .bundle()
    .pipe(plumber())
    .pipe(source('index.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public'))
})

gulp.task('styles', function() {
  return gulp.src('./client/less/index.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./public'))
})

gulp.task('watch', function(done){
  gulp.watch('./client/less/*.less', ['styles'])
  gulp.watch('./client/js/*.js', ['js'])
  done()
})

gulp.task('default', ['watch'])

// start with `npm run nodemon`
gulp.task('srv', ['watch'], function() {
  nodemon({
    script: 'server.js',
    delay: 2500
  })
})

