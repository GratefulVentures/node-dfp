const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const fs = require('fs');
const del = require('del');
const glob = require('glob');
const path = require('path');
const mkdirp = require('mkdirp');
const isparta = require('isparta');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');

const manifest = require('./package.json');
const config = {
  mochaGlobals: [
    "stub",
    "spy",
    "expect"
  ]
}
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);

// Remove the built files
gulp.task('clean', function(cb) {
  del([destinationFolder], cb);
});

// Remove our temporary files
gulp.task('clean-tmp', function(cb) {
  del(['tmp'], cb);
});

// Build two versions of the library
gulp.task('build', ['clean'], function(done) {
  return gulp.src('src/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('coverage', function(done) {
  require('babel/register')({ modules: 'common' });
  gulp.src(['src/**/*.js'])
    .pipe($.istanbul({ instrumenter: isparta.Instrumenter }))
    .pipe($.istanbul.hookRequire())
    .on('finish', function() {
      return test()
      .pipe($.istanbul.writeReports())
      .on('end', done);
    });
});

function test() {
  return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {read: false})
    .pipe($.mocha({reporter: 'dot', globals: config.mochaGlobals}));
}

// run our tests
gulp.task('test', function() {
  require('babel/register')({ modules: 'common' });
  return test();
});

// Ensure that linting occurs before browserify runs. This prevents
// the build from breaking due to poorly formatted code.
gulp.task('build-in-sequence', function(callback) {
  runSequence(['browserify'], callback);
});

const watchFiles = ['src/**/*', 'test/**/*', 'package.json'];

// Run the headless unit tests as you make changes.
gulp.task('watch', function() {
  gulp.watch(watchFiles, ['test']);
});

// Set up a livereload environment for our spec runner
gulp.task('test-browser', ['build-in-sequence'], function() {
  $.livereload.listen({port: 35729, host: 'localhost', start: true});
  return gulp.watch(watchFiles, ['build-in-sequence']);
});

// An alias of test
gulp.task('default', ['test']);
